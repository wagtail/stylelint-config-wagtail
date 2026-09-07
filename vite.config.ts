import { defineConfig } from 'vite-plus';

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  test: {
    exclude: ['**/node_modules/**'],
  },
  lint: {
    ignorePatterns: ['node_modules/'],
    env: {
      node: true,
    },
    categories: {
      correctness: 'error',
    },
    options: {
      denyWarnings: true,
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {
    singleQuote: true,
    quoteProps: 'consistent',
    printWidth: 80,
  },
});
