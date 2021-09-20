const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    index: {
      import: './src/main.js',
      dependOn: 'a'
    },
    orther: {
      import: './src/orther.js',
      dependOn: 'a'
    },
    a: './src/a.js'
  },
  output: {
    filename: 'js/[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'bundle'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './bundle'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: './public/index.html',
      title: '使用 webpack-dev-server'
    })
  ]
}
