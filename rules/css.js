const postCSSLoaderConfig = require('../loaderConfigs/postcss-loader');
const wrapExtractTextStyle = require('../utils/wrapExtractTextStyle');

module.exports = () => ({
  test: /\.css$/,
  use: wrapExtractTextStyle([{loader: 'css-loader'}, postCSSLoaderConfig()]),
});
