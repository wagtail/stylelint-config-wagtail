import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const config = require('../index.js');

const tooOpinionated = [
    'comment-word-disallowed-list',
    'declaration-property-unit-allowed-list',
    'declaration-property-unit-disallowed-list',
    'font-weight-notation',
    'function-allowed-list',
    'function-disallowed-list',
    'function-url-no-scheme-relative',
    'function-url-scheme-allowed-list',
    'function-url-scheme-disallowed-list',
    'media-feature-name-allowed-list',
    'media-feature-name-disallowed-list',
    'media-feature-name-value-allowed-list',
    'no-unknown-animations',
    'no-unknown-custom-media',
    'order/properties-alphabetical-order',
    'property-allowed-list',
    'rule-nesting-at-rule-required-list',
    'scss/at-import-partial-extension-disallowed-list',
    'scss/at-import-partial-extension-allowed-list',
    'scss/dollar-variable-default',
    'scss/no-dollar-variables',
    'scss/partial-no-import',
    'scss/selector-nest-combinators',
    'selector-attribute-operator-allowed-list',
    'selector-attribute-operator-disallowed-list',
    'selector-combinator-allowed-list',
    'selector-combinator-disallowed-list',
    'selector-max-attribute',
    'selector-max-class',
    'selector-max-compound-selectors',
    'selector-max-pseudo-class',
    'selector-max-universal',
    'selector-nested-pattern',
    'selector-pseudo-class-allowed-list',
    'selector-pseudo-class-disallowed-list',
    'selector-pseudo-element-allowed-list',
    'selector-pseudo-element-disallowed-list',
    'time-min-milliseconds',
    'unit-allowed-list',
    'unit-disallowed-list',
];

const overridenByOtherRule = [
    'at-rule-disallowed-list',
    'at-rule-property-required-list',
    'at-rule-allowed-list',
    'color-no-hex',
];

const formatting = [
    'scss/dollar-variable-colon-newline-after',
    'scss/double-slash-comment-inline',
];

const toReviewUpgrades = {
    upgrade17: {
        'display-notation': 'https://stylelint.io/user-guide/rules/display-notation',
    },
    upgrade16: {
        'scss/at-mixin-no-risky-nesting-selector': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-no-risky-nesting-selector',
        'scss/at-root-no-redundant': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-root-no-redundant',
        'scss/at-use-no-redundant-alias': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-use-no-redundant-alias',
        'scss/block-no-redundant-nesting': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/block-no-redundant-nesting',
        'scss/declaration-property-value-no-unknown': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/declaration-property-value-no-unknown',
        'scss/function-calculation-no-interpolation': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-calculation-no-interpolation',
        'scss/function-color-channel': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-color-channel',
        'scss/no-duplicate-load-rules': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-duplicate-load-rules',
        'scss/no-unused-private-members': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-unused-private-members',
        'scss/property-no-unknown': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/property-no-unknown',
    },
    upgrade15: {
        'media-query-no-invalid': 'https://stylelint.io/user-guide/rules/media-query-no-invalid',
        'declaration-property-value-no-unknown': 'https://stylelint.io/user-guide/rules/declaration-property-value-no-unknown',
        'media-feature-name-unit-allowed-list': 'https://stylelint.io/user-guide/rules/media-feature-name-unit-allowed-list',
        'media-feature-name-value-no-unknown': 'https://stylelint.io/user-guide/rules/media-feature-name-value-no-unknown',
        'no-unknown-custom-properties': 'https://stylelint.io/user-guide/rules/no-unknown-custom-properties',
        'scss/at-use-no-unnamespaced': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-use-no-unnamespaced',
        'scss/dollar-variable-no-namespaced-assignment': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-no-namespaced-assignment',
        'scss/function-disallowed-list': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-disallowed-list',
        'scss/function-no-unknown': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-no-unknown',
    },
    upgrade14: {
        'declaration-property-max-values': 'https://stylelint.io/user-guide/rules/declaration-property-max-values',
        'color-hex-alpha': 'https://stylelint.io/user-guide/rules/color-hex-alpha/',
        'comment-pattern': 'https://stylelint.io/user-guide/rules/comment-pattern/',
        'rule-selector-property-disallowed-list': 'https://stylelint.io/user-guide/rules/rule-selector-property-disallowed-list/',
        'selector-disallowed-list': 'https://stylelint.io/user-guide/rules/selector-disallowed-list/',
    },
    upgrade13: {
        'scss/at-each-key-value-single-line': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-each-key-value-single-line',
        'scss/at-function-named-arguments': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-function-named-arguments',
        'scss/at-mixin-named-arguments': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-named-arguments',
        'scss/comment-no-loud': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/comment-no-loud',
        'scss/dimension-no-non-numeric-values': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dimension-no-non-numeric-values',
        'scss/dollar-variable-empty-line-after': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-after',
        'scss/dollar-variable-first-in-block': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-first-in-block',
        'scss/function-color-relative': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-color-relative',
        'scss/map-keys-quotes': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/map-keys-quotes',
        'scss/media-feature-value-dollar-variable': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/media-feature-value-dollar-variable',
        'scss/no-duplicate-dollar-variables': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-duplicate-dollar-variables',
        'scss/selector-no-union-class-name': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-no-union-class-name',
        'order/properties-order': 'https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md',
    },
};

const toReview = Object.values(toReviewUpgrades).flatMap((obj) =>
    Object.keys(obj),
);

const unusedRules = [
    ...tooOpinionated,
    ...overridenByOtherRule,
    ...formatting,
    ...toReview,
].reduce((rules, rule) => {
    rules[rule] = true;
    return rules;
}, {});

export default {
    ...config,
    rules: { ...unusedRules, ...config.rules },
};
