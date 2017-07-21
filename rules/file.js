const fileLoaderConfig = require('../loaderConfigs/file-loader');

module.exports = () => ({
  test: /\.(?:eot|ttf|woff2?|gif|png|jpe?g|ico)$/,
  use: [
    fileLoaderConfig(),
  ],
});
