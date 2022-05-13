module.exports = {
  globals: {
    wx: true,
    definePageConfig: true,
    getCurrentPages: true,
    WechatMiniprogram: true,
  },
  extends: ['taro/react', 'airbnb'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/no-commonjs': 0,
    'import/extensions': 0,
    'react/state-in-constructor': 0,
    'func-names': ['error', 'never'],
    'react/jsx-props-no-spreading': 0,
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'comma',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'import/no-extraneous-dependencies': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
  },
}
