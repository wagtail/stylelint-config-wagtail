import { createRequire } from 'module';

import stylelint from 'stylelint';
import { describe, it, expect } from 'vite-plus/test';

import scenarios from './scenarios.mjs';

const require = createRequire(import.meta.url);
const config = require('../index.js');

const lintCode = async (code, syntax = 'css') => {
  const result = await stylelint.lint({
    code,
    codeFilename: syntax === 'scss' ? 'styles.scss' : 'styles.css',
    configFile: 'index.js',
  });
  return result.results[0].warnings;
};

describe('config', () => {
  it('works', () => {
    return stylelint
      .lint({
        code: '.foo { color: red; display: block !important; }',
        codeFilename: 'styles.css',
        configFile: 'index.js',
      })
      .then((results) => {
        expect(results.results[0].warnings.length).toBe(4);
      });
  });

  describe('scenarios', () => {
    Object.entries(scenarios).forEach(([rule, scenario]) => {
      it(rule, async () => {
        const warnings = await lintCode(scenario.code, scenario.syntax);
        const ruleWarnings = warnings.filter(
          (warning) => warning.rule === rule,
        );

        expect(ruleWarnings.map((warning) => warning.text)).toMatchSnapshot();
      });
    });
  });

  describe.each(['css', 'scss'])('design tokens (%s)', (syntax) => {
    it.each([
      'background: #fff',
      'border: 1px solid #fff',
      'outline: 2px solid #fff',
      'column-rule: 1px solid #fff',
      'font: 10px/1 serif',
      'font: 10px var(--font-family)',
      'font: var(--font-size) serif',
      'font: 700 var(--font-size) var(--font-family)',
    ])('rejects literal values in %s', async (declaration) => {
      const warnings = await lintCode(
        `.example {\n  ${declaration};\n}`,
        syntax,
      );

      expect(warnings).toContainEqual(
        expect.objectContaining({
          rule: 'scale-unlimited/declaration-strict-value',
        }),
      );
    });

    it.each([
      'background: var(--color-surface)',
      'background: transparent',
      'background: url("image.svg") no-repeat center',
      'border: 1px solid var(--color-border)',
      'border: 1px solid currentColor',
      'border: 1px solid CanvasText',
      'outline: 2px solid transparent',
      'column-rule: 1px solid var(--color-border)',
      'font: var(--font-body)',
      'font: inherit',
      'font: initial',
      'font: unset',
      'color: rgb(200 200 200)',
    ])(
      'allows tokens, functions, and exceptions in %s',
      async (declaration) => {
        const warnings = await lintCode(
          `.example {\n  ${declaration};\n}`,
          syntax,
        );

        expect(warnings).toEqual([]);
      },
    );
  });

  it.each([
    'background: $color-surface',
    'border: 1px solid theme.$color-border',
    'font: $font-body',
    'font: theme.$font-body',
    'font: font-token(body)',
  ])('allows Sass tokens and functions in %s', async (declaration) => {
    const warnings = await lintCode(`.example {\n  ${declaration};\n}`, 'scss');

    expect(warnings).toEqual([]);
  });

  it('has a scenario for every rule in index.js', async () => {
    const configRules = Object.keys(config.rules);
    const scenarioRules = Object.keys(scenarios);

    const missingScenarios = configRules.filter(
      (rule) => !scenarioRules.includes(rule),
    );

    expect(missingScenarios).toEqual([]);
  });
});
