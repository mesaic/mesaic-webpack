module.exports = ({compact = 'auto'}) => ({
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    compact,
    babelrc: false,
    presets: ['@mesaic/babel-preset-mesaic'],
  },
});
