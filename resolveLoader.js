const path = require('path');

module.exports = () => (webpackConfig) => {
  webpackConfig.resolveLoader = {
    modules: [
      path.join(process.cwd(), 'node_modules/mesaic-webpack/node_modules'),
      path.join(process.cwd(), 'node_modules/mesaic-webpack'),
      path.join(process.cwd(), 'node_modules'),
    ],
  };
};
