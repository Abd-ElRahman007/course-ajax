module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    curly: ['error', 'all'],
    eqeqeq: ['error', 'allow-null'],
    'no-alert': 'error',
    'no-caller': 'error',
    'no-console': 'off',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-global-assign': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-unused-expressions': 'error',
    'no-with': 'error',
    yoda: 'error',
    'array-bracket-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs'],
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef-init': 'error',
    camelcase: 'error',
    'comma-spacing': 'error',
    'eol-last': 'error',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'keyword-spacing': 'error',
    'new-cap': 'error',
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
      },
    ],
    'no-new-object': 'error',
    'func-call-spacing': ['error', 'never'],
    'no-trailing-spaces': 'error',
    semi: ['error', 'always'],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-parent': [
      'off',
      {
        anonymous: 'always',
        named: 'never',
      },
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
  },
  plugins: ['prettier'],
};
