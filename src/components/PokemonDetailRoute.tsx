import { Suspense } from 'react';

type PokemonDetailRouteProps = {
  pokemon: any;
  onBack: () => void;
};

export default function PokemonDetailRoute({
  pokemon,
  onBack,
}: PokemonDetailRouteProps) {
  return (
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
            <h1>{pokemon.name}</h1>
            <div>Loading pokemon details...</div>
          </div>
        }
      >
        <pokemon.Pokemon />
      </Suspense>
      <button
        onClick={onBack}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        ← Back to List
      </button>
    </div>
  );
}
