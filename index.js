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

  webpack: require('webpack'),
  ExtractTextPlugin: require('extract-text-webpack-plugin'),
  StringReplacePlugin: require('string-replace-webpack-plugin'),
  ExtractSvgPlugin: require('./extract-svg-webpack-plugin'),

  // Rules (were loaders)
  babelRule: require('./babelRule'),
};
