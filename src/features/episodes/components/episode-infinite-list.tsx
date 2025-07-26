'use client';

import { InfiniteScrollSentry } from '@/core/ui/components/infinite-scroll-sentry';
import { List } from '@/core/ui/components/list';
import { EpisodeListItem } from '@/features/episodes/components/episode-list-item';
import { episodeInfiniteListQueryOptions } from '@/features/episodes/queries';
import { useInfiniteQuery } from '@tanstack/react-query';

export function EpisodeInfiniteList() {
  const { data, error, isFetching, hasNextPage, fetchNextPage } =
    useInfiniteQuery(episodeInfiniteListQueryOptions());

  if (!data) {
    return null;
  }

  return (
    <>
      <List>
        {data.pages.map((page) => {
          return page.episodes?.results?.map((episode) => {
            if (!episode) {
              return null;
            }

            return <EpisodeListItem key={episode.id} episode={episode} />;
          });
        })}
      </List>
      <InfiniteScrollSentry
        hasNextPage={hasNextPage}
        loading={isFetching}
        error={error}
        onLoadMore={fetchNextPage}
      />
    </>
  );
}
