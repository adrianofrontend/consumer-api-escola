import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
    { files: ['**/*.{js,mjs,cjs,jsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
];

module.exports = {
    env: {
        browser: true,
        es2018: true,
        node: true, // Adiciona o ambiente Node.js
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'prettier/react',
        'eslint:recommended',
        'plugin:prettier/recommended',
    ],

    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        module: 'readonly', // Define 'module' como global
    },

    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react', 'prettier', 'react-hooks'],

    rules: {
        'prettier/prettier': ['error'],
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx'] },
        ],
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true },
        ],
        'import/prefer-default-export': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-as-default': 'off',
        'import/no-dynamic-require': 'off',
        'import/no-unresolved': 'off',
        'import/no-named-as-default-import': 'off',
        'import/no-commonjs': 'off',
        'import/no-default-export': 'off',
    },
};
