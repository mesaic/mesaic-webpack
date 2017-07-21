module.exports = () => ({
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: '[name]-[hash:6].[ext]',
  },
});
