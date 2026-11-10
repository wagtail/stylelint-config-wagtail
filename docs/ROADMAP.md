---
description: 'Roadmap for @wagtail/stylelint-config-wagtail: planned changes, likely improvements and longer-term ideas for the project.'
---

# Roadmap

This file provides an overview of the direction this project is heading. It contains both likely and more aspirational changes. For more granular improvements, see the [project’s issues backlog](https://github.com/wagtail/stylelint-config-wagtail/issues).

## Planned

> Specific, well-scoped changes that have concrete time-bound implementation plans.

## Ready

> Feasible, near-term improvement ideas that are clear in scope.

## Experimental

> Possible changes that require R&D, and high-risk ideas that could bring large benefits but with likely trade-offs.

### Evaluate other CSS QA tools

Stylelint is no longer the only deterministic CSS analyser, and the ecosystem around it has moved on from simple convention rules. As of late 2026, [Biome](https://biomejs.dev/linter/css/rules/) ships roughly 48 CSS rules with `biome migrate stylelint`, and ESLint’s official [`@eslint/css`](https://github.com/eslint/css) ships around 15 — both cover the correctness tier (unknown properties, units and functions, duplicate declarations, `!important`, and Baseline support) rather than the convention tier this config enforces, and Biome’s SCSS support is younger than ours. What neither tool provides is whole-stylesheet analysis, and that is where the opportunity lies: `@projectwallace/stylelint-plugin` reasons across a file about unused keyframes, layers and custom properties, unknown container names, unreachable media conditions, and runaway unique-colour or z-index counts, while `stylelint-plugin-use-baseline` closes the browser-support gap Stylelint gave up in v8. Dead-CSS detection and anything that depends on rendered output (contrast, `forced-colors`, layout) remain out of reach for static tooling and belong to runtime checks such as axe and visual regression instead.

In practice, this means experimenting — not committing. The lowest-risk step is to add a Baseline compatibility plugin at `warning` severity, since the failure mode is a noisy warning rather than a broken build; the larger step is to adopt Project Wallace’s plugin as a preset, linting a shipped CSS bundle rather than SCSS sources, and to tune its opinionated thresholds against real Wagtail sites before deciding whether they belong in a shared config at all. Replacing Stylelint outright is a non-goal for now: the SCSS gap, `biome migrate stylelint` deliberately skipping inspired rules, and this config’s BEM, logical-property and design-token conventions have no equivalent elsewhere. The open question is evidence, not appetite — nobody has measured false-positive rates for these tools on a Django-template codebase, so any proposed rule stays an experiment until a real project validates it.
