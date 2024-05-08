module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    'import/extensions': ['error', 'never'],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'eol-last': ['error', 'always'],
    'max-len': ['error', {
      code: 250, ignoreStrings: true, ignoreComments: true, ignorePattern: '^path '
    }],
    'comma-dangle': ['error', 'never'],
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function'
    }],
    '@typescript-eslint/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': [1,
      {
        extensions: [
          '.tsx'
        ]
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: 'React'
      }
    ]
  }
};
// "env": {
//       "browser": true,
//       "es2021": true,
//       "node": true,
//       "jest/globals": true
//   },
//   "extends": [
//       "eslint:recommended",
//       // "airbnb",
//       // "airbnb/hooks",
//       // "plugin:react/recommended",
//       // "plugin:react/jsx-runtime",
//       // "plugin:jsx-a11y/recommended",
//       // "plugin:jest/recommended",
//       "plugin:@typescript-eslint/eslint-recommended",
//       "plugin:@typescript-eslint/recommended",
//       "@stylistic"
//   ],
//   "parserOptions": {
//       "ecmaFeatures": {
//           "jsx": true
//       },
//       "ecmaVersion": "latest",
//       "sourceType": "module"
//   },
//   "parser": "@typescript-eslint/parser",
//   "plugins": [
//       // "react",
//       // "babel",
//       // "jest",
//       "@typescript-eslint"
//   ],
//   "rules": {
//     "jsx-a11y/label-has-associated-control": ["error", { "assert": "either" } ],
//     "@stylistic/eol-last": ["error", "always"],
//     "max-len": ["error", { "code": 250, "ignoreStrings": true, "ignoreComments": true, "ignorePattern": "^path " }],
//     "comma-dangle": ["error", "never"],
//     "@typescript-eslint/comma-dangle": ["error", "never"],
//     "react/function-component-definition": [2, {
//       "namedComponents": "arrow-function",
//       "unnamedComponents": "arrow-function"
//     }],
//     "@typescript-eslint/jsx-one-expression-per-line":  "off"
//   }
// }
