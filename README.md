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

Our default export contains all of our Stylelint rules, along with specific plugins for SCSS syntax.

1. Run `npm install stylelint @wagtail/stylelint-config-wagtail --save-dev`
2. Add `"extends": "@wagtail/stylelint-config-wagtail"` to your `.stylelintrc`

## Links

- [Stylelint](https://stylelint.io/)
- [stylelint-config-recommended-scss](https://github.com/stylelint-scss/stylelint-config-recommended-scss)
- [stylelint-config-prettier-scss](https://github.com/prettier/stylelint-config-prettier-scss)

## Contribution Guidelines

### Install

- Required [Node](https://nodejs.org)
- We recommend using [nvm](https://github.com/creationix/nvm)
- Clone the project on to your computer
- Run `nvm install` to ensure you have the correct Node version
- Run `npm install` to install project dependencies
- Ensure your editor is set up to use [editorconfig](https://editorconfig.org/), [Prettier](https://prettier.io/), [Eslint](https://eslint.org/) and [Stylelint](https://stylelint.io/)

### Development

- Run `nvm use` to set Node to the correct version
- Run tests via `npm run test`
- Run linting via `npm run lint`
- Run updates to Readme (if rules have changed) via `npm run write-rules`
- Run preflight checks before committing final code via `npm run preflight`
- Note: When working with the rule set, only modify the `index.js` file, not the `.eslintrc` file as it is for local linting only

## Rules

<!-- AUTO GENERATED - run `npm run write-rules` to update - do not modify manually -->
<!-- RULES:START -->

| Rule                                                         | Config                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------------- |
| [`block-no-empty`][0]                                        | Enabled                                                             |
| [`color-hex-length`][1]                                      | `"short"`                                                           |
| [`color-named`][2]                                           | `"never"`                                                           |
| [`color-no-invalid-hex`][3]                                  | Enabled                                                             |
| [`comment-no-empty`][4]                                      | Enabled                                                             |
| [`custom-property-no-missing-var-function`][5]               | Enabled                                                             |
| [`declaration-block-no-duplicate-custom-properties`][6]      | Enabled                                                             |
| [`declaration-block-no-duplicate-properties`][7]             | Enabled                                                             |
| [`declaration-block-no-redundant-longhand-properties`][8]    | Enabled                                                             |
| [`declaration-block-no-shorthand-property-overrides`][9]     | Enabled                                                             |
| [`declaration-block-single-line-max-declarations`][10]       | `1`                                                                 |
| [`declaration-no-important`][11]                             | Enabled                                                             |
| [`declaration-property-value-allowed-list`][12]              | Enabled - [see Config][config]                                      |
| [`declaration-property-value-disallowed-list`][13]           | `{"/^border/":["none"]}, {"severity":"error"}`                      |
| [`font-family-no-duplicate-names`][14]                       | Enabled                                                             |
| [`font-family-no-missing-generic-family-keyword`][15]        | Enabled                                                             |
| [`function-calc-no-unspaced-operator`][16]                   | Enabled                                                             |
| [`function-linear-gradient-no-nonstandard-direction`][17]    | Enabled                                                             |
| [`function-url-quotes`][18]                                  | `"always"`                                                          |
| [`keyframe-block-no-duplicate-selectors`][19]                | Enabled                                                             |
| [`keyframe-declaration-no-important`][20]                    | Enabled                                                             |
| [`length-zero-no-unit`][21]                                  | Enabled                                                             |
| [`max-nesting-depth`][22]                                    | `3`                                                                 |
| [`media-feature-name-no-unknown`][23]                        | Enabled                                                             |
| [`named-grid-areas-no-invalid`][24]                          | Enabled                                                             |
| [`no-descending-specificity`][25]                            | Enabled                                                             |
| [`no-duplicate-at-import-rules`][26]                         | Enabled                                                             |
| [`no-duplicate-selectors`][27]                               | Enabled                                                             |
| [`no-empty-source`][28]                                      | Enabled                                                             |
| [`no-invalid-double-slash-comments`][29]                     | Enabled                                                             |
| [`no-invalid-position-at-import-rule`][30]                   | `{"ignoreAtRules":["use","forward"]}`                               |
| [`no-irregular-whitespace`][31]                              | Enabled                                                             |
| [`order/order`][32]                                          | `[{"name":"include","type":"at-rule"},"declarations"]`              |
| [`property-disallowed-list`][33]                             | `["/forced-color-adjust/","/left/","/right/","text-transform"]`     |
| [`property-no-unknown`][34]                                  | Enabled                                                             |
| [`property-no-vendor-prefix`][35]                            | Enabled                                                             |
| [`rule-empty-line-before`][36]                               | `"always", {"except":["after-single-line-comment","first-nested"]}` |
| [`scale-unlimited/declaration-strict-value`][37]             | Enabled - [see Config][config]                                      |
| [`scss/at-extend-no-missing-placeholder`][38]                | Enabled                                                             |
| [`scss/at-if-no-null`][39]                                   | Enabled                                                             |
| [`scss/at-rule-no-unknown`][40]                              | Enabled                                                             |
| [`scss/comment-no-empty`][41]                                | Enabled                                                             |
| [`scss/declaration-nested-properties-no-divided-groups`][42] | Enabled                                                             |
| [`scss/dollar-variable-no-missing-interpolation`][43]        | Enabled                                                             |
| [`scss/function-quote-no-quoted-strings-inside`][44]         | Enabled                                                             |
| [`scss/function-unquote-no-unquoted-strings-inside`][45]     | Enabled                                                             |
| [`scss/load-no-partial-leading-underscore`][46]              | Enabled                                                             |
| [`scss/load-partial-extension`][47]                          | `"never"`                                                           |
| [`scss/media-feature-value-dollar-variable`][48]             | `"always", {"ignore":["keywords"]}`                                 |
| [`scss/no-duplicate-mixins`][49]                             | Enabled                                                             |
| [`scss/no-global-function-names`][50]                        | Enabled                                                             |
| [`scss/selector-no-redundant-nesting-selector`][51]          | Enabled                                                             |
| [`scss/selector-no-union-class-name`][52]                    | Enabled                                                             |
| [`selector-anb-no-unmatchable`][53]                          | Enabled                                                             |
| [`selector-attribute-name-disallowed-list`][54]              | `"/^data-/"`                                                        |
| [`selector-class-pattern`][55]                               | `{}, {"resolveNestedSelectors":true}`                               |
| [`selector-max-combinators`][56]                             | `3`                                                                 |
| [`selector-max-id`][57]                                      | `0`                                                                 |
| [`selector-max-specificity`][58]                             | `"0,3,3"`                                                           |
| [`selector-no-qualifying-type`][59]                          | `{"ignore":["attribute","class"]}`                                  |
| [`selector-pseudo-class-no-unknown`][60]                     | Enabled                                                             |
| [`selector-pseudo-element-no-unknown`][61]                   | Enabled                                                             |
| [`selector-type-no-unknown`][62]                             | Enabled                                                             |
| [`string-no-newline`][63]                                    | Enabled                                                             |
| [`unit-no-unknown`][64]                                      | Enabled                                                             |
| [`value-no-vendor-prefix`][65]                               | Enabled                                                             |

[config]: https://github.com/wagtail/stylelint-config-wagtail/blob/main/index.js
[0]: https://stylelint.io/user-guide/rules/list/block-no-empty/
[1]: https://stylelint.io/user-guide/rules/list/color-hex-length/
[2]: https://stylelint.io/user-guide/rules/list/color-named/
[3]: https://stylelint.io/user-guide/rules/list/color-no-invalid-hex/
[4]: https://stylelint.io/user-guide/rules/list/comment-no-empty/
[5]: https://stylelint.io/user-guide/rules/list/custom-property-no-missing-var-function/
[6]: https://stylelint.io/user-guide/rules/list/declaration-block-no-duplicate-custom-properties/
[7]: https://stylelint.io/user-guide/rules/list/declaration-block-no-duplicate-properties/
[8]: https://stylelint.io/user-guide/rules/list/declaration-block-no-redundant-longhand-properties/
[9]: https://stylelint.io/user-guide/rules/list/declaration-block-no-shorthand-property-overrides/
[10]: https://stylelint.io/user-guide/rules/list/declaration-block-single-line-max-declarations/
[11]: https://stylelint.io/user-guide/rules/list/declaration-no-important/
[12]: https://stylelint.io/user-guide/rules/list/declaration-property-value-allowed-list/
[13]: https://stylelint.io/user-guide/rules/list/declaration-property-value-disallowed-list/
[14]: https://stylelint.io/user-guide/rules/list/font-family-no-duplicate-names/
[15]: https://stylelint.io/user-guide/rules/list/font-family-no-missing-generic-family-keyword/
[16]: https://stylelint.io/user-guide/rules/list/function-calc-no-unspaced-operator/
[17]: https://stylelint.io/user-guide/rules/list/function-linear-gradient-no-nonstandard-direction/
[18]: https://stylelint.io/user-guide/rules/list/function-url-quotes/
[19]: https://stylelint.io/user-guide/rules/list/keyframe-block-no-duplicate-selectors/
[20]: https://stylelint.io/user-guide/rules/list/keyframe-declaration-no-important/
[21]: https://stylelint.io/user-guide/rules/list/length-zero-no-unit/
[22]: https://stylelint.io/user-guide/rules/list/max-nesting-depth/
[23]: https://stylelint.io/user-guide/rules/list/media-feature-name-no-unknown/
[24]: https://stylelint.io/user-guide/rules/list/named-grid-areas-no-invalid/
[25]: https://stylelint.io/user-guide/rules/list/no-descending-specificity/
[26]: https://stylelint.io/user-guide/rules/list/no-duplicate-at-import-rules/
[27]: https://stylelint.io/user-guide/rules/list/no-duplicate-selectors/
[28]: https://stylelint.io/user-guide/rules/list/no-empty-source/
[29]: https://stylelint.io/user-guide/rules/list/no-invalid-double-slash-comments/
[30]: https://stylelint.io/user-guide/rules/list/no-invalid-position-at-import-rule/
[31]: https://stylelint.io/user-guide/rules/list/no-irregular-whitespace/
[32]: https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md
[33]: https://stylelint.io/user-guide/rules/list/property-disallowed-list/
[34]: https://stylelint.io/user-guide/rules/list/property-no-unknown/
[35]: https://stylelint.io/user-guide/rules/list/property-no-vendor-prefix/
[36]: https://stylelint.io/user-guide/rules/list/rule-empty-line-before/
[37]: https://github.com/AndyOGo/stylelint-declaration-strict-value
[38]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-extend-no-missing-placeholder/README.md
[39]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-if-no-null/README.md
[40]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/README.md
[41]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/comment-no-empty/README.md
[42]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/declaration-nested-properties-no-divided-groups/README.md
[43]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-no-missing-interpolation/README.md
[44]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-quote-no-quoted-strings-inside/README.md
[45]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-unquote-no-unquoted-strings-inside/README.md
[46]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/load-no-partial-leading-underscore/README.md
[47]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/load-partial-extension/README.md
[48]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/media-feature-value-dollar-variable/README.md
[49]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-duplicate-mixins/README.md
[50]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-global-function-names/README.md
[51]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector/README.md
[52]: https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-no-union-class-name/README.md
[53]: https://stylelint.io/user-guide/rules/list/selector-anb-no-unmatchable/
[54]: https://stylelint.io/user-guide/rules/list/selector-attribute-name-disallowed-list/
[55]: https://stylelint.io/user-guide/rules/list/selector-class-pattern/
[56]: https://stylelint.io/user-guide/rules/list/selector-max-combinators/
[57]: https://stylelint.io/user-guide/rules/list/selector-max-id/
[58]: https://stylelint.io/user-guide/rules/list/selector-max-specificity/
[59]: https://stylelint.io/user-guide/rules/list/selector-no-qualifying-type/
[60]: https://stylelint.io/user-guide/rules/list/selector-pseudo-class-no-unknown/
[61]: https://stylelint.io/user-guide/rules/list/selector-pseudo-element-no-unknown/
[62]: https://stylelint.io/user-guide/rules/list/selector-type-no-unknown/
[63]: https://stylelint.io/user-guide/rules/list/string-no-newline/
[64]: https://stylelint.io/user-guide/rules/list/unit-no-unknown/
[65]: https://stylelint.io/user-guide/rules/list/value-no-vendor-prefix/
