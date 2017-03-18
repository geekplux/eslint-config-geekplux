module.exports = {
  // parser: 'babel-eslint',
  // parserOptions: {
  //   ecmaVersion: 6,
  //   sourceType: 'module',
  // },
  rules: {
    indent: [2, 2, {SwitchCase: 1}],
    semi: [2, 'never'],
    // to allow: if (false) return
    'curly': [
      'error',
      'multi-line',
    ],
  },
  env: {
    'browser': true,
    'es6': true,
  },
};
