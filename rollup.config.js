import babel from 'rollup-plugin-babel';

export default {
  input: 'assets/js/core/app.js',
  output: {
    file: './assets/js/main.js',
    format: 'cjs'
  },
  plugins: [ babel() ]
};
