module.exports = () => (webpackConfig) => {
  webpackConfig.module.loaders.push({
    test: /\.json$/,
    loader: 'json-loader',
  });
};
