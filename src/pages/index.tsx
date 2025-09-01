import { iso } from '@iso';
import { useLazyReference, useResult } from '@isograph/react';
import Head from 'next/head';
import { Suspense, useCallback, useState } from 'react';

export default function Home() {
  const [selectedPokemon, setSelectedPokemon] = useState<any | null>(null);

  // Keep the entrypoint at the top level so it doesn't unmount
  const { fragmentReference } = useLazyReference(
    iso(`
    entrypoint Query.PokemonList
  `),
    {
      /* query variables */
    },
  );

  // Get the PokemonList component
  const PokemonListComponent = useResult(fragmentReference);

  const handlePokemonClick = useCallback((pokemon: any) => {
    setSelectedPokemon(pokemon);
  }, []);

  const handleBackClick = useCallback(() => {
    setSelectedPokemon(null);
  }, []);

  return (
    <>
      <Head>
        <title>Pokemon Directory</title>
      </Head>
      <div>
        {selectedPokemon ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Suspense
              fallback={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: '20px',
                  }}
                >
                  <h1>{selectedPokemon.name}</h1>
                  <div>Loading pokemon details...</div>
                </div>
              }
            >
              <selectedPokemon.Pokemon />
            </Suspense>
            <button onClick={handleBackClick} style={{ marginTop: '20px' }}>
              ← Back to List
            </button>
          </div>
        ) : (
          <PokemonListComponent onPokemonClick={handlePokemonClick} />
        )}
      </div>
    </>
  );
}
