import type {IsographEntrypoint} from '@isograph/react';
import entrypoint_Root__HomePage from '../__isograph/Root/HomePage/entrypoint.ts'
import { ResolverParameterType as field_Film__EpisodeTitle } from './Film/EpisodeTitle/reader.ts'
import { ResolverParameterType as field_Root__HomePage } from './Root/HomePage/reader.ts'

type IdentityWithParam<TParam> = <TResolverReturn>(
  x: (param: TParam) => TResolverReturn
) => (param: TParam) => TResolverReturn;

type WhitespaceCharacter = ' ' | '\n';
type Whitespace<In> = In extends `${WhitespaceCharacter}${infer In}`
  ? Whitespace<In>
  : In;

type MatchesWhitespaceAndString<
  TString extends string,
  T
> = Whitespace<T> extends `${TString}${string}` ? T : never;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Root.HomePage', T>
): typeof entrypoint_Root__HomePage;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Film.EpisodeTitle', T>
): IdentityWithParam<field_Film__EpisodeTitle>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Root.HomePage', T>
): IdentityWithParam<field_Root__HomePage>;

export function iso(_queryText: string): IdentityWithParam<any> | IsographEntrypoint<any, any, any>{
  return function identity<TResolverReturn>(
    x: (param: any) => TResolverReturn,
  ): (param: any) => TResolverReturn {
    return x;
  };
}