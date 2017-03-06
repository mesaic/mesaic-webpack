module.exports = () => (webpackConfig) => {
  webpackConfig.module.loaders.push({
    test: /\.woff2?$/,
    loader: 'file-loader',
    query: {
      name: '[name]-[hash:6].[ext]',
    },
  });
};
