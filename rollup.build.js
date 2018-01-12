import babel from 'rollup-plugin-babel'

export default {
  input: 'lib/indefinite.js',
  output: [
    {
      file: 'dist/indefinite.umd.js',
      format: 'umd',
      name: 'indefinite'
    },
    {
      file: 'dist/indefinite.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/indefinite.es.js',
      format: 'es'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: [
        [
          'babel-preset-env',
          {
            targets: {
              browsers: ['last 2 versions', 'ie >= 10']
            },
            modules: false
          }
        ]
      ],
      plugins: [
        'external-helpers'
      ]
    })
  ]
}
