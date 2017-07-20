module.exports = ({production, server}) => (webpackConfig) => {
  const babel = `babel-loader?cacheDirectory${!production || server ? '&compact=false' : ''}`;

  const fileLoaderOptions = 'name=[name]-[hash:6].[ext]';

  webpackConfig.module.rules.push({
    test: /\.entry\.js$/,
    exclude: /node_modules/,
    loaders: [`entrypoint-loader.js?${fileLoaderOptions}`, babel],
  });
};
