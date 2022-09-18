module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
    jquery: true
  },
  extends: [
    'plugin:vue/essential',
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  plugins: [
    'vue',
    '@typescript-eslint',
    ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }]
  ],
  rules: {
    'no-debugger': 'warn',
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
  }
}
