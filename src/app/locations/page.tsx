import { getQueryClient } from '@/core/query-client/utils';
import { getMetadata } from '@/core/seo/utils';
import { Card, CardTitle } from '@/core/ui/components/card';
import { LocationInfiniteList } from '@/features/locations/components/location-infinite-list';
import { locationInfiniteListQueryOptions } from '@/features/locations/queries';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import type { Metadata } from 'next';

export const metadata: Metadata = getMetadata({
  title: 'Locations',
  description: 'Check out locations from Rick and Morty series.',
  pathname: '/locations',
});

export default async function LocationsPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery(locationInfiniteListQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <Card className="mx-auto max-w-(--breakpoint-md)">
          <CardTitle className="text-2xl font-semibold">Locations</CardTitle>
          <LocationInfiniteList />
        </Card>
      </main>
    </HydrationBoundary>
  );
}
