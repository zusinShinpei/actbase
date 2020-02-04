import * as p from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

const isProduction = process.env.NODE_ENV === 'production';

const copyright = `/*
 * Copyright ${new Date().getFullYear()}, Trabricks LLC.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
`;

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const plugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  resolve({ extensions }),
  babel({
    exclude: 'node_modules/**',
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            esmodules: true,
          },
          modules: false,
        },
      ],
      ['@babel/preset-react', { modules: false }],
    ],
  }),
  commonjs({
    sourcemap: true,
  }),
  isProduction &&
    uglify({
      warnings: false,
    }),
].filter(Boolean);

export default [
  {
    input: p.resolve('src/index.native.js'),
    output: {
      file: p.resolve(`dist/actbase.native.js`),
      format: 'cjs',
      name: 'Actbase',
      banner: copyright,
      exports: 'named',
      globals: {
        react: 'React',
      },
    },
    external: ['react'],
    plugins,
  },
];