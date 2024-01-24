const path = require('path')

module.exports = {
  entry: './src/App.tsx',
  devtool: 'sourcemaps',
  cache: true,
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
