module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['@typescript-eslint', 'react'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'next/core-web-vitals', // Next.js's recommended settings
    ],
    rules: {
      // Add your custom rules here
      '@typescript-eslint/no-unused-vars': 'off',
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  