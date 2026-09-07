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

  it('has a scenario for every rule in index.js', async () => {
    const configRules = Object.keys(config.rules);
    const scenarioRules = Object.keys(scenarios);

    const missingScenarios = configRules.filter(
      (rule) => !scenarioRules.includes(rule),
    );

    expect(missingScenarios).toEqual([]);
  });
});
