module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-refresh', '@typescript-eslint', 'prettier'],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/require-default-props': 'warn',
    'consistent-return': 'off',
    "jsx-a11y/label-has-associated-control": [
      2, {
        "labelAttributes": ["htmlFor"]
      }
    ],
    "react/jsx-no-useless-fragment": 'off',
    "react/no-array-index-key": 'off',
    "import/order" : "off",
    "react/jsx-props-no-spreading": 'off',
    "default-case": 'off',
    "jsx-a11y/click-events-have-key-events": 'off',
    "jsx-a11y/no-static-element-interactions": 'off',
    "no-plusplus": 'off',
    "react/jsx-no-bind": 'off',
    "@typescript-eslint/no-use-before-define": 'off',
    "react/no-unstable-nested-components": 'off',
    "jsx-a11y/no-noninteractive-element-interactions": 'off',
    "jsx-a11y/label-has-associated-control": 'off',
    "no-param-reassign": 'off'
  },
};
