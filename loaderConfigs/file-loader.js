module.exports = () => ({
  loader: 'file-loader',
  options: {
    name: '[name]-[hash:6].[ext]',
  },
});
