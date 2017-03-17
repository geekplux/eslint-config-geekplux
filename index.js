module.exports = {
  // parser: 'babel-eslint',
  // parserOptions: {
  //   ecmaVersion: 6,
  //   sourceType: 'module',
  // },
  rules: {
    semi: 2,
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
