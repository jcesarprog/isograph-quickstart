import type {ReaderArtifact, ReaderAst} from '@isograph/react';
import { EpisodeTitle as resolver } from '../../../EpisodeTitle.tsx';

// the type, when read out (either via useLazyReference or via graph)
export type ReadOutType = (React.FC<any>);

export type ReadFromStoreType = ResolverParameterType;

const readerAst: ReaderAst<ReadFromStoreType> = [
  {
    kind: "Scalar",
    fieldName: "title",
    alias: null,
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "episodeID",
    alias: null,
    arguments: null,
  },
];

export type ResolverParameterType = { data:
{
  title: (string | null),
  episodeID: (number | null),
},
[index: string]: any };

// The type, when returned from the resolver
export type ResolverReturnType = ReturnType<typeof resolver>;

const artifact: ReaderArtifact<ReadFromStoreType, ResolverParameterType, ReadOutType> = {
  kind: "ReaderArtifact",
  resolver: resolver as any,
  readerAst,
  variant: { kind: "Component", componentName: "Film.EpisodeTitle" },
};

export default artifact;
