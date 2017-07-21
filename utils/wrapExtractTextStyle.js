const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (use) => ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use,
  publicPath: '',
});
