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
