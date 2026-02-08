// Since we use `characterInfiniteListQueryOptions` in both server and client components,
// we can not colocate it with `CharacterInfiniteList`, because it is a client component.
// So, we created a separate file for the query.
import { API_URL, FIRST_PAGE } from '@/core/shared/utils';
import { graphql } from '@/generated/gql';
import type { Maybe } from '@/generated/gql/graphql';
import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query';
import request from 'graphql-request';

const CharacterInfiniteList_Query = graphql(/* GraphQL */ `
  query CharacterInfiniteList_Query($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        next
      }
      results {
        id
        ...CharacterCard_CharacterFragment
      }
    }
  }
`);

const CharacterDetail_Query = graphql(/* GraphQL */ `
  query CharacterDetail_Query($id: ID!) {
    character(id: $id) {
      id
      name
      image
      ...CharacterDetails_CharacterFragment
      episode {
        id
        ...EpisodeListItem_EpisodeFragment
      }
    }
  }
`);

// https://tanstack.com/query/v5/docs/react/typescript#typing-query-options
export function characterInfiniteListQueryOptions({
  keyword,
}: {
  keyword: Maybe<string>;
}) {
  return infiniteQueryOptions({
    initialPageParam: FIRST_PAGE,
    queryKey: ['characters', { keyword }],
    queryFn: ({ pageParam }) =>
      request(API_URL, CharacterInfiniteList_Query, {
        page: pageParam,
        name: keyword,
      }),
    getNextPageParam: (lastPage) => lastPage.characters?.info?.next,
  });
}

export function characterDetailQueryOptions({ id }: { id: string }) {
  return queryOptions({
    queryKey: ['character', id],
    queryFn: () =>
      request(API_URL, CharacterDetail_Query, {
        id,
      }),
  });
}
