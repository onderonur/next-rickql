// Since we use `episodeInfiniteListQueryOptions` in both server and client components,
// we can not colocate it with `EpisodeInfiniteList`, because it is a client component.
// So, we created a separate file for the query.
import { API_URL, FIRST_PAGE } from '@/core/shared/utils';
import { graphql } from '@/generated/gql';
import { infiniteQueryOptions } from '@tanstack/react-query';
import request from 'graphql-request';

const EpisodeInfiniteList_Query = graphql(/* GraphQL */ `
  query EpisodeInfiniteList_Query($page: Int) {
    episodes(page: $page) {
      info {
        next
      }
      results {
        id
        ...EpisodeListItem_EpisodeFragment
      }
    }
  }
`);

export function episodeInfiniteListQueryOptions() {
  return infiniteQueryOptions({
    initialPageParam: FIRST_PAGE,
    queryKey: ['episodes'],
    queryFn: ({ pageParam }) =>
      request(API_URL, EpisodeInfiniteList_Query, {
        page: pageParam,
      }),
    getNextPageParam: (lastPage) => lastPage.episodes?.info?.next,
  });
}
