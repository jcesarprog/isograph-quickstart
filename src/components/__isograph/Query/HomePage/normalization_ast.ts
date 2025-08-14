import type {NormalizationAst} from '@isograph/react';
const normalizationAst: NormalizationAst = {
  kind: "NormalizationAst",
  selections: [
    {
      kind: "Linked",
      fieldName: "allFilms",
      arguments: null,
      concreteType: "FilmsConnection",
      selections: [
        {
          kind: "Linked",
          fieldName: "films",
          arguments: null,
          concreteType: "Film",
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
  ],
};
export default normalizationAst;
