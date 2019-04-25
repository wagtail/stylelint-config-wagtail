# stylelint-config-wagtail
Stylelint Config Wagtail

**Important: Not Yet Implemented - still a WIP**

The package provides Wagtail's .stylelintrc as an extensible shared config.

## Usage

Our default export contains all of our Stylelint rules, along with specific plugins for SCSS syntax.
It requires `stylelint`, and `stylelint-scss`.

1. Run `npm install stylelint stylelint-scss styelint-config-wagtail --save-dev`
2. Add `"extends": "wagtail"` to your `.stylelintrc`

# Links

* [Stylelint](https://stylelint.io/)
* [stylelint-scss](https://github.com/kristerkari/stylelint-scss)

# Development

* Run `npm install` after checking out the code
* Set up your editor to use `Prettier`, `Eslint` and `Stylelint`
* When working with the rule set, only modify the `index.js` file, not the `.stylelintrc` file as it is for local linting only
* Run tests via `npm run test`
* Run preflight checks before commiting final code via `npm run preflight`
