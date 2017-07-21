module.exports = ({production, server}) => ({
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    compact: !production || server ? 'false' : 'auto',
    babelrc: false,
    presets: ['@mesaic/babel-preset-mesaic'],
  },
});
