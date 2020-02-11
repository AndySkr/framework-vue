module.exports = {
  root: true,
  extends: ['plugin:vue-libs/recommended', 'alloy','alloy/typescript'],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off'
  }
}