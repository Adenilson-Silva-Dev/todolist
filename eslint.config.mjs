// eslint.config.mjs
import js from '@eslint/js';
import { flatCompat } from '@eslint/eslintrc';
import pluginReact from 'eslint-plugin-react';
import pluginReactNative from 'eslint-plugin-react-native';
import pluginImport from 'eslint-plugin-import';
import pluginJSX from 'eslint-plugin-jsx-a11y';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default [
  js.configs.recommended,

  ...flatCompat.config({
    extends: [
      'airbnb',
      'airbnb/hooks',
      'plugin:react/recommended',
      'plugin:react-native/all',
      'plugin:jsx-a11y/recommended',
      'prettier',
    ],
    plugins: {
      react: pluginReact,
      'react-native': pluginReactNative,
      'react-hooks': pluginReactHooks,
      import: pluginImport,
      'jsx-a11y': pluginJSX,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'no-use-before-define': ['error', { variables: false }],
      'react/prop-types': ['error', { ignore: ['navigation', 'navigation.navigate'] }],
    },
  }),
];
