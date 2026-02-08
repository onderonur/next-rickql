// Since we use `episodeInfiniteListQueryOptions` in both server and client components,
// we can not colocate it with `EpisodeInfiniteList`, because it is a client component.
// So, we created a separate file for the query.
import { API_URL, FIRST_PAGE } from '@/core/shared/utils';
import { graphql } from '@/generated/gql';
import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query';
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

const EpisodeDetail_Query = graphql(/* GraphQL */ `
  query EpisodeDetail_Query($id: ID!) {
    episode(id: $id) {
      id
      name
      episode
      air_date
      characters {
        id
        ...CharacterCard_CharacterFragment
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

export function episodeDetailQueryOptions({ id }: { id: string }) {
  return queryOptions({
    queryKey: ['episode', id],
    queryFn: () =>
      request(API_URL, EpisodeDetail_Query, {
        id,
      }),
  });
}
