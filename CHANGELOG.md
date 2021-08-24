# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Update `stylelint-scss` dependency to latest version (3.20.1)
- Update `stylelint` to require a minimum of v13.13.0
- Fix rule name, to replace with [`declaration-property-value-disallowed-list`](https://github.com/stylelint/stylelint/blob/13.7.0/lib/rules/declaration-property-value-blacklist/README.md)

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
