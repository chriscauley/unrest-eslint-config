module.exports = {
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  ignorePatterns: ['node_modules', '**/assets/*', 'public/*', "*.scss", "*.css", "*.yaml"],
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        singleQuote: true,
        trailingComma: 'all',
        semi: false,
        printWidth: 100,
      },
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }
    ],
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'vue/attribute-hyphenation': 0,
    'vue/attributes-order': 0,
    'vue/html-indent': 0,
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': 0,
    'vue/prop-name-casing': 0,
    'vue/require-default-prop': 0,
    'vue/singleline-html-element-content-newline': 0,
  },
  globals: {
    module: 'readonly',
    __dirname: 'readonly',
  },
}
