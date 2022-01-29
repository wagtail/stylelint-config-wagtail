module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier-scss',
  ],
  rules: {
    'block-no-empty': true,
    'color-hex-length': 'short',
    'color-named': 'never',
    'comment-no-empty': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-single-line-max-declarations': 1,
    'declaration-property-value-allowed-list': {
      // Only allow logical values.
      'clear': ['both'],
      'float': ['inline-start', 'inline-end'],
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
    'property-disallowed-list': [
      // Disallow positioning with physical properties. Use logical ones instead.
      '/left/',
      '/right/',
    ],
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [
      'always',
      { except: ['after-single-line-comment', 'first-nested'] },
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
