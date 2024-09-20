'use client';

import { InfiniteScrollSentry } from '@/core/ui/components/infinite-scroll-sentry';
import { List } from '@/core/ui/components/list';
import { LocationListItem } from '@/features/locations/components/location-list-item';
import { locationInfiniteListQueryOptions } from '@/features/locations/locations.queries';
import { useInfiniteQuery } from '@tanstack/react-query';

export function LocationInfiniteList() {
  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery(
    locationInfiniteListQueryOptions(),
  );

  if (!data) {
    return null;
  }

  return (
    <>
      <List>
        {data.pages.map((page) => {
          return page.locations?.results?.map((location) => {
            if (!location) {
              return null;
            }

            return <LocationListItem key={location.id} location={location} />;
          });
        })}
      </List>
      <InfiniteScrollSentry
        loading={isFetching}
        hasNextPage={hasNextPage}
        onLoadMore={fetchNextPage}
      />
    </>
  );
}
