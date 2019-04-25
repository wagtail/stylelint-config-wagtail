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
