module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: ['plugin:react/recommended', 'standard', 'standard-react'],
  plugins: ['react', 'react-hooks', 'jsdoc'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'space-before-function-paren': 'off',
    'jsdoc/no-undefined-types': 'error'
  }
}
