module.exports = () => (webpackConfig) => {
  webpackConfig.module.rules.push({
    test: /\.md?$/,
    use: [{loader: 'raw-loader'}],
  });
};
