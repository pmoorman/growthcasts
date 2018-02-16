import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'assets/js/core/app.js',
  output: {
    file: './assets/js/main.js',
    format: 'cjs'
  },
  plugins: [
    babel(),
    resolve(),
    commonjs()
  ]
};
