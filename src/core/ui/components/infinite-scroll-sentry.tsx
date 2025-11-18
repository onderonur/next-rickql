import type { Maybe } from '@/core/gql/graphql';
import { Loading } from '@/core/ui/components/loading';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { Alert } from './alert';

type InfiniteScrollSentryProps = Pick<
  Parameters<typeof useInfiniteScroll>[0],
  'hasNextPage' | 'loading' | 'onLoadMore'
> & { error: Maybe<Error> };

export function InfiniteScrollSentry({
  hasNextPage,
  loading,
  error,
  onLoadMore,
}: InfiniteScrollSentryProps) {
  const [sentryRef] = useInfiniteScroll({
    hasNextPage,
    loading,
    disabled: !!error,
    onLoadMore,
    rootMargin: '0px 0px 400px 0px',
  });

  if (error) {
    return <Alert>{error.message}</Alert>;
  }

  if (!hasNextPage) {
    return null;
  }

  // If list has next page, we keep loading shown
  // to prevent flickering of loading indicator.
  return <Loading ref={sentryRef} />;
}
