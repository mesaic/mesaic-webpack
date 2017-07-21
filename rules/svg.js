const urlLoaderConfig = require('../loaderConfigs/url-loader');

module.exports = ({styleVariablesReplacementLoader}) => ({
  test: /\.svg$/,
  exclude: /\.sprite\.svg$/,
  use: [
    urlLoaderConfig(),
    styleVariablesReplacementLoader,
  ],
});
