import type {ReaderArtifact, ReaderAst} from '@isograph/react';
import { HomePage as resolver } from '../../../HomePage.tsx';
import Film__EpisodeTitle, { ReadOutType as Film__EpisodeTitle__outputType } from '../../Film/EpisodeTitle/reader';

// the type, when read out (either via useLazyReference or via graph)
export type ReadOutType = (React.FC<any>);

export type ReadFromStoreType = ResolverParameterType;

const readerAst: ReaderAst<ReadFromStoreType> = [
  {
    kind: "Linked",
    fieldName: "allFilms",
    alias: null,
    arguments: null,
    selections: [
      {
        kind: "Linked",
        fieldName: "films",
        alias: null,
        arguments: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "id",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "episodeID",
            alias: null,
            arguments: null,
          },
          {
            kind: "Resolver",
            alias: "EpisodeTitle",
            arguments: null,
            readerArtifact: Film__EpisodeTitle,
            usedRefetchQueries: [],
          },
        ],
      },
    ],
  },
];

export type ResolverParameterType = { data:
{
  allFilms: ({
    films: (({
      id: string,
      episodeID: (number | null),
      EpisodeTitle: Film__EpisodeTitle__outputType,
    } | null))[],
  } | null),
},
[index: string]: any };

// The type, when returned from the resolver
export type ResolverReturnType = ReturnType<typeof resolver>;

const artifact: ReaderArtifact<ReadFromStoreType, ResolverParameterType, ReadOutType> = {
  kind: "ReaderArtifact",
  resolver: resolver as any,
  readerAst,
  variant: { kind: "Component", componentName: "Root.HomePage" },
};

export default artifact;
