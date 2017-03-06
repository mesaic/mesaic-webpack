module.exports = (override) => (webpackConfig) => {
  webpackConfig.devtool = override || 'eval';
};
