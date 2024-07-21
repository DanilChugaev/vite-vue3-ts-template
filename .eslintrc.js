module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': ['eslint:recommended', 'plugin:vue/essential', 'plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended'],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
  },
  'plugins': ['vue', '@typescript-eslint'],
  'globals': {
    'module': true,
    'defineProps': true,
    'describe': true,
    'test': true,
    'expect': true,
  },
  'rules': {
    'vue/no-multiple-template-root': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'vue/multi-word-component-names': 0,
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
  },
}
