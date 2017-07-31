/* eslint-disable global-require */
module.exports = {
  // Required: Load loaders from this projects node_modules
  ensureMinimalConfig: require('./ensureMinimalConfig'),
  resolveLoader: require('./resolveLoader'),

  extensions: require('./extensions'),
  devtool: require('./devtool'),

  // Rules
  babelRule: require('./babelRule'),
  entrypointRule: require('./entrypointRule'),
  fileRule: require('./fileRule'),
  jisonRule: require('./jisonRule'),
  rawRule: require('./rawRule'),
  styleRules: require('./styleRules'),
  svgRules: require('./svgRules'),
};
