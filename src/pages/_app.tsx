import {
  createIsographEnvironment,
  createIsographStore,
  IsographEnvironmentProvider,
} from '@isograph/react';
import type { AppProps } from 'next/app';
import { Suspense, useMemo } from 'react';

function makeNetworkRequest<T>(
  queryText: string,
  variables: unknown,
): Promise<T> {
  const promise = fetch('https://graphql-pokemon2.vercel.app/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: queryText, variables }),
  }).then(async (response) => {
    const json = await response.json();

    if (response.ok) {
      /**
       * Enforce that the network response follows the specification:: {@link https://spec.graphql.org/draft/#sec-Errors}.
       */
      if (Object.hasOwn(json, 'errors')) {
        if (!Array.isArray(json.errors) || json.errors.length === 0) {
          throw new Error('GraphQLSpecificationViolationError', {
            cause: json,
          });
        }
        throw new Error('GraphQLError', {
          cause: json.errors,
        });
      }
      return json;
    }
    throw new Error('NetworkError', {
      cause: json,
    });
  });
  return promise;
}

export default function App({ Component, pageProps }: AppProps) {
  const environment = useMemo(
    () =>
      createIsographEnvironment(
        createIsographStore(),
        makeNetworkRequest,
        // Missing field handler to handle navigation from list to detail
        (missingField) => {
          console.log('Missing field detected:', missingField);
          // For Pokemon detail views, we can show the name immediately
          // while other fields load in the background
          // Return undefined to let the system handle missing fields gracefully
          return undefined;
        },
        // Optional logger
        console.log,
      ),
    [],
  );
  return (
    <IsographEnvironmentProvider environment={environment}>
      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              fontSize: '18px',
            }}
          >
            Loading...
          </div>
        }
      >
        <Component {...pageProps} />
      </Suspense>
    </IsographEnvironmentProvider>
  );
}
