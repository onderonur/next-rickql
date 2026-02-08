import { NextLink } from '@/core/routing/components/next-link';
import { Specs } from '@/core/ui/components/specs';
import type { FragmentType } from '@/generated/gql';
import { graphql, useFragment } from '@/generated/gql';

const CharacterSpecs_CharacterFragment = graphql(/* GraphQL */ `
  fragment CharacterSpecs_CharacterFragment on Character {
    id
    status
    species
    gender
    origin {
      id
      name
    }
    location {
      id
      name
    }
  }
`);

type CharacterSpecsProps = {
  character: FragmentType<typeof CharacterSpecs_CharacterFragment>;
};

export function CharacterSpecs({ character }: CharacterSpecsProps) {
  const specs = useFragment(CharacterSpecs_CharacterFragment, character);

  return (
    <Specs
      specs={[
        {
          title: 'Status',
          value: specs.status,
        },
        {
          title: 'Species',
          value: specs.species,
        },
        {
          title: 'Origin',
          value: specs.origin?.id ? (
            <NextLink href={`/locations/${specs.origin.id}`}>
              {specs.origin.name}
            </NextLink>
          ) : null,
        },
        {
          title: 'Location',
          value: specs.location?.id ? (
            <NextLink href={`/locations/${specs.location.id}`}>
              {specs.location.name}
            </NextLink>
          ) : null,
        },
      ]}
    />
  );
}
