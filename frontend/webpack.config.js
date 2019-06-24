const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // watch: true,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: [ { loader: 'awesome-typescript-loader', options: {} } ], exclude: /node_modules/ },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.html$/, use: [{ loader: 'html-loader', options: { minimize: true } }] },
      { test: /\.(css)$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
}
