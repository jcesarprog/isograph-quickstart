export type PokemonT = {
  readonly id: string;
  readonly name: string;
  readonly number: string;
  readonly image: string;
  readonly types: readonly string[];
  readonly classification: string;
  readonly maxHP: number;
  readonly maxCP: number;
  readonly attacks: {
    readonly fast: ReadonlyArray<{
      readonly name: string;
      readonly type: string;
      readonly damage: number;
    }>;
    readonly special: ReadonlyArray<{
      readonly name: string;
      readonly type: string;
      readonly damage: number;
    }>;
  };
};
