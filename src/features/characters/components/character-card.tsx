import type { FragmentType } from '@/core/gql';
import { useFragment } from '@/core/gql';
import { graphql } from '@/core/gql/gql';
import { NextLink } from '@/core/routing/components/next-link';
import { Card, CardImage, CardTitle } from '@/core/ui/components/card';
import { ViewTransition } from 'react';

// https://the-guild.dev/blog/unleash-the-power-of-fragments-with-graphql-codegen
const CharacterCard_CharacterFragment = graphql(/* GraphQL */ `
  fragment CharacterCard_CharacterFragment on Character {
    id
    name
    status
    image
  }
`);

type CharacterCardProps = {
  character: FragmentType<typeof CharacterCard_CharacterFragment>;
};

export function CharacterCard({ character }: CharacterCardProps) {
  const characterFragment = useFragment(
    CharacterCard_CharacterFragment,
    character,
  );

  return (
    <ViewTransition name={`character-${characterFragment.id}`}>
      <NextLink href={`/characters/${characterFragment.id}`}>
        <Card>
          <CardImage
            src={characterFragment.image as string}
            alt={characterFragment.name as string}
            width={300}
            height={300}
          />
          <CardTitle asChild className="line-clamp-2 min-h-[2lh]">
            <h2 title={characterFragment.name as string}>
              {characterFragment.name}
            </h2>
          </CardTitle>
        </Card>
      </NextLink>
    </ViewTransition>
  );
}
