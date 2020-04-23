import React from "react";
import CharacterProfile from "./components/CharacterProfile";
import gql from "graphql-tag";
import { useGetCharacterQuery } from "@/generated/graphql";
import { useRouter } from "next/router";
import { isNonEmptyString } from "@/shared/utils";
import { NextSeo } from "next-seo";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      image
      ...CharacterProfile_character
    }
  }
  ${CharacterProfile.fragments.character}
`;

function Character() {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading } = useGetCharacterQuery({
    query: GET_CHARACTER,
    variables: isNonEmptyString(id) ? { id } : undefined,
    skip: !isNonEmptyString(id),
  });

  const character = data?.character;

  return (
    <>
      <NextSeo
        title={character?.name || ""}
        openGraph={{
          images: [{ url: character?.image || "" }],
        }}
      />
      <CharacterProfile character={character} loading={loading} />
    </>
  );
}

export default Character;
