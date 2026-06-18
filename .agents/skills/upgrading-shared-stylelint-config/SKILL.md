---
name: upgrading-shared-stylelint-config
description: Upgrades a Stylelint configuration to a new Stylelint major release
license: MIT
metadata:
  audience: maintainers
  # Hide the skill from discovery: https://github.com/vercel-labs/skills#optional-fields
  internal: true
  disable-model-invocation: true
---

## Overview

Comprehensive project and dependencies review to identify needed changes to upgrade this project to a new Stylelint version, and potential opt-in improvements based on any changes in the release.

## Methodology

### Goals

- Upgrade the project to the target Stylelint release, including any needed dependencies upgrades.
- Baseline QA that the upgrade works correctly - linting passes, test suite passes, all with no deprecation warnings if possible.
- A thorough upgrade report for the user (upgrade methodology, what changed, what further tests to do, links to relevant information), ideally with guidance on opt-in changes to consider.

### Guardrails

- Prefer minimal, reviewable changes. Avoid introducing technical debt.
- Make dependency updates explicit and reproducible (lockfile updates included).
- No fixes unrelated to the upgrade (like linting/formatting), unless required for the QA checks to pass.
- If a change is ambiguous, choose the option with the least technical debt. Ask for further input if needed.
- When there are issues that seem like bugs in the dependencies, encourage the user to report back with feedback for maintainers.

### Input

To detect from the context or request from the user if unclear:

