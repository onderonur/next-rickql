/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query CharacterPage_Query($id: ID!) {\n    character(id: $id) {\n      id\n      name\n      image\n      ...CharacterDetails_CharacterFragment\n      episode {\n        id\n        ...EpisodeListItem_EpisodeFragment\n      }\n    }\n  }\n": typeof types.CharacterPage_QueryDocument,
    "\n  query EpisodePage_Query($id: ID!) {\n    episode(id: $id) {\n      id\n      name\n      episode\n      air_date\n      characters {\n        id\n        ...CharacterCard_CharacterFragment\n      }\n    }\n  }\n": typeof types.EpisodePage_QueryDocument,
    "\n  query LocationPage_Query($id: ID!) {\n    location(id: $id) {\n      id\n      name\n      type\n      dimension\n      residents {\n        id\n        ...CharacterCard_CharacterFragment\n      }\n    }\n  }\n": typeof types.LocationPage_QueryDocument,
    "\n  fragment CharacterCard_CharacterFragment on Character {\n    id\n    name\n    status\n    image\n  }\n": typeof types.CharacterCard_CharacterFragmentFragmentDoc,
    "\n  fragment CharacterDetails_CharacterFragment on Character {\n    id\n    name\n    image\n    ...CharacterSpecs_CharacterFragment\n    episodeSummary: episode {\n      ...CharacterEpisodeSummary_EpisodeFragment\n    }\n  }\n": typeof types.CharacterDetails_CharacterFragmentFragmentDoc,
    "\n  fragment CharacterEpisodeSummary_EpisodeFragment on Episode {\n    id\n    air_date\n  }\n": typeof types.CharacterEpisodeSummary_EpisodeFragmentFragmentDoc,
    "\n  fragment CharacterSpecs_CharacterFragment on Character {\n    id\n    status\n    species\n    gender\n    origin {\n      id\n      name\n    }\n    location {\n      id\n      name\n    }\n  }\n": typeof types.CharacterSpecs_CharacterFragmentFragmentDoc,
    "\n  query CharacterInfiniteList_Query($page: Int, $name: String) {\n    characters(page: $page, filter: { name: $name }) {\n      info {\n        next\n      }\n      results {\n        id\n        ...CharacterCard_CharacterFragment\n      }\n    }\n  }\n": typeof types.CharacterInfiniteList_QueryDocument,
    "\n  fragment EpisodeListItem_EpisodeFragment on Episode {\n    id\n    name\n    episode\n    air_date\n  }\n": typeof types.EpisodeListItem_EpisodeFragmentFragmentDoc,
    "\n  query EpisodeInfiniteList_Query($page: Int) {\n    episodes(page: $page) {\n      info {\n        next\n      }\n      results {\n        id\n        ...EpisodeListItem_EpisodeFragment\n      }\n    }\n  }\n": typeof types.EpisodeInfiniteList_QueryDocument,
    "\n  fragment LocationListItem_LocationFragment on Location {\n    id\n    name\n    type\n    dimension\n  }\n": typeof types.LocationListItem_LocationFragmentFragmentDoc,
    "\n  query LocationInfiniteList_Query($page: Int) {\n    locations(page: $page) {\n      info {\n        next\n      }\n      results {\n        id\n        ...LocationListItem_LocationFragment\n      }\n    }\n  }\n": typeof types.LocationInfiniteList_QueryDocument,
};
const documents: Documents = {
    "\n  query CharacterPage_Query($id: ID!) {\n    character(id: $id) {\n      id\n      name\n      image\n      ...CharacterDetails_CharacterFragment\n      episode {\n        id\n        ...EpisodeListItem_EpisodeFragment\n      }\n    }\n  }\n": types.CharacterPage_QueryDocument,
    "\n  query EpisodePage_Query($id: ID!) {\n    episode(id: $id) {\n      id\n      name\n      episode\n      air_date\n      characters {\n        id\n        ...CharacterCard_CharacterFragment\n      }\n    }\n  }\n": types.EpisodePage_QueryDocument,
    "\n  query LocationPage_Query($id: ID!) {\n    location(id: $id) {\n      id\n      name\n      type\n      dimension\n      residents {\n        id\n        ...CharacterCard_CharacterFragment\n      }\n    }\n  }\n": types.LocationPage_QueryDocument,
    "\n  fragment CharacterCard_CharacterFragment on Character {\n    id\n    name\n    status\n    image\n  }\n": types.CharacterCard_CharacterFragmentFragmentDoc,
    "\n  fragment CharacterDetails_CharacterFragment on Character {\n    id\n    name\n    image\n    ...CharacterSpecs_CharacterFragment\n    episodeSummary: episode {\n      ...CharacterEpisodeSummary_EpisodeFragment\n    }\n  }\n": types.CharacterDetails_CharacterFragmentFragmentDoc,
    "\n  fragment CharacterEpisodeSummary_EpisodeFragment on Episode {\n    id\n    air_date\n  }\n": types.CharacterEpisodeSummary_EpisodeFragmentFragmentDoc,
    "\n  fragment CharacterSpecs_CharacterFragment on Character {\n    id\n    status\n    species\n    gender\n    origin {\n      id\n      name\n    }\n    location {\n      id\n      name\n    }\n  }\n": types.CharacterSpecs_CharacterFragmentFragmentDoc,
    "\n  query CharacterInfiniteList_Query($page: Int, $name: String) {\n    characters(page: $page, filter: { name: $name }) {\n      info {\n        next\n      }\n      results {\n        id\n        ...CharacterCard_CharacterFragment\n      }\n    }\n  }\n": types.CharacterInfiniteList_QueryDocument,
    "\n  fragment EpisodeListItem_EpisodeFragment on Episode {\n    id\n    name\n    episode\n    air_date\n  }\n": types.EpisodeListItem_EpisodeFragmentFragmentDoc,
    "\n  query EpisodeInfiniteList_Query($page: Int) {\n    episodes(page: $page) {\n      info {\n        next\n      }\n      results {\n        id\n        ...EpisodeListItem_EpisodeFragment\n      }\n    }\n  }\n": types.EpisodeInfiniteList_QueryDocument,
    "\n  fragment LocationListItem_LocationFragment on Location {\n    id\n    name\n    type\n    dimension\n  }\n": types.LocationListItem_LocationFragmentFragmentDoc,
    "\n  query LocationInfiniteList_Query($page: Int) {\n    locations(page: $page) {\n      info {\n        next\n      }\n      results {\n        id\n        ...LocationListItem_LocationFragment\n      }\n    }\n  }\n": types.LocationInfiniteList_QueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CharacterPage_Query($id: ID!) {\n    character(id: $id) {\n      id\n      name\n      image\n      ...CharacterDetails_CharacterFragment\n      episode {\n        id\n        ...EpisodeListItem_EpisodeFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query CharacterPage_Query($id: ID!) {\n    character(id: $id) {\n      id\n      name\n      image\n      ...CharacterDetails_CharacterFragment\n      episode {\n        id\n        ...EpisodeListItem_EpisodeFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query EpisodePage_Query($id: ID!) {\n    episode(id: $id) {\n      id\n      name\n      episode\n      air_date\n      characters {\n        id\n        ...CharacterCard_CharacterFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query EpisodePage_Query($id: ID!) {\n    episode(id: $id) {\n      id\n      name\n      episode\n      air_date\n      characters {\n        id\n        ...CharacterCard_CharacterFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query LocationPage_Query($id: ID!) {\n    location(id: $id) {\n      id\n      name\n      type\n      dimension\n      residents {\n        id\n        ...CharacterCard_CharacterFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query LocationPage_Query($id: ID!) {\n    location(id: $id) {\n      id\n      name\n      type\n      dimension\n      residents {\n        id\n        ...CharacterCard_CharacterFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CharacterCard_CharacterFragment on Character {\n    id\n    name\n    status\n    image\n  }\n"): (typeof documents)["\n  fragment CharacterCard_CharacterFragment on Character {\n    id\n    name\n    status\n    image\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CharacterDetails_CharacterFragment on Character {\n    id\n    name\n    image\n    ...CharacterSpecs_CharacterFragment\n    episodeSummary: episode {\n      ...CharacterEpisodeSummary_EpisodeFragment\n    }\n  }\n"): (typeof documents)["\n  fragment CharacterDetails_CharacterFragment on Character {\n    id\n    name\n    image\n    ...CharacterSpecs_CharacterFragment\n    episodeSummary: episode {\n      ...CharacterEpisodeSummary_EpisodeFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CharacterEpisodeSummary_EpisodeFragment on Episode {\n    id\n    air_date\n  }\n"): (typeof documents)["\n  fragment CharacterEpisodeSummary_EpisodeFragment on Episode {\n    id\n    air_date\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CharacterSpecs_CharacterFragment on Character {\n    id\n    status\n    species\n    gender\n    origin {\n      id\n      name\n    }\n    location {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  fragment CharacterSpecs_CharacterFragment on Character {\n    id\n    status\n    species\n    gender\n    origin {\n      id\n      name\n    }\n    location {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CharacterInfiniteList_Query($page: Int, $name: String) {\n    characters(page: $page, filter: { name: $name }) {\n      info {\n        next\n      }\n      results {\n        id\n        ...CharacterCard_CharacterFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query CharacterInfiniteList_Query($page: Int, $name: String) {\n    characters(page: $page, filter: { name: $name }) {\n      info {\n        next\n      }\n      results {\n        id\n        ...CharacterCard_CharacterFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment EpisodeListItem_EpisodeFragment on Episode {\n    id\n    name\n    episode\n    air_date\n  }\n"): (typeof documents)["\n  fragment EpisodeListItem_EpisodeFragment on Episode {\n    id\n    name\n    episode\n    air_date\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query EpisodeInfiniteList_Query($page: Int) {\n    episodes(page: $page) {\n      info {\n        next\n      }\n      results {\n        id\n        ...EpisodeListItem_EpisodeFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query EpisodeInfiniteList_Query($page: Int) {\n    episodes(page: $page) {\n      info {\n        next\n      }\n      results {\n        id\n        ...EpisodeListItem_EpisodeFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment LocationListItem_LocationFragment on Location {\n    id\n    name\n    type\n    dimension\n  }\n"): (typeof documents)["\n  fragment LocationListItem_LocationFragment on Location {\n    id\n    name\n    type\n    dimension\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query LocationInfiniteList_Query($page: Int) {\n    locations(page: $page) {\n      info {\n        next\n      }\n      results {\n        id\n        ...LocationListItem_LocationFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query LocationInfiniteList_Query($page: Int) {\n    locations(page: $page) {\n      info {\n        next\n      }\n      results {\n        id\n        ...LocationListItem_LocationFragment\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;