import type { FragmentType } from '@/core/gql';
import { graphql, useFragment } from '@/core/gql';
import type {
  CharacterEpisodeSummary_EpisodeFragmentFragment,
  Maybe,
} from '@/core/gql/graphql';

const CharacterEpisodeSummary_EpisodeFragment = graphql(/* GraphQL */ `
  fragment CharacterEpisodeSummary_EpisodeFragment on Episode {
    id
    air_date
  }
`);

function getEpisodeAirYear(
  episode: CharacterEpisodeSummary_EpisodeFragmentFragment,
) {
  if (episode.air_date) {
    return new Date(episode.air_date).getFullYear();
  }

  return '';
}

type CharacterEpisodeSummaryProps = {
  episodes: Array<
    Maybe<FragmentType<typeof CharacterEpisodeSummary_EpisodeFragment>>
  >;
};

export function CharacterEpisodeSummary({
  episodes,
}: CharacterEpisodeSummaryProps) {
  const episodesFragment = useFragment(
    CharacterEpisodeSummary_EpisodeFragment,
    episodes as FragmentType<typeof CharacterEpisodeSummary_EpisodeFragment>[],
  );

  let firstEpisode: Maybe<CharacterEpisodeSummary_EpisodeFragmentFragment> =
    null;
  let lastEpisode: Maybe<CharacterEpisodeSummary_EpisodeFragmentFragment> =
    null;

  if (episodes.length) {
    [firstEpisode] = episodesFragment;
    lastEpisode = episodesFragment.at(-1) ?? null;
  }

  return (
    <div className="font-semibold text-muted-foreground">
      <p>Episodes: {episodesFragment.length}</p>
      <p>
        {firstEpisode &&
          lastEpisode &&
          `(${getEpisodeAirYear(firstEpisode)} - ${getEpisodeAirYear(
            lastEpisode,
          )})`}
      </p>
    </div>
  );
}
