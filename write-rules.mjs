import { readFile, writeFile } from 'node:fs/promises';

import stylelint from 'stylelint';

const COMMENT = '<!-- RULES:START -->';
const README = 'README.md';

const getUrl = (rule) => {
  const parts = rule.split('/');

  if (parts.length === 1) {
    return `https://stylelint.io/user-guide/rules/list/${rule}/`;
  }

  const [group, ruleName] = parts;

  const nonStylelintRules = {
    'order': () =>
      `https://github.com/hudochenkov/stylelint-order/blob/master/rules/${ruleName}/README.md`,
    'scale-unlimited': () =>
      'https://github.com/AndyOGo/stylelint-declaration-strict-value',
    'scss': () =>
      `https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/${ruleName}/README.md`,
  };

  return (nonStylelintRules[group] || (() => null))();
};

/**
 * Attempts to parse the config value to return a pretty formatted version.
 * If the value becomes too long it will instead direct the viewer to an external link.
 *
 * @param {array} config
 * @param {object?} options
 * @returns {string}
 */
const getPrettyConfig = (
  config,
  { defaultValue = 'Enabled', maxLength = 75 } = {},
) => {
  if (!Array.isArray(config)) return defaultValue;

  const configItems = config.filter((item) => typeof item !== 'boolean');

  const prettyConfig = configItems.map(JSON.stringify).join(', ');

  if (prettyConfig.length === 0) return defaultValue;

  if (prettyConfig.length > maxLength) {
    return `${defaultValue} - [see Config][config]`;
  }

  return `\`${prettyConfig}\``;
};

/**
 * Prepares a reasonably formatted markdown table based on the spec
 * https://github.github.com/gfm/#tables-extension-
 *
 * Ensuring that column widths remain readable while viewing the markdown raw.
 *
 * If a rule URL can be resolved, the rule will be added with a link to it, otherwise
 * the rule will be just shown as is.
 *
 * Rule configuration is not yet included in the table.
 *
 * @param {Object} rules
 * @returns {String}
 */
const createMarkdownTable = (rules) => {
  const enabledRules = Object.entries(rules)
    .filter(([, value]) => value !== null)
    .sort(([ruleA], [ruleB]) => ruleA.localeCompare(ruleB));

  const maxRuleLength =
    enabledRules.reduce(
      (maxLength, [rule]) =>
        rule.length > maxLength ? rule.length : maxLength,
      0,
    ) + 7; // adding padding + room for links

  const prettyConfigs = enabledRules.map(([, config]) =>
    getPrettyConfig(config),
  );

  const maxConfigLength = prettyConfigs.reduce(
    (maxLength, prettyConfig) =>
      prettyConfig.length > maxLength ? prettyConfig.length : maxLength,
    0,
  );

  const tableRows = enabledRules.map(([rule], index) => {
    const ruleBackticks = `\`${rule}\``;

    const url = getUrl(rule);

    const ruleFormatted = url ? `[${ruleBackticks}][${index}]` : ruleBackticks;

    return [
      `| ${ruleFormatted.padEnd(maxRuleLength + 1, ' ')} | ${prettyConfigs[
        index
      ].padEnd(maxConfigLength, ' ')} |`,
      url && `[${index}]: ${url}`,
    ];
  });

  const tableHeader = [
    `| ${'Rule'.padEnd(maxRuleLength, ' ')}  | ${'Config'.padEnd(
      maxConfigLength,
      ' ',
    )} |`,
    `| ${''.padEnd(maxRuleLength, '-')}- | ${''.padEnd(
      maxConfigLength,
      '-',
    )} |`,
  ].join('\n');

  return `

${tableHeader}
${tableRows.map(([row]) => row).join('\n')}

[config]: https://github.com/wagtail/stylelint-config-wagtail/blob/main/index.js
${tableRows
  .map(([, link]) => link)
  .filter(Boolean)
  .join('\n')}
`;
};

/**
 * Reads the rules configuration from stylelint and writes an updated table
 * to the README.md file.
 *
 * If run with `--check`, no content will be written and instead an exit
 * code will fire to flag a CI error.
 */
const writeRules = async () => {
  const { rules } = await stylelint.resolveConfig('.stylelintrc');

  const markdownTable = createMarkdownTable(rules);

  await readFile(README)
    .then(async (buf) => {
      const content = buf.toString();

      const startOfTable = content.indexOf(COMMENT) + COMMENT.length;

      const newContent = content
        .substring(0, startOfTable)
        .concat(markdownTable);

      // if in check mode, only compare contents and do not write to the file
      const args = process.argv.slice(2) || [];
      const isCheck = args.includes('--check');

      if (isCheck) {
        if (newContent !== content) {
          throw new Error(
            'Rules have not been written, run `npm run write-rules`',
          );
        }
        process.exit(0);
      } else {
        // if not checking - ok to write to the file
        await writeFile(README, newContent);
      }
    })
    .catch((error) => {
      process.stderr.write(error.message + '\n');
      process.exit(1);
    });
};

writeRules();
