/* eslint-disable global-require */
module.exports = {
  // Required: Load loaders from this projects node_modules
  ensureMinimalConfig: require('./ensureMinimalConfig'),
  resolveLoader: require('./resolveLoader'),

  extensions: require('./extensions'),
  devtool: require('./devtool'),

  // Loaders
  lessModuleSVRLoader: require('./lessModuleSVRLoader'),
  babelLoader: require('./babelLoader'),
  fileLoader: require('./fileLoader'),
  jsonLoader: require('./jsonLoader'),
  urlLoader: require('./urlLoader'),
};
