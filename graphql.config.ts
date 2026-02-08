// For VSCode GraphQL: Language Feature Support extension:
// https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql
const config = {
  schema: './src/generated/gql/introspection.json',
  documents: ['src/**/*.{ts,tsx}'],
};

// Or without introspection:
// const config = {
//   schema: 'https://rickandmortyapi.com/graphql',
//   documents: ['src/**/*.{ts,tsx}'],
// };

export default config;
