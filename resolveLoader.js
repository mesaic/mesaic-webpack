const path = require('path');

module.exports = () => (webpackConfig) => {
  webpackConfig.resolveLoader = {
    modules: [
      path.join(process.cwd(), 'node_modules/@mesaic/mesaic-webpack/node_modules'),
      path.join(process.cwd(), 'node_modules/@mesaic/mesaic-webpack'),
      path.join(process.cwd(), 'node_modules'),
    ],
  };
};
