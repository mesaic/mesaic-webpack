module.exports = (additionalExtensions) => (webpackConfig) => {
  webpackConfig.resolve.extensions = ['.js', '.json', '.css', '.less', '.less.vars', '.svg'].concat(
    additionalExtensions || [],
  );
};
