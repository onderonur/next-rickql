// https://nextjs.org/docs/app/api-reference/config/eslint#lint-staged
import path from 'node:path';

const buildEslintCommand = (filenames) =>
  // `--no-warn-ignored` suppresses warnings for ignored files (e.g. src/generated) to prevent --max-warnings 0 from failing the commit.
  `eslint --max-warnings 0 --no-warn-ignored --fix ${filenames
    .map((f) => `"${path.relative(process.cwd(), f)}"`)
    .join(' ')}`;

const config = {
  '*': 'prettier --write --ignore-unknown',
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};

export default config;
