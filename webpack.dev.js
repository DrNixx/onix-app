const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
        title: 'Production'
    })
  ],

  devServer: {
    contentBase: './dist'
  }
});