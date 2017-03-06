module.exports = (additionalExtensions) => (webpackConfig) => {
  webpackConfig.resolve.extensions = ['', '.js', '.svg', '.css', '.less', '.less.module', '.json'].concat(additionalExtensions || []);
};
