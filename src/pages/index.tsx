import { Pokemon } from '@/components/Pokemon';
import { PokemonListEntrypoint } from '@/components/PokemonListEntrypoint';
import type { PokemonT } from '@/types';
import { useLazyReference, useResult } from '@isograph/react';
import Head from 'next/head';
import { useCallback, useState } from 'react';

export default function Home() {
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonT | null>(null);

  // Keep the entrypoint at the top level so it doesn't unmount
  const { fragmentReference } = useLazyReference(PokemonListEntrypoint, {
    /* query variables */
  });

  // Get the PokemonList component
  const PokemonListComponent = useResult(fragmentReference);

  const handlePokemonClick = useCallback((pokemon: PokemonT) => {
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
          <Pokemon pokemon={selectedPokemon} onBack={handleBackClick} />
        ) : (
          <PokemonListComponent onPokemonClick={handlePokemonClick} />
        )}
      </div>
    </>
  );
}
