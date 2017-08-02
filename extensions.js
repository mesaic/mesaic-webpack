/* eslint-disable */
module.exports = (additionalExtensions) => (webpackConfig) => {
  webpackConfig.resolve.extensions = (additionalExtensions || []).concat(['.js', '.json', '.css', '.less', '.less.vars', '.svg'])
};
