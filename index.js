module.exports = {
  // parser: 'babel-eslint',
  // parserOptions: {
  //   ecmaVersion: 6,
  //   sourceType: 'module',
  // },
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],
    semi: [2, 'never'],
    'object-curly-spacing': [2, 'always'],
    'space-before-function-paren': ['error', 'always'],
    // to allow: if (false) return
    curly: [
      'error',
      'multi-line'
    ]
  },
  env: {
    'browser': true,
    'es6': true
  }
}
