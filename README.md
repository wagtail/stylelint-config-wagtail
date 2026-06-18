# [@wagtail/stylelint-config-wagtail](https://www.npmjs.com/package/@wagtail/stylelint-config-wagtail) [<img src="https://raw.githubusercontent.com/wagtail/stylelint-config-wagtail/main/.github/stylelint-logo.svg?sanitize=true" alt="Stylelint" width="90" height="90" align="right">](https://stylelint.io)

[![@wagtail/stylelint-config-wagtail on npm](https://img.shields.io/npm/v/@wagtail/stylelint-config-wagtail.svg)](https://www.npmjs.com/package/@wagtail/stylelint-config-wagtail)

> Shareable stylelint config for CSS and SCSS, following [Wagtail’s code style](https://docs.wagtail.org/en/latest/contributing/ui_guidelines.html).

- [Usage](#usage)
- [Links](#links)
- [Contribution Guidelines](#contribution-guidelines)
  - [Install](#install)
  - [Development](#development)
- [Rules](#rules)

## Usage

Install stylelint, and the config:

```sh
npm install --save-dev stylelint @wagtail/stylelint-config-wagtail
```

Then [configure stylelint to use this config](https://stylelint.io/user-guide/configuration/#extends). As a `stylelint.config.js` or `stylelint.config.mjs` in the root of your project:

```js
/** @type {import('stylelint').Config} */
export default {
  // See https://github.com/wagtail/stylelint-config-wagtail for rules.
  extends: '@wagtail/stylelint-config-wagtail',
};
```

### Tips

#### Linting setup for ongoing projects

Review our [CHANGELOG](https://github.com/wagtail/stylelint-config-wagtail/blob/main/CHANGELOG.md) for guidance on how to upgrade a project’s linting to a specific version.

More generally, when retrofitting stricter linting onto an existing project, consider [a gradual approach to linting strictness](https://thib.me/upgrading-to-stricter-eslint-config), so you can start using linting without having to change significant portions of the project’s code. Here is an example, disabling commonly hard-to-retrofit rules:

```js
// Rules which we ideally would want to enforce but are reporting too many issues currently.
const legacyRules = {
  'max-nesting-depth': null,
  'selector-max-specificity': null,
};

/** @type {import('stylelint').Config} */
export default {
  // See https://github.com/wagtail/stylelint-config-wagtail for rules.
  extends: '@wagtail/stylelint-config-wagtail',
  rules: {
    ...legacyRules,
  },
};
```

#### Agent skills

This project ships two agent skills for AI coding agents:

- `upgrading-stylelint` — for auditing or carrying out a Stylelint upgrade within a project, including checking the upgrade path, reviewing migration guides, updating dependencies or config, running QA, and reporting follow-up work.
- `upgrading-shared-stylelint-config` — for upgrading this shared Stylelint configuration itself to a new major release, including updating version constraints, reconfiguring rules, and releasing.

Install the project skills with [Vercel Lab’s Agent Skills](https://github.com/vercel-labs/agent-skills):

```sh
npx skills add wagtail/stylelint-config-wagtail
```

Example prompt:

```text
Use the upgrading-stylelint skill to upgrade this project from Stylelint 16 to 17, including updating to the compatible stylelint-config-wagtail version. Update dependencies and config as needed, update as much of the styles as you can if safe.
```

#### Common CLI flags

We recommend the following `run` script to add to your `package.json`:

```json
"lint:css": "stylelint --report-needless-disables --report-unscoped-disables 'src/sass'"
```

- Use [`--report-needless-disables`](https://stylelint.io/user-guide/cli#--report-needless-disables---rd) to ensure you do not use more `stylelint-disable` comments than needed.
- Use [`--report-unscoped-disables`](https://stylelint.io/user-guide/cli#--report-unscoped-disables---rud) to prevent fully disabling linting.
- Target specific folders so Stylelint doesn’t attempt to lint other file types, say JS or HTML files.

#### `.stylelintignore`

Stylelint supports ignore patterns in a `.stylelintignore` file, however we tend not to use this since we lint all files within a given folder.

### Prettier

This config is [Prettier](https://prettier.io/)-compatible, there isn’t anything extra needed.

### Tailwind

This config should work with [Tailwind](https://tailwindcss.com/) with no adjustments needed. Please submit an issue if that’s not the case.

### prek for pre-commit hooks

We recommend [prek](https://prek.j178.dev/), an implementation of the pre-commit framework to manage hooks. Our sample setup uses a standard `.pre-commit-config.yaml`, so the same configuration also works with `pre-commit` if needed:

```yaml
default_language_version:
  node: system
repos:
  - repo: https://github.com/thibaudcolas/pre-commit-stylelint
    rev: v17.9.0
    hooks:
      - id: stylelint
        files: \.(css|scss)$
        additional_dependencies:
          - stylelint@17.9.0
          - '@wagtail/stylelint-config-wagtail@2.0.0'
```

### Related tools

To get the most out of this config, it is assumed that projects have the following tools set up:

- [Prettier](https://prettier.io/) for automated formatting of stylesheets.
- [Browserslist](https://github.com/browserslist/browserslist) and [autoprefixer](https://github.com/postcss/autoprefixer).

## What’s included

> See [`config.js`](./config.js) for the config definition. This package includes configuration from:
>
> - [stylelint-config-recommended-scss](https://github.com/stylelint-scss/stylelint-config-recommended-scss)
> - [`stylelint-order`](https://github.com/hudochenkov/stylelint-order)
> - [`stylelint-declaration-strict-value`](https://github.com/AndyOGo/stylelint-declaration-strict-value)

## Rules

<!-- AUTO GENERATED - run `npm run write-rules` to update - do not modify manually -->
<!-- RULES:START -->

| Rule                                                         | Config                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------------- |
| [`at-rule-no-deprecated`][0]                                 | Enabled                                                             |
| [`block-no-empty`][1]                                        | Enabled                                                             |
| [`color-hex-length`][2]                                      | `"short"`                                                           |
| [`color-named`][3]                                           | `"never"`                                                           |
| [`color-no-invalid-hex`][4]                                  | Enabled                                                             |
| [`comment-no-empty`][5]                                      | Enabled                                                             |
| [`custom-property-no-missing-var-function`][6]               | Enabled                                                             |
| [`declaration-block-no-duplicate-custom-properties`][7]      | Enabled                                                             |
| [`declaration-block-no-duplicate-properties`][8]             | Enabled                                                             |
| [`declaration-block-no-redundant-longhand-properties`][9]    | Enabled                                                             |
| [`declaration-block-no-shorthand-property-overrides`][10]    | Enabled                                                             |
| [`declaration-block-single-line-max-declarations`][11]       | `1`                                                                 |
| [`declaration-no-important`][12]                             | Enabled                                                             |
| [`declaration-property-value-allowed-list`][13]              | Enabled - [see Config][config]                                      |
| [`declaration-property-value-disallowed-list`][14]           | `{"/^border/":["none"]}, {"severity":"error"}`                      |
| [`declaration-property-value-keyword-no-deprecated`][15]     | Enabled                                                             |
| [`font-family-no-duplicate-names`][16]                       | Enabled                                                             |
| [`font-family-no-missing-generic-family-keyword`][17]        | Enabled                                                             |
| [`function-calc-no-unspaced-operator`][18]                   | Enabled                                                             |
| [`function-linear-gradient-no-nonstandard-direction`][19]    | Enabled                                                             |
| [`function-url-quotes`][20]                                  | `"always"`                                                          |
| [`keyframe-block-no-duplicate-selectors`][21]                | Enabled                                                             |
| [`keyframe-declaration-no-important`][22]                    | Enabled                                                             |
| [`length-zero-no-unit`][23]                                  | Enabled                                                             |
| [`max-nesting-depth`][24]                                    | `3`                                                                 |
| [`media-feature-name-no-unknown`][25]                        | Enabled                                                             |
| [`media-type-no-deprecated`][26]                             | Enabled                                                             |
| [`named-grid-areas-no-invalid`][27]                          | Enabled                                                             |
| [`nesting-selector-no-missing-scoping-root`][28]             | `{"ignoreAtRules":["mixin"]}`                                       |
| [`no-duplicate-at-import-rules`][29]                         | Enabled                                                             |
| [`no-empty-source`][30]                                      | Enabled                                                             |
| [`no-invalid-double-slash-comments`][31]                     | Enabled                                                             |
| [`no-invalid-position-at-import-rule`][32]                   | `{"ignoreAtRules":["use","forward"]}`                               |
| [`no-invalid-position-declaration`][33]                      | Enabled                                                             |
| [`no-irregular-whitespace`][34]                              | Enabled                                                             |
| [`order/order`][35]                                          | `[{"name":"include","type":"at-rule"},"declarations"]`              |
| [`property-disallowed-list`][36]                             | `["/forced-color-adjust/","/left/","/right/","text-transform"]`     |
| [`property-no-deprecated`][37]                               | Enabled                                                             |
| [`property-no-unknown`][38]                                  | Enabled                                                             |
| [`property-no-vendor-prefix`][39]                            | Enabled                                                             |
| [`rule-empty-line-before`][40]                               | `"always", {"except":["after-single-line-comment","first-nested"]}` |
| [`scale-unlimited/declaration-strict-value`][41]             | Enabled - [see Config][config]                                      |
| [`scss/at-extend-no-missing-placeholder`][42]                | Enabled                                                             |
| [`scss/at-if-no-null`][43]                                   | Enabled                                                             |
| [`scss/at-rule-no-unknown`][44]                              | Enabled                                                             |
| [`scss/comment-no-empty`][45]                                | Enabled                                                             |
| [`scss/declaration-nested-properties-no-divided-groups`][46] | Enabled                                                             |
| [`scss/dollar-variable-no-missing-interpolation`][47]        | Enabled                                                             |
| [`scss/function-quote-no-quoted-strings-inside`][48]         | Enabled                                                             |
| [`scss/function-unquote-no-unquoted-strings-inside`][49]     | Enabled                                                             |
| [`scss/load-no-partial-leading-underscore`][50]              | Enabled                                                             |
| [`scss/load-partial-extension`][51]                          | `"never"`                                                           |
| [`scss/media-feature-value-dollar-variable`][52]             | `"always", {"ignore":["keywords"]}`                                 |
| [`scss/no-duplicate-mixins`][53]                             | Enabled                                                             |
| [`scss/no-global-function-names`][54]                        | Enabled                                                             |
| [`scss/selector-class-pattern`][55]                          | `{}, {"resolveNestedSelectors":true}`                               |
| [`scss/selector-no-redundant-nesting-selector`][56]          | Enabled                                                             |
| [`scss/selector-no-union-class-name`][57]                    | Enabled                                                             |
| [`selector-anb-no-unmatchable`][58]                          | Enabled                                                             |
| [`selector-attribute-name-disallowed-list`][59]              | `"/^data-/"`                                                        |
| [`selector-max-combinators`][60]                             | `3`                                                                 |
| [`selector-max-id`][61]                                      | `0`                                                                 |
| [`selector-max-specificity`][62]                             | `"0,3,3"`                                                           |
| [`selector-no-qualifying-type`][63]                          | `{"ignore":["attribute","class"]}`                                  |
| [`selector-pseudo-class-no-unknown`][64]                     | Enabled                                                             |
| [`selector-pseudo-element-no-unknown`][65]                   | Enabled                                                             |
| [`selector-type-no-unknown`][66]                             | Enabled                                                             |
| [`string-no-newline`][67]                                    | Enabled                                                             |
| [`syntax-string-no-invalid`][68]                             | Enabled                                                             |
| [`unit-no-unknown`][69]                                      | Enabled                                                             |
| [`value-no-vendor-prefix`][70]                               | Enabled                                                             |

[config]: https://github.com/wagtail/stylelint-config-wagtail/blob/main/index.js
[0]: https://stylelint.io/user-guide/rules/list/at-rule-no-deprecated/
[1]: https://stylelint.io/user-guide/rules/list/block-no-empty/
[2]: https://stylelint.io/user-guide/rules/list/color-hex-length/
[3]: https://stylelint.io/user-guide/rules/list/color-named/
[4]: https://stylelint.io/user-guide/rules/list/color-no-invalid-hex/
[5]: https://stylelint.io/user-guide/rules/list/comment-no-empty/
[6]: https://stylelint.io/user-guide/rules/list/custom-property-no-missing-var-function/
[7]: https://stylelint.io/user-guide/rules/list/declaration-block-no-duplicate-custom-properties/
[8]: https://stylelint.io/user-guide/rules/list/declaration-block-no-duplicate-properties/
[9]: https://stylelint.io/user-guide/rules/list/declaration-block-no-redundant-longhand-properties/
[10]: https://stylelint.io/user-guide/rules/list/declaration-block-no-shorthand-property-overrides/
[11]: https://stylelint.io/user-guide/rules/list/declaration-block-single-line-max-declarations/
[12]: https://stylelint.io/user-guide/rules/list/declaration-no-important/
[13]: https://stylelint.io/user-guide/rules/list/declaration-property-value-allowed-list/
[14]: https://stylelint.io/user-guide/rules/list/declaration-property-value-disallowed-list/
[15]: https://stylelint.io/user-guide/rules/list/declaration-property-value-keyword-no-deprecated/
[16]: https://stylelint.io/user-guide/rules/list/font-family-no-duplicate-names/
[17]: https://stylelint.io/user-guide/rules/list/font-family-no-missing-generic-family-keyword/
[18]: https://stylelint.io/user-guide/rules/list/function-calc-no-unspaced-operator/
[19]: https://stylelint.io/user-guide/rules/list/function-linear-gradient-no-nonstandard-direction/
[20]: https://stylelint.io/user-guide/rules/list/function-url-quotes/
[21]: https://stylelint.io/user-guide/rules/list/keyframe-block-no-duplicate-selectors/
[22]: https://stylelint.io/user-guide/rules/list/keyframe-declaration-no-important/
[23]: https://stylelint.io/user-guide/rules/list/length-zero-no-unit/
[24]: https://stylelint.io/user-guide/rules/list/max-nesting-depth/
[25]: https://stylelint.io/user-guide/rules/list/media-feature-name-no-unknown/
[26]: https://stylelint.io/user-guide/rules/list/media-type-no-deprecated/
[27]: https://stylelint.io/user-guide/rules/list/named-grid-areas-no-invalid/
[28]: https://stylelint.io/user-guide/rules/list/nesting-selector-no-missing-scoping-root/
[29]: https://stylelint.io/user-guide/rules/list/no-duplicate-at-import-rules/
[30]: https://stylelint.io/user-guide/rules/list/no-empty-source/
[31]: https://stylelint.io/user-guide/rules/list/no-invalid-double-slash-comments/
[32]: https://stylelint.io/user-guide/rules/list/no-invalid-position-at-import-rule/
[33]: https://stylelint.io/user-guide/rules/list/no-invalid-position-declaration/
[34]: https://stylelint.io/user-guide/rules/list/no-irregular-whitespace/
[35]: https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md
[36]: https://stylelint.io/user-guide/rules/list/property-disallowed-list/
[37]: https://stylelint.io/user-guide/rules/list/property-no-deprecated/
[38]: https://stylelint.io/user-guide/rules/list/property-no-unknown/
[39]: https://stylelint.io/user-guide/rules/list/property-no-vendor-prefix/
[40]: https://stylelint.io/user-guide/rules/list/rule-empty-line-before/
[41]: https://github.com/AndyOGo/stylelint-declaration-strict-value
[42]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-extend-no-missing-placeholder/README.md
[43]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-if-no-null/README.md
[44]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/README.md
[45]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/comment-no-empty/README.md
[46]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/declaration-nested-properties-no-divided-groups/README.md
[47]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-no-missing-interpolation/README.md
[48]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-quote-no-quoted-strings-inside/README.md
[49]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-unquote-no-unquoted-strings-inside/README.md
[50]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/load-no-partial-leading-underscore/README.md
[51]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/load-partial-extension/README.md
[52]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/media-feature-value-dollar-variable/README.md
[53]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-duplicate-mixins/README.md
[54]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-global-function-names/README.md
[55]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-class-pattern/README.md
[56]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector/README.md
[57]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-no-union-class-name/README.md
[58]: https://stylelint.io/user-guide/rules/list/selector-anb-no-unmatchable/
[59]: https://stylelint.io/user-guide/rules/list/selector-attribute-name-disallowed-list/
[60]: https://stylelint.io/user-guide/rules/list/selector-max-combinators/
[61]: https://stylelint.io/user-guide/rules/list/selector-max-id/
[62]: https://stylelint.io/user-guide/rules/list/selector-max-specificity/
[63]: https://stylelint.io/user-guide/rules/list/selector-no-qualifying-type/
[64]: https://stylelint.io/user-guide/rules/list/selector-pseudo-class-no-unknown/
[65]: https://stylelint.io/user-guide/rules/list/selector-pseudo-element-no-unknown/
[66]: https://stylelint.io/user-guide/rules/list/selector-type-no-unknown/
[67]: https://stylelint.io/user-guide/rules/list/string-no-newline/
[68]: https://stylelint.io/user-guide/rules/list/syntax-string-no-invalid/
[69]: https://stylelint.io/user-guide/rules/list/unit-no-unknown/
[70]: https://stylelint.io/user-guide/rules/list/value-no-vendor-prefix/
