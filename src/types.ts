// Type for pokemon objects with Isograph client fields
export type PokemonWithClientFields = {
  readonly id: string;
  readonly name: string;
  readonly number: string;
  readonly Pokemon: any; // Isograph client field component
};
