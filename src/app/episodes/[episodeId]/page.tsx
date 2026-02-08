import { getQueryClient } from '@/core/query-client/utils';
import { getMetadata } from '@/core/seo/utils';
import { Card, CardDescription, CardTitle } from '@/core/ui/components/card';
import { CharacterCard } from '@/features/characters/components/character-card';
import { CharacterList } from '@/features/characters/components/character-list';
import { episodeDetailQueryOptions } from '@/features/episodes/queries';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

async function getPageData(episodeId: string) {
  const queryClient = getQueryClient();

  const { episode } = await queryClient.fetchQuery(
    episodeDetailQueryOptions({ id: episodeId }),
  );

  if (!episode) notFound();

  return { episode };
}

type EpisodePageProps = {
  params: Promise<{
    episodeId: string;
  }>;
};

export async function generateMetadata(
  props: EpisodePageProps,
): Promise<Metadata> {
  const { episodeId } = await props.params;

  const { episode } = await getPageData(episodeId);

  return getMetadata({
    title: episode.name,
    description: `Check out details of "${episode.name}" episode of Rick and Morty series.`,
    pathname: `/episodes/${episode.id}`,
  });
}

export default async function EpisodePage(props: EpisodePageProps) {
  const { episodeId } = await props.params;

  const { episode } = await getPageData(episodeId);

  return (
    <main className="flex flex-col gap-4">
      <Card>
        <div className="flex flex-wrap justify-between gap-2">
          <div className="flex flex-col gap-2">
            <CardTitle className="text-2xl">{episode.name}</CardTitle>
            <CardDescription>{episode.episode}</CardDescription>
          </div>
          <CardDescription>{episode.air_date}</CardDescription>
        </div>
      </Card>
      <section aria-labelledby="characters-title">
        <Card>
          <CardTitle asChild className="text-xl">
            <h2 id="characters-title">Characters</h2>
          </CardTitle>
          <CharacterList>
            {episode.characters.map((character) => {
              if (!character) {
                return null;
              }

              return (
                <li key={character.id}>
                  <CharacterCard character={character} />
                </li>
              );
            })}
          </CharacterList>
        </Card>
      </section>
    </main>
  );
}
