module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier-scss',
  ],
  plugins: ['stylelint-declaration-strict-value'],
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
      { 'text-transform': 'uppercase' },
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
    'property-disallowed-list': [
      // Disallow positioning with physical properties. Use logical ones instead.
      '/left/',
      '/right/'
      // Disallow text-transform.
      'text-transform'
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
          'transparent',
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
    'selector-max-id': 0,
    'selector-no-qualifying-type': [true, { ignore: ['attribute', 'class'] }],
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'value-no-vendor-prefix': true,
  },
};
