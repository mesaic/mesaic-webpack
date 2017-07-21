const babelLoaderConfig = require('../loaderConfigs/babel-loader');
const entrypointLoaderConfig = require('../loaderConfigs/entrypoint-loader');

module.exports = ({production, server}) => ({
  test: /\.entry\.js$/,
  exclude: /node_modules/,
  use: [
    entrypointLoaderConfig(),
    babelLoaderConfig({production, server}),
  ],
});
