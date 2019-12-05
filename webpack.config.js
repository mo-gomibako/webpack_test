const { resolve } = require('path')

const outputPath = resolve(__dirname, 'dist')

module.exports = {
  entry: './src/utilities/main.js',
  output: {
    filename: 'main.js',
    path: outputPath
  },
  // devServer: {
  //   contentBase: outputPath
  // }
}