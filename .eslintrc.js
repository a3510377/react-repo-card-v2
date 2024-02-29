module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:eslint-plugin-import/recommended',
    'plugin:eslint-plugin-import/typescript',
    'eslint-config-airbnb',
    'eslint-config-airbnb-typescript',
    'eslint-config-prettier',
  ],
  overrides: [
    {
      env: { node: true },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'react'],
  rules: {
    // disabled type-aware linting due to performance considerations
    '@typescript-eslint/dot-notation': 'off',

    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',

    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',

    'react/jsx-props-no-spreading': 'off',

    'no-void': 'off',
  },
};
