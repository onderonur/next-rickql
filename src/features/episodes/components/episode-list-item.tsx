import { NextLink } from '@/core/routing/components/next-link';
import {
  ListItem,
  ListItemSubtitle,
  ListItemTitle,
} from '@/core/ui/components/list';
import type { FragmentType } from '@/generated/gql';
import { graphql, useFragment } from '@/generated/gql';

const EpisodeListItem_EpisodeFragment = graphql(/* GraphQL */ `
  fragment EpisodeListItem_EpisodeFragment on Episode {
    id
    name
    episode
    air_date
  }
`);

type EpisodeListItemProps = {
  episode: FragmentType<typeof EpisodeListItem_EpisodeFragment>;
};

export function EpisodeListItem({ episode }: EpisodeListItemProps) {
  const episodeFragment = useFragment(EpisodeListItem_EpisodeFragment, episode);

  return (
    <ListItem>
      <NextLink href={`/episodes/${episodeFragment.id}`}>
        <ListItemTitle>{episodeFragment.name}</ListItemTitle>
        <ListItemSubtitle>
          {episodeFragment.episode} - {episodeFragment.air_date}
        </ListItemSubtitle>
      </NextLink>
    </ListItem>
  );
}
