import React from 'react';
import { iso } from '@iso';

export const EpisodeTitle = iso(`
  field Film.EpisodeTitle @component {
    title,
    episodeID,
  }
`)(function EpisodeTitleComponent({ data }) {
  return (
    <h2>
      Episode {data.episodeID}: {data.title}
    </h2>
  );
});