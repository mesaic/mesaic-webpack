module.exports = ({production, server}) => (webpackConfig) => {
  const babel = {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      compact: !production || server ? 'false' : 'auto',
    },
  };

  webpackConfig.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules(?!\/@mesaic)|(\.entry\.js?$)/,
    use: server || production ? [babel] : ['react-hot-loader', babel],
  });
};
