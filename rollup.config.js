import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import clear from 'rollup-plugin-clear';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const entry = 'src/index.ts';

export default {
  input: entry,
  output: [
    { dir: 'dist', format: 'cjs', entryFileNames: () => `[name].mjs` },
    { dir: 'dist', format: 'esm', entryFileNames: () => `[name].cjs` },
    { dir: 'dist', format: 'umd', name: pkg.name },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    json(),
    clear({ targets: ['dist'] }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
    }),
    terser(),
  ],
  external: ['react', 'stories.d.ts'],
};
