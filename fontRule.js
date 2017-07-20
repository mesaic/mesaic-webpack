module.exports = () => (webpackConfig) => {
  const fileLoaderOptions = 'name=[name]-[hash:6].[ext]';

  webpackConfig.module.rules.push({
    test: /\.(?:eot|ttf|woff2?)$/,
    loader: `file-loader?${fileLoaderOptions}`,
  });
};
