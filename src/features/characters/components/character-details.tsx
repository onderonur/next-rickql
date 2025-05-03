import type { FragmentType } from '@/core/gql';
import { graphql, useFragment } from '@/core/gql';
import { Card, CardImage, CardTitle } from '@/core/ui/components/card';
import { CharacterEpisodeSummary } from '@/features/characters/components/character-episodes-summary';
import { CharacterSpecs } from '@/features/characters/components/character-specs';
import { unstable_ViewTransition as ViewTransition } from 'react';

const CharacterDetails_CharacterFragment = graphql(/* GraphQL */ `
  fragment CharacterDetails_CharacterFragment on Character {
    id
    name
    image
    ...CharacterSpecs_CharacterFragment
    episodeSummary: episode {
      ...CharacterEpisodeSummary_EpisodeFragment
    }
  }
`);

type CharacterDetailsProps = {
  character: FragmentType<typeof CharacterDetails_CharacterFragment>;
};

export function CharacterDetails({ character }: CharacterDetailsProps) {
  const characterDetails = useFragment(
    CharacterDetails_CharacterFragment,
    character,
  );

  return (
    <ViewTransition name={`character-${characterDetails.id}`}>
      <Card>
        <CardImage
          src={characterDetails.image as string}
          alt={characterDetails.name as string}
          priority
          width={300}
          height={300}
        />
        <CardTitle>{characterDetails.name}</CardTitle>
        <CharacterEpisodeSummary episodes={characterDetails.episodeSummary} />
        <CharacterSpecs character={characterDetails} />
      </Card>
    </ViewTransition>
  );
}
