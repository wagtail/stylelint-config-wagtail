import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import stylelint from 'stylelint';

// eslint-disable-next-line import/extensions
import config from '../index.js';

describe('flags no warnings with valid css', () => {
  const code = readFileSync('./__tests__/scss-valid.scss', 'utf-8');

  it('did not error', async () => {
    const { errored } = await stylelint.lint({ code, config });

    assert.strictEqual(errored, false);
  });

  it('flags no warnings', async () => {
    const { results } = await stylelint.lint({ code, config });

    assert.strictEqual(results[0].warnings.length, 0);
  });
});

describe('flags warnings with invalid css', () => {
  const code = readFileSync('./__tests__/scss-invalid.scss', 'utf-8');

  it('did error', async () => {
    const { errored, results } = await stylelint.lint({ code, config });

    assert.equal(errored, true);

    assert.strictEqual(results[0].warnings.length, 47);

    assert.deepStrictEqual(
      results[0].warnings
        .map(({ rule }) => rule)
        .reduce(
          (rulesWithCount, rule) => ({
            ...rulesWithCount,
            [rule]: (rulesWithCount[rule] || 0) + 1,
          }),
          {},
        ),
      {
        'block-no-empty': 1,
        'color-named': 1,
        'comment-no-empty': 1,
        'declaration-block-no-duplicate-properties': 1,
        'declaration-property-value-allowed-list': 2,
        'declaration-property-value-disallowed-list': 3,
        'length-zero-no-unit': 1,
        'max-nesting-depth': 1,
        'order/order': 1,
        'property-disallowed-list': 3,
        'rule-empty-line-before': 8,
        'scale-unlimited/declaration-strict-value': 9,
        'scss/at-rule-no-unknown': 1,
        'scss/comment-no-empty': 1,
        'scss/selector-no-union-class-name': 1,
        'selector-attribute-name-disallowed-list': 1,
        'selector-class-pattern': 2,
        'selector-max-combinators': 2,
        'selector-max-id': 1,
        'selector-max-specificity': 5,
        'unit-no-unknown': 1,
      },
    );
  });
});
