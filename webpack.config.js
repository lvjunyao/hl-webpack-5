const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    index: './src/main.js',
    print: './src/print.js'
  },
  output: {
    filename: 'js/[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'bundle'),
    clean: true,
  },
  devtool: 'inline-source-map',
  module: {
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: './public/index.html',
      title: '使用 watch mode(观察模式)'
    })
  ]
}
