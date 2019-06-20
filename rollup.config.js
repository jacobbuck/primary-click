import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    exports: 'named',
    file: 'lib/index.js',
    format: 'cjs',
  },
  plugins: [babel()],
};
