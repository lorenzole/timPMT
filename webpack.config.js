var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
    publicPath:'/'
  },
  devServer:{
      historyApiFallback:true
  },
  plugins: [new HtmlWebpackPlugin()]
};