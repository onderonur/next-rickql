import { getQueryClient } from '@/core/query-client/utils';
import { getMetadata } from '@/core/seo/utils';
import { Card, CardTitle } from '@/core/ui/components/card';
import { List } from '@/core/ui/components/list';
import { CharacterDetails } from '@/features/characters/components/character-details';
import { characterDetailQueryOptions } from '@/features/characters/queries';
import { EpisodeListItem } from '@/features/episodes/components/episode-list-item';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

async function getPageData(characterId: string) {
  const queryClient = getQueryClient();

  const { character } = await queryClient.fetchQuery(
    characterDetailQueryOptions({ id: characterId }),
  );

  if (!character) notFound();

  return { character };
}

type CharacterPageProps = {
  params: Promise<{
    characterId: string;
  }>;
};

export async function generateMetadata(
  props: CharacterPageProps,
): Promise<Metadata> {
  const { characterId } = await props.params;

  const { character } = await getPageData(characterId);

  return getMetadata({
    title: character.name,
    description: `Check out character details of "${character.name}" from Rick and Morty series.`,
    pathname: `/characters/${characterId}`,
    images:
      character.name && character.image
        ? [
            {
              url: character.image,
              alt: character.name,
            },
          ]
        : [],
  });
}

export default async function CharacterPage(props: CharacterPageProps) {
  const { characterId } = await props.params;

  const { character } = await getPageData(characterId);

  return (
    <main className="grid gap-2 md:grid-cols-[--spacing(80)_1fr]">
      <div className="mx-auto max-w-xs">
        <CharacterDetails character={character} />
      </div>
      <section aria-labelledby="episodes-title">
        <Card>
          <CardTitle asChild>
            <h2 id="episodes-title">Episodes</h2>
          </CardTitle>
          <List>
            {character.episode.map((episode) => {
              if (!episode) {
                return null;
              }

              return <EpisodeListItem key={episode.id} episode={episode} />;
            })}
          </List>
        </Card>
      </section>
    </main>
  );
}