- Agent mode: whether we want to provide an audit of the needed work for an upgrade, or actually directly do the upgrade. Default: assume "direct update on current code".
- Current versions of Node, Stylelint. Default: read from project configuration (`node --version`, `npm info . peerDependencies`)
- Target version for Stylelint. Default: assume "latest", fetch the [CHANGELOG](https://raw.githubusercontent.com/stylelint/stylelint/refs/heads/main/CHANGELOG.md) and check which version is latest based on the current date.

### Reference data sources

Always fetch latest information from the official Stylelint docs if possible.

- [Official CHANGELOG](https://raw.githubusercontent.com/stylelint/stylelint/refs/heads/main/CHANGELOG.md)
- Example: [Stylelint 17 migration guide (Markdown source)](https://raw.githubusercontent.com/stylelint/stylelint/refs/heads/main/docs/migration-guide/to-17.md)
- Example: [Stylelint 17 migration guide (web page)](https://stylelint.io/migration-guide/to-17)

Combine it with project-specific information:

- Guidance for contributors in `CONTRIBUTING.md`.
- Upgrade considerations / test plans / documentation on customizations.

### Reporting

Upgrades are sensitive tasks, it’s critical to provide clear information to the user throughout the upgrade tasks, with clear requests for any extra input. And as a comprehensive report at the end.

- Use text formatting if supported (tables, lists, Markdown links)
- Link directly to release notes and other documentation pages where relevant.
- When sharing docs references in reporting, make sure to link to the HTML pages.
- Report on both the methodology, and the outcome.
- Use artifacts in addition to messages if supported.

### Commit and pull request strategy

If the current task mode is to work directly on the project code, commit regularly on a new branch unless otherwise noted by project instructions.

Commit for:

- Version upgrades of dependencies
- Fixes in the code
- Fixes / additions in test suites
- Documentation updates

Push if allowed from current permissions or after user confirmation, when:

- We want to see results from Continuous Integration tools.
- We want human review.
- We think the work is done.

### Quality Assurance

Options to check that the upgrade works correctly, to use as needed through upgrade steps:

- Linting passes: `npm run lint`
- Test suite passes: `npm run test`
- Rules tests passes: `npm run test:rules`
- Docs updates work: `npm run build:docs`
- Any other automated or manual checks documented for the project (test plans? upgrade considerations?)

Look for any deprecation warnings coming from Stylelint in particular.

### Definition of done

- Dependency files + lockfiles updated and consistent (`package.json` and `package-lock.json`)
- Test suite / QA tools / CI all passing
- No new deprecation warnings introduced (or explicitly documented)
- CHANGELOG updated
- Any relevant project doc is updated
- Upgrade report created

## Steps

### Confirm upgrade path

- [ ] Confirm all input sources from the upgrade methodology.
- [ ] Retrieve the current Node / Stylelint versions from context or user input
- [ ] Determine the target Stylelint version ("latest" or a specific version number)
- [ ] Fetch [Stylelint migration guides](https://github.com/stylelint/stylelint/tree/main/docs/migration-guide) and use the listing to confirm which releases are along the upgrade path, from current to target.
- [ ] Report the upgrade path to the user.

At this stage, if there are multiple Stylelint versions on the upgrade path, make sure that all subsequent work is done in sequence for every one of those versions. For example, upgrading from Stylelint v14 to v16 should involve running through all the steps in this file with v15 as the target; then asking the user to confirm the successful v15 upgrade; then restarting this all from v15 to v16.

### Baseline setup and QA

- [ ] Check for project-specific information about quality assurance tools and methodologies, dependencies management, and upgrades considerations.
- [ ] Create a branch for the upgrade (check any conventions for branch names, or `upgrade-stylelint-vX`)
- [ ] Run the project’s QA tools / test suite to capture a baseline. At least tests and linting.

### Dependencies audit and upgrades

This may need to be done in a different order depending on whether dependency compatibility issues are reported when upgrading to the new Stylelint version.

- [ ] Use `npm info . devDependencies`, `npm info . dependencies`, `npm info . peerDependencies` to confirm the current versions of all of the project’s dependencies ahead of the upgrades.
- [ ] Uninstall all of the project’s `dependencies` with npm (not dev or peer dependencies).
- [ ] Fetch the [stylelint-find-new-rules CHANGELOG](https://raw.githubusercontent.com/Donov4n/stylelint-find-new-rules/refs/heads/master/CHANGELOG.md) to check which version of this package is compatible with our target Stylelint version.
- [ ] Use `npm install --save-dev --save-exact stylelint@<version> stylelint-find-new-rules@<version>` to install the target Stylelint and stylelint-find-new-rules versions.
- [ ] Fetch the CHANGELOGs of our dependencies, to check which versions of each package is compatible with our target Stylelint version, and any upgrade considerations we need to take into account.
  - [ ] Fetch the [stylelint-config-standard-scss CHANGELOG](https://raw.githubusercontent.com/stylelint-scss/stylelint-config-standard-scss/refs/heads/main/CHANGELOG.md).
  - [ ] Fetch the [stylelint-declaration-strict-value CHANGELOG](https://raw.githubusercontent.com/AndyOGo/stylelint-declaration-strict-value/refs/heads/master/CHANGELOG.md).
  - [ ] Fetch the [stylelint-order CHANGELOG](https://raw.githubusercontent.com/hudochenkov/stylelint-order/refs/heads/master/CHANGELOG.md).
- [ ] Install the versions determined to be compatible with our Stylelint target. Move the `dependencies` definition in package.json to be in the same lines of the file it was before.
- [ ] Report the needed dependencies upgrades to the user
- [ ] Update the project’s documentation about dependencies to reflect any of those changes.
- [ ] Use the project’s QA tools / test suite as needed when doing the upgrades.

Note any warnings or errors from npm or from the project’s QA tools. Those might indicate further actions needed for the upgrades to be successful. Those might require moving on to the subsequent steps to resolve.

### Apply official upgrade guidance

- [ ] Fetch the Stylelint CHANGELOG and migration guide from the next version on the upgrade path, from the official docs.
- [ ] Review the required actions and think about which ones are likely to affect this project.
- [ ] Keep the project’s Node version as-is if it’s already higher than the Stylelint support.
- [ ] Review the project’s implementation of Stylelint APIs, to identify possible code that needs changes.
- [ ] Report those findings. Consider providing a "Status" for every entry in the migration guide, even if just to report the current project is "Not affected"

### Rules updates

This is crucial for the success of the upgrade, and we have bespoke tools to facilitate this.

- [ ] Use `npm run test:rules` to determine which new rules have been introduced.
- [ ] Update `src/unused.js`, making sure to add any new rules in the correct section (look at the guidance inside the file).
- [ ] If in doubt, move the rules to a new section inside the `toReview` array so this can be further reviewed at a later date.
- [ ] Use `npm run test -- -u` to update the project’s snapshots. This is crucial to understand which rule changes will affect users of this project.

### Update the CHANGELOG

Add a new entry in the CHANGELOG, following this set template, with examples replaced with the rules updates relevant for this release:

```markdown
### Features

- Update stylelint to v<version> and up.
- If relevant: Update all config dependencies to their latest releases, compatible with stylelint v<version>.
- If relevant: Change enforced rules from Stylelint and `stylelint-config-standard-scss` (see list below).

### BREAKING CHANGES

The configuration now mandates stylelint v<version>. {Add commentary about the major highlights of the release if relevant}. See Stylelint’s official [Migrating to <version>](https://stylelint.io/migration-guide/to-<version>) documentation.

#### New rules configuration

| Rule                                                                                                                                                             | Purpose                                                                                                                                                                                                                                   | Set to               | Was set to |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ---------- |
| [`at-rule-no-deprecated`](https://stylelint.io/user-guide/rules/at-rule-no-deprecated/)                                                                          | Disallow deprecated at-rules                                                                                                                                                                                                              | `true`               | New rule   |
| [`scss/load-no-partial-leading-underscore`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/load-no-partial-leading-underscore/README.md) | Replaces `scss/at-import-no-partial-leading-underscore` Disallow leading underscore in partial names in `@import`, `@use`, `@forward`, and [`meta.load-css`](https://sass-lang.com/documentation/modules/meta/#load-css) `$url` parameter | `true`               | New rule   |
| [`scss/dollar-variable-colon-space-after`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-after/README.md)   | Require or disallow whitespace after the colon in `$`-variable declarations.                                                                                                                                                              | `always-single-line` | `always`   |

#### New unused rules

- [`unit-allowed-list`](https://stylelint.io/user-guide/rules/unit-allowed-list/)
- [`unit-disallowed-list`](https://stylelint.io/user-guide/rules/unit-disallowed-list/)
```

For the key rules sections,

- [ ] Populate "New rules configuration" for newly-introduced rules, which will show as additions in the git diff of `src/__snapshots__/semver.test.js.snap`.
- [ ] Populate "New rules configuration" for config changes on existing rules, which will show as additions + deletions inside `src/__snapshots__/semver.test.js.snap`.
- [ ] Populate "New unused rules" based on the changes in the diff of `src/unused.js`.

### Update documentation

- [ ] Update the README to reflect the new target Stylelint version number in any examples.
- [ ] If relevant, update the project’s README to reflect any improvements in Stylelint that users could benefit from.
- [ ] Review whether there is any further project documentation to update, and make necessary changes if so.
- [ ] If the project documents "upgrade considerations" for future updates, add information if necessary.

### Produce the upgrade report

- [ ] Check specific instructions from the user / coding harness on how to report information.
- [ ] Report on any assumptions taken while interpreting the methodology for upgrades.
- [ ] Add the reporting for every step in the upgrade process.
- [ ] Report on any opt-in changes from the Stylelint release notes that haven’t been applied.
- [ ] If it seems helpful, produce a manual test plan for the user.
- [ ] If it seems helpful, produce a recap of relevant changes that can be shared with users of this project.
