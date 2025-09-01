import PokemonDetailRoute from '@/components/PokemonDetailRoute';
import { iso } from '@iso';
import { useLazyReference, useResult } from '@isograph/react';
import Head from 'next/head';
import { useCallback, useState } from 'react';

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
          <PokemonDetailRoute
            pokemon={selectedPokemon}
            onBack={handleBackClick}
          />
        ) : (
          <PokemonListComponent onPokemonClick={handlePokemonClick} />
        )}
      </div>
    </>
  );
}
