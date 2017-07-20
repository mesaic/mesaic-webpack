module.exports = () => (webpackConfig) => {
  const fileLoaderOptions = 'name=[name]-[hash:6].[ext]';

  webpackConfig.module.rules.push({
    test: /\.(gif|png|jpe?g|ico)$/,
    loader: `file-loader?${fileLoaderOptions}`,
  });
};
