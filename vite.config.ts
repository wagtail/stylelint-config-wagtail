import { defineConfig } from 'vite-plus';

export default defineConfig({
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
      reportUnusedDisableDirectives: 'deny',
    },
  },
  fmt: {
    singleQuote: true,
    quoteProps: 'consistent',
    printWidth: 80,
  },
});
