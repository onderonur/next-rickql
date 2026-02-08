// https://the-guild.dev/graphql/codegen/docs/guides/react-vue
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://rickandmortyapi.com/graphql',
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/generated/gql/': {
      preset: 'client',
    },
    './src/generated/gql/introspection.json': {
      plugins: ['introspection'],
      config: {
        minify: true,
      },
    },
  },
};

export default config;
