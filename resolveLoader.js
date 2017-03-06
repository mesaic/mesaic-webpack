const path = require('path');

module.exports = () => (webpackConfig) => {
  webpackConfig.resolveLoader = {
    root: [
      path.join(process.cwd(), 'node_modules/mesaic-webpack/node_modules'),
      path.join(process.cwd(), 'node_modules'),
    ],
  };
};
