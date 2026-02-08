import { getQueryClient } from '@/core/query-client/utils';
import { getMetadata } from '@/core/seo/utils';
import { Card, CardTitle } from '@/core/ui/components/card';
import { EpisodeInfiniteList } from '@/features/episodes/components/episode-infinite-list';
import { episodeInfiniteListQueryOptions } from '@/features/episodes/queries';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import type { Metadata } from 'next';

export const metadata: Metadata = getMetadata({
  title: 'Episodes',
  description: 'Check out episodes of Rick and Morty series.',
  pathname: '/episodes',
});

export default async function EpisodesPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery(episodeInfiniteListQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <Card className="mx-auto max-w-(--breakpoint-md)">
          <CardTitle className="text-2xl">Episodes</CardTitle>
          <EpisodeInfiniteList />
        </Card>
      </main>
    </HydrationBoundary>
  );
}
