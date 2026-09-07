import { createRequire } from 'module';

import stylelint from 'stylelint';
import { describe, it, expect } from 'vitest';

const require = createRequire(import.meta.url);
const pkg = require('../package.json');

describe('semver - should those tests break, consider releasing a new major version of the package', () => {
    it('dependencies', () => {
        expect(pkg.dependencies).toMatchInlineSnapshot(`
          {
            "stylelint-config-prettier-scss": "^1.0.0",
            "stylelint-config-recommended-scss": "^17.0.0",
            "stylelint-declaration-strict-value": "^1.11.0",
            "stylelint-order": "^7.0.1",
          }
        `);
    });

    it('peerDependencies', () => {
        expect(pkg.peerDependencies).toMatchInlineSnapshot(`
          {
            "stylelint": ">=17.0.0",
          }
        `);
    });

    it('config contents', async () => {
        const config = await stylelint.resolveConfig('.', {
            configFile: 'index.js',
        });
        expect(config.rules).toMatchSnapshot();
    });
});
