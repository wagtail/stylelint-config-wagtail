export default {
    'block-no-empty': {
        code: '.foo { }',
    },
    'color-hex-length': {
        code: '.foo { color: #ffffff; }',
    },
    'color-named': {
        code: '.foo { color: red; }',
    },
    'comment-no-empty': {
        code: '/**/',
    },
    'declaration-block-no-duplicate-properties': {
        code: '.foo { color: red; color: blue; }',
    },
    'declaration-block-no-redundant-longhand-properties': {
        code: '.foo { margin-top: 10px; margin-right: 10px; margin-bottom: 10px; margin-left: 10px; }',
    },
    'declaration-block-single-line-max-declarations': {
        code: '.foo { color: red; background: blue; }',
    },
    'declaration-property-value-allowed-list': {
        code: '.foo { float: left; text-align: left; }',
    },
    'declaration-property-value-disallowed-list': {
        code: '.foo { border: none; }',
    },
    'declaration-no-important': {
        code: '.foo { color: red !important; }',
    },
    'font-family-no-duplicate-names': {
        code: '.foo { font-family: "Arial", "Arial"; }',
    },
    'function-calc-no-unspaced-operator': {
        code: '.foo { width: calc(1+1); }',
    },
    'function-linear-gradient-no-nonstandard-direction': {
        code: '.foo { background: linear-gradient(top, #fff, #000); }',
    },
    'function-url-quotes': {
        code: '.foo { background: url(https://example.com); }',
    },
    'length-zero-no-unit': {
        code: '.foo { margin: 0px; }',
    },
    'max-nesting-depth': {
        code: '.a { .b { .c { .d { color: red; } } } }',
    },
    'media-feature-name-no-unknown': {
        code: '@media screen and (unknown) { .foo { color: red; } }',
    },
    'no-empty-source': {
        code: '',
    },
    'order/order': {
        code: '.foo { color: red; @include bar; }',
    },
    'property-disallowed-list': {
        code: '.foo { text-transform: uppercase; left: 0; forced-color-adjust: none; }',
    },
    'property-no-unknown': {
        code: '.foo { unknown-prop: value; }',
    },
    'property-no-vendor-prefix': {
        code: '.foo { -webkit-transform: scale(1); }',
    },
    'rule-empty-line-before': {
        code: '.foo { color: red; }\n.bar { color: blue; }',
    },
    'scale-unlimited/declaration-strict-value': {
        code: '.foo { color: #fff; margin: 10px; font-size: 16px; }',
    },
    'scss/media-feature-value-dollar-variable': {
        code: '@media (min-width: 768px) { .foo { color: red; } }',
    },
    'scss/selector-no-redundant-nesting-selector': {
        code: '.foo { & .bar { color: red; } }',
    },
    'scss/selector-no-union-class-name': {
        code: '.foo { &.foo { color: red; } }',
    },
    'selector-attribute-name-disallowed-list': {
        code: '[data-foo] { color: red; }',
    },
    'scss/selector-class-pattern': {
        code: '.InvalidClass { color: red; } .invalid_underscore { color: red; }',
    },
    'selector-max-combinators': {
        code: '.a .b .c .d .e { color: red; }',
    },
    'selector-max-id': {
        code: '#foo { color: red; }',
    },
    'selector-max-specificity': {
        code: '#foo .bar .baz .qux { color: red; }',
    },
    'selector-no-qualifying-type': {
        code: 'div#foo { color: red; }',
    },
    'selector-pseudo-element-no-unknown': {
        code: '.foo::unknown-pseudo { color: red; }',
    },
    'selector-type-no-unknown': {
        code: 'unknown-element { color: red; }',
    },
    'string-no-newline': {
        code: `.foo[title="hello\nworld"] { color: red; }`,
    },
    'unit-no-unknown': {
        code: '.foo { font-size: 10pxz; }',
    },
    'value-no-vendor-prefix': {
        code: '.foo { display: -webkit-box; }',
    },
};
