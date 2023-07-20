# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.7.0](https://github.com/wagtail/stylelint-config-wagtail/releases/tag/v0.7.0) - 2023-07-20

### Added

- Enforce [keyframe-block-no-duplicate-selectors](https://stylelint.io/user-guide/rules/keyframe-block-no-duplicate-selectors/) ([#34](https://github.com/wagtail/stylelint-config-wagtail/pull/34)).
- Enforce [selector-anb-no-unmatchable](https://stylelint.io/user-guide/rules/selector-anb-no-unmatchable/) ([#34](https://github.com/wagtail/stylelint-config-wagtail/pull/34)).
- Disallow `forced-color-adjust` ([#32](https://github.com/wagtail/stylelint-config-wagtail/issues/32), [#35](https://github.com/wagtail/stylelint-config-wagtail/pull/35)).

### Changed

- Upgrade to Stylelint 15, and latest versions of `stylelint-config-prettier-scss`, `stylelint-config-recommended-scss`, `stylelint-declaration-strict-value`, `stylelint-order` ([#34](https://github.com/wagtail/stylelint-config-wagtail/pull/34)).

## [0.6.0](https://github.com/wagtail/stylelint-config-wagtail/releases/tag/v0.6.0) - 2022-10-21

### Added

- Enforce mixin usage `@include ...` being used at the top of any declaration blocks. ([#17](https://github.com/wagtail/stylelint-config-wagtail/pull/17), [#14](https://github.com/wagtail/stylelint-config-wagtail/issues/14)).
- Enforce `scss/selector-no-union-class-name` rule ([#23](https://github.com/wagtail/stylelint-config-wagtail/pull/23), [#20](https://github.com/wagtail/stylelint-config-wagtail/issues/20)).
- Enforce basic BEM usage with `selector-class-pattern` ([#26](https://github.com/wagtail/stylelint-config-wagtail/pull/26), [#19](https://github.com/wagtail/stylelint-config-wagtail/issues/19)).
- Enforce `selector-max-combinators` and `selector-max-specificity` ([#24](https://github.com/wagtail/stylelint-config-wagtail/pull/24), [#21](https://github.com/wagtail/stylelint-config-wagtail/issues/21)).
- Block data- attributes selectors with `selector-attribute-name-disallowed-list` ([#30](https://github.com/wagtail/stylelint-config-wagtail/pull/30), [#28](https://github.com/wagtail/stylelint-config-wagtail/issues/28)).

### Changed

- Upgrade to latest `stylelint-config-recommended-scss` ([#22](https://github.com/wagtail/stylelint-config-wagtail/pull/22)).
- Allow system colors and `unset` in `declaration-strict-value` ([#29](https://github.com/wagtail/stylelint-config-wagtail/pull/29), [wagtail#8824](https://github.com/wagtail/wagtail/pull/8824)).

## [0.5.0](https://github.com/wagtail/stylelint-config-wagtail/releases/tag/v0.5.0) - 2022-03-15

### Added

- Add linting rule to block `text-transform`, see [wagtail#7624](https://github.com/wagtail/wagtail/issues/7624) for the reasoning behind this change ([#16](https://github.com/wagtail/stylelint-config-wagtail/pull/16)).

## [0.4.1](https://github.com/wagtail/stylelint-config-wagtail/releases/tag/v0.4.1) - 2022-02-28

### Fixed

- Allow `clear: none`, `float: none`, and `float: unset` rather than only logical values.

## [0.4.0](https://github.com/wagtail/stylelint-config-wagtail/releases/tag/v0.4.0) - 2022-02-27

### Added

- Start enforcing [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties) so that projects can better RTL ([#10](https://github.com/wagtail/stylelint-config-wagtail/pull/10)).
- Add up [declaration-strict-value](https://github.com/AndyOGo/stylelint-declaration-strict-value) rule to enforce usage of variables ([#9](https://github.com/wagtail/stylelint-config-wagtail/pull/9)).

### Changed

- Update internal package nanoid version.

## [0.3.2](https://github.com/wagtail/stylelint-config-wagtail/releases/tag/v0.3.2) - 2021-12-23

### Changed

- Tweak SCSS import rules for Wagtail codebase compatibility

## [0.3.1](https://github.com/wagtail/stylelint-config-wagtail/releases/tag/v0.3.1) - 2021-12-23

### Changed

- Switch from `stylelint-scss` to `stylelint-config-recommended-scss`, which bundles the plugin and additionally comes with `postcss-scss`.

## [0.3.0](https://github.com/wagtail/stylelint-config-wagtail/releases/tag/v0.3.0) - 2021-12-22

### Changed

- Update `stylelint` to require a minimum of v14.1.0 (PostCSS v8).
- Update `stylelint-scss` dependency to latest version (4.0.1).
- Replace stylistic rules with [`stylelint-config-prettier-scss`](https://github.com/prettier/stylelint-config-prettier-scss), for compatibility with Prettier.
- Fix rule name, to replace with [`declaration-property-value-disallowed-list`](https://github.com/stylelint/stylelint/blob/13.7.0/lib/rules/declaration-property-value-blacklist/README.md).

## [0.2.0](https://github.com/wagtail/stylelint-config-wagtail/releases/tag/v0.2.0) - 2021-06-27

### Changed

- Update `stylelint-scss` dependency to latest version.
- Update stylelint to require a minimum of v13.5.0.
- Switch scss/media-feature-value-dollar-variable to ignore keyword values

## [0.1.1](https://github.com/wagtail/stylelint-config-wagtail/releases/tag/v0.1.1) - 2020-06-03

### Changed

- Readme updated, stylelint-scss is not needed as a dependency on projects that extend this config.
- Loosen `stylelint-scss` requirement to have no upper bound, as stylelint-scss supports all major versions of stylelint from v8.0.0 to v13.0.0.
- Whitelist only the needed files for published package’s content.

## [0.1.0](https://github.com/wagtail/stylelint-config-wagtail/releases/tag/v0.1.0) - 2019-05-09

- Initial release
