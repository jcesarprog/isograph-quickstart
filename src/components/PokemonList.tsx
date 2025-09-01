import type { PokemonT } from '@/types';
import { iso } from '@iso';
import React from 'react';

export const PokemonList = iso(`
  field Query.PokemonList @component {
    pokemons(first: 10) {
      id
      name
      number
      Pokemon
    }
  }
`)(function PokemonListComponent(
  { data },
  componentProps: { onPokemonClick: (pokemon: any) => void },
) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Pokemon List</h1>
      <ul>
        {data.pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <button onClick={() => componentProps.onPokemonClick(pokemon)}>
              #{pokemon.number} - {pokemon.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});
