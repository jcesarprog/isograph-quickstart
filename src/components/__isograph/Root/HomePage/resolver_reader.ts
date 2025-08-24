import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Root__HomePage__param } from './param_type';
import { HomePage as resolver } from '../../../HomePage';
import Film__EpisodeTitle__resolver_reader from '../../Film/EpisodeTitle/resolver_reader';

const readerAst: ReaderAst<Root__HomePage__param> = [
  {
    kind: "Linked",
    fieldName: "allFilms",
    alias: null,
    arguments: null,
    condition: null,
    isUpdatable: false,
    selections: [
      {
        kind: "Linked",
        fieldName: "films",
        alias: null,
        arguments: null,
        condition: null,
        isUpdatable: false,
        selections: [
          {
            kind: "Scalar",
            fieldName: "id",
            alias: null,
            arguments: null,
            isUpdatable: false,
          },
          {
            kind: "Scalar",
            fieldName: "episodeID",
            alias: null,
            arguments: null,
            isUpdatable: false,
          },
          {
            kind: "Resolver",
            alias: "EpisodeTitle",
            arguments: null,
            readerArtifact: Film__EpisodeTitle__resolver_reader,
            usedRefetchQueries: [],
          },
        ],
        refetchQueryIndex: null,
      },
    ],
    refetchQueryIndex: null,
  },
];

const artifact: ComponentReaderArtifact<
  Root__HomePage__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  fieldName: "Root.HomePage",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
