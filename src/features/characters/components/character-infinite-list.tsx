'use client';

import { InfiniteScrollSentry } from '@/core/ui/components/infinite-scroll-sentry';
import { CharacterCard } from '@/features/characters/components/character-card';
import { CharacterList } from '@/features/characters/components/character-list';
import { characterInfiniteListQueryOptions } from '@/features/characters/queries';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

export function CharacterInfiniteList() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword');
  const { data, error, isFetching, hasNextPage, fetchNextPage } =
    useInfiniteQuery(characterInfiniteListQueryOptions({ keyword }));

  return (
    <>
      <CharacterList>
        {data?.pages.map((page) => {
          return page.characters?.results?.map((character) => {
            if (!character) {
              return null;
            }

            return (
              <li key={character.id}>
                <CharacterCard character={character} />
              </li>
            );
          });
        })}
      </CharacterList>
      <InfiniteScrollSentry
        hasNextPage={hasNextPage}
        loading={isFetching}
        error={error}
        onLoadMore={fetchNextPage}
      />
    </>
  );
}
