module.exports = ({production, server}) => (webpackConfig) => {
  const babel = `babel-loader?cacheDirectory${!production || server ? '&compact=false' : ''}`;

  webpackConfig.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules(?!\/@mesaic)|(\.entry\.js?$)/,
    loaders: server || production ? [babel] : ['react-hot-loader', babel],
  });

  // webpackConfig.module.rules.push({
  //   test: /\.js$/,
  //   exclude: /node_modules(?!\/react-atomic)/,
  //   loader: 'babel-loader',
  //   query: {
  //     presets: ['mesaic'],
  //   },
  // });
};
