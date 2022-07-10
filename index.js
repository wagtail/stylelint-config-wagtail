module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier-scss',
  ],
  plugins: ['stylelint-declaration-strict-value', 'stylelint-order'],
  rules: {
    'block-no-empty': true,
    'color-hex-length': 'short',
    'color-named': 'never',
    'comment-no-empty': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-single-line-max-declarations': 1,
    'declaration-property-value-allowed-list': {
      // Only allow logical values, and resets.
      'clear': ['both', 'none'],
      // Only allow logical values, and resets.
      'float': ['inline-start', 'inline-end', 'none', 'unset'],
      // Only allow logical values.
      'text-align': ['start', 'end', 'center'],
    },
    'declaration-property-value-disallowed-list': [
      { '/^border/': ['none'] },
      { severity: 'error' },
    ],
    'declaration-no-important': true,
    'font-family-no-duplicate-names': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-url-quotes': 'always',
    'length-zero-no-unit': true,
    'max-nesting-depth': 3,
    'media-feature-name-no-unknown': true,
    'no-empty-source': true,
    // Mixins should always be first in declarations
    'order/order': [
      {
        name: 'include',
        type: 'at-rule',
      },
      'declarations',
    ],
    'property-disallowed-list': [
      // Disallow positioning with physical properties. Use logical ones instead.
      '/left/',
      '/right/',
      // Disallow text-transform, as we never want text to be uppercased.
      'text-transform',
    ],
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [
      'always',
      { except: ['after-single-line-comment', 'first-nested'] },
    ],
    'scale-unlimited/declaration-strict-value': [
      [
        // Colors should always be defined from variables or functions.
        '/color/',
        'fill',
        'stroke',
        // Font tokens should come from our design tokens.
        'font-family',
        'font-size',
        'font-weight',
        // Spacing should use a consistent scale rather than hard-coded values.
        '/margin/',
        '/padding/',
        'gap',
        // Consistently using variables for z-index allows us to define the order of the values globally.
        'z-index',
      ],
      {
        ignoreValues: [
          'currentColor',
          'inherit',
          'initial',
          'none',
          'unset',
          'transparent',
          // System colors for forced-colors styling.
          // See https://drafts.csswg.org/css-color-4/#css-system-colors.
          'Canvas',
          'CanvasText',
          'LinkText',
          'VisitedText',
          'ActiveText',
          'ButtonFace',
          'ButtonText',
          'ButtonBorder',
          'Field',
          'FieldText',
          'Highlight',
          'HighlightText',
          'SelectedItem',
          'SelectedItemText',
          'Mark',
          'MarkText',
          'GrayText',
          'AccentColor',
          'AccentColorText',
        ],
      },
    ],
    'scss/at-import-partial-extension': null,
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'scss/media-feature-value-dollar-variable': [
      'always',
      { ignore: ['keywords'] },
    ],
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/selector-no-union-class-name': true,
    'selector-class-pattern': [
      // Loose pattern for hyphenated BEM. This also allows simple words to be used as class names, .e.g. `.active`, `.button`.
      // Based on:
      // - https://github.com/postcss/postcss-bem-linter/issues/89#issuecomment-255482072
      // - https://gist.github.com/Potherca/f2a65491e63338659c3a0d2b07eee382
      // - https://github.com/torchbox/stylelint-config-torchbox/blob/2d1dffc2d6af49d1327e66daf51d520dd50c5fdc/config.js#L22-L31
      // See also: https://github.com/simonsmith/stylelint-selector-bem-pattern.
      // Proceed with caution if reviewing this – and use https://regexr.com/
      /^[a-z]+[0-9]{0,2}(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$/,
      { resolveNestedSelectors: true },
    ],
    'selector-max-combinators': 3,
    'selector-max-id': 0,
    'selector-max-specificity': '0,3,3',
    'selector-no-qualifying-type': [true, { ignore: ['attribute', 'class'] }],
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'value-no-vendor-prefix': true,
  },
};
