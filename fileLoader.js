const query = {
  name: '[name]-[hash:6].[ext]',
};

module.exports = () => (webpackConfig) => {
  webpackConfig.module.loaders.push({
    test: /\.woff2?$/,
    loader: 'file-loader',
    query,
  });
};

module.exports.query = query;
