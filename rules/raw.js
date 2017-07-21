module.exports = () => ({
  test: /\.md?$/,
  use: [{loader: 'raw-loader'}],
});
