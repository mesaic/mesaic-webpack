module.exports = () => ({
  loader: 'entrypoint-loader',
  options: {
    name: '[name]-[hash:6].[ext]',
  },
});
