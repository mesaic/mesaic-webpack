module.exports = () => (webpackConfig) => {
  webpackConfig.module.rules.push({
    test: /\.md?$/,
    loaders: ['raw-loader'],
  });
};
