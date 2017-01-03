const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    loaders : [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, exclude: /node_modules/, loader: 'css-loader' },
      { test: /\.hbs$/, exclude: /node_modules/, loader: 'handlebars-loader'}
    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }
}
