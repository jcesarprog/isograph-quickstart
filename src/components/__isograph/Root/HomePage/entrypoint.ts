import type {IsographEntrypoint, NormalizationAst, RefetchQueryArtifactWrapper} from '@isograph/react';
import type {ReadFromStoreType, ResolverParameterType, ReadOutType} from './reader';
import readerResolver from './reader';
const nestedRefetchQueries: RefetchQueryArtifactWrapper[] = [];

const queryText = 'query HomePage  {\
  allFilms {\
    films {\
      id,\
      episodeID,\
      title,\
    },\
  },\
}';

const normalizationAst: NormalizationAst = [
  {
    kind: "Linked",
    fieldName: "allFilms",
    arguments: null,
    selections: [
      {
        kind: "Linked",
        fieldName: "films",
        arguments: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "id",
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "episodeID",
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "title",
            arguments: null,
          },
        ],
      },
    ],
  },
];
const artifact: IsographEntrypoint<ReadFromStoreType, ResolverParameterType, ReadOutType> = {
  kind: "Entrypoint",
  queryText,
  normalizationAst,
  nestedRefetchQueries,
  readerArtifact: readerResolver,
};

export default artifact;
