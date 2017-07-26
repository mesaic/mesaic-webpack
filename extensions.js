module.exports = (additionalExtensions) => (webpackConfig) => {
  webpackConfig.resolve.extensions = ['.js', '.svg', '.css', '.less', '.less.vars', '.json'].concat(additionalExtensions || []);
};
