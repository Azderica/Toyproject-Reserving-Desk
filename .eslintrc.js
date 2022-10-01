module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    '@vue/typescript',
  ],
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'no-debugger': 'warn',
    'prefer-rest-params': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/script-setup-uses-vars': 'off',
    "linebreak-style": "off",
    "space-before-function-paren": ["error", "never"],
    "indent": ["error", "tab"],
    "no-tabs": "off",
    'no-extra-semi': 'off',
    'semi': 'off',
    "vue/html-indent": ["error", 'tab', {
      "attribute": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }]
  },
};
