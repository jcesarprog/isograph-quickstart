import React from 'react';
import { useLazyReference, useRead } from '@isograph/react';
import { iso } from '@iso';

export default function HomePageRoute() {
  const { queryReference } = useLazyReference(iso(`entrypoint Root.HomePage`), {
    /* query variables */
  });
  const Component = useRead(queryReference);
  return <Component />;
}