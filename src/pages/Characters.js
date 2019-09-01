import React from "react";
import { Box, Typography } from "@material-ui/core";
import InfiniteScrollWrapper from "components/InfiniteScrollWrapper";
import CharacterSearch from "components/CharacterSearch";
import { GET_CHARACTERS } from "app-graphql";
import CharacterGridList from "components/CharacterGridList";
import useQueryString from "hooks/useQueryString";
import { useQuery } from "@apollo/react-hooks";
import { resolveConnectionResponse } from "utils";
import { produce } from "immer";

function Characters({ location }) {
  const { name } = useQueryString(location);
  const filter = {
    name
  };
  const { data, loading, fetchMore, networkStatus } = useQuery(GET_CHARACTERS, {
    variables: {
      filter
    },
    notifyOnNetworkStatusChange: true
  });

  const isSetVariables = networkStatus === 2;

  // Even if variables are changed, Apollo still shows previous results as "data".
  // When the "networkStatus" equals 2, it means variables are changed.
  // So we basically check this value and if it's true, we don't use previous "data".
  const { characters } = data && !isSetVariables ? data : {};
  const { results, pageInfo } = resolveConnectionResponse(characters);
  const { next: hasNextPage } = pageInfo;

  function handleLoadMore() {
    return fetchMore({
      query: GET_CHARACTERS,
      variables: { filter, page: pageInfo.next },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        const { characters: newCharacters } = fetchMoreResult;

        const newData = produce(prevResult, draft => {
          let { characters } = draft;
          characters.results.push(...newCharacters.results);
          characters.info = newCharacters.info;
        });

        return newData;
      }
    });
  }

  return (
    <>
      <Box mb={2}>
        <CharacterSearch />
      </Box>
      {loading || results.length ? (
        <InfiniteScrollWrapper
          hasNextPage={hasNextPage}
          loading={loading}
          onLoadMore={handleLoadMore}
        >
          <CharacterGridList
            characters={results}
            // Because this is an infinite list, loading indicator will be shown when
            // the user scrolls to the bottom of the page if there is a next page.
            // If we mount/unmount loading indicator and user hits the bottom of the page fast
            // (especially on mobile devices) loading mounts, height of the scroll increases and
            // user can not see it before scrolling down a little more.
            // Thus, we can mount it and not unmount it when there is a next page.
            // I suppose this is the way 9GAG does.
            loading={loading || hasNextPage}
          />
        </InfiniteScrollWrapper>
      ) : (
        <Typography>Nothing found.</Typography>
      )}
    </>
  );
}

export default Characters;
