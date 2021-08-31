module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true
  },
  extends: [
    'standard',
    "plugin:@stencil/recommended",
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    "@stencil/required-jsdoc": 0,
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": ["^h$", "^JSX$"]
      }
    ],
  }
}