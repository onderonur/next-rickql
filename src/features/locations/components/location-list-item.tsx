import { NextLink } from '@/core/routing/components/next-link';
import {
  ListItem,
  ListItemSubtitle,
  ListItemTitle,
} from '@/core/ui/components/list';
import type { FragmentType } from '@/generated/gql';
import { graphql, useFragment } from '@/generated/gql';

const LocationListItem_LocationFragment = graphql(/* GraphQL */ `
  fragment LocationListItem_LocationFragment on Location {
    id
    name
    type
    dimension
  }
`);

type LocationListItemProps = {
  location: FragmentType<typeof LocationListItem_LocationFragment>;
};

export function LocationListItem({ location }: LocationListItemProps) {
  const locationFragment = useFragment(
    LocationListItem_LocationFragment,
    location,
  );

  return (
    <ListItem>
      <NextLink href={`/locations/${locationFragment.id}`}>
        <ListItemTitle>{locationFragment.name}</ListItemTitle>
        <ListItemSubtitle>
          {locationFragment.type} - {locationFragment.dimension}
        </ListItemSubtitle>
      </NextLink>
    </ListItem>
  );
}
