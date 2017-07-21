const cssLoaderConfig = require('../loaderConfigs/css-loader');
const lessLoaderConfig = require('../loaderConfigs/less-loader');
const postCSSLoaderConfig = require('../loaderConfigs/postcss-loader');
const wrapExtractTextStyle = require('../utils/wrapExtractTextStyle');

module.exports = ({production, styleVariablesReplacementLoader, modules = true}) => ({
  test: modules ? /\.(less|less\.module)$/ : /\.less\.vanilla$/,
  exclude: /node_modules\/bootstrap/,
  use: wrapExtractTextStyle([
    cssLoaderConfig({production, modules}),
    postCSSLoaderConfig(),
    lessLoaderConfig({importLoader: styleVariablesReplacementLoader}),
    styleVariablesReplacementLoader,
  ]),
});
