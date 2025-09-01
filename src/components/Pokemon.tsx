import type { Pokemon } from '@/types';

type PokemonProps = {
  pokemon: Pokemon;
  onBack: () => void;
};

export function Pokemon({ pokemon, onBack }: PokemonProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} width="200" />
      <p>Number: #{pokemon.number}</p>
      <p>Classification: {pokemon.classification}</p>
      <p>Types: {pokemon.types.join(', ')}</p>
      <p>Max HP: {pokemon.maxHP}</p>
      <p>Max CP: {pokemon.maxCP}</p>

      <h3>Fast Attacks:</h3>
      <ul>
        {pokemon.attacks.fast.map((attack, index) => (
          <li key={index}>
            {attack.name} ({attack.type}) - {attack.damage} damage
          </li>
        ))}
      </ul>

      <h3>Special Attacks:</h3>
      <ul>
        {pokemon.attacks.special.map((attack, index) => (
          <li key={index}>
            {attack.name} ({attack.type}) - {attack.damage} damage
          </li>
        ))}
      </ul>
      <button onClick={onBack}>← Back to List</button>
    </div>
  );
}
