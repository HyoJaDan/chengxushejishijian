/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  plugins: ['testing-library'],
  extends: [
    'airbnb',
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'react/prop-types': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: [
          'arrow-function',
          'function-expression',
          'function-declaration',
        ],
        unamedComponents: 'arrow-function',
      },
    ],
    'no-console': 0, // console.log 사용
    'react/jsx-props-no-spreading': 'off', // react-hoo--form에서 ...register안되는 오류
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'server.js',
          'vitest.config.ts',
          'esbuild-plugins.js',
          '**/*.spec.tsx',
          '**/*.spec.ts',
          '**/*.spec.js',
          '**/*.spec.jsx',
          '**/*.test.tsx',
          '**/*.test.ts',
          '**/*.test.js',
          '**/*.test.jsx',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        'react/jsx-props-no-spreading': 'off',
        project: './tsconfig.json',
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
