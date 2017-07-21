const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = ({disable}) =>
  new ExtractTextPlugin({
    filename: '[name]-[contenthash].css',
    allChunks: true,
    disable,
  });
