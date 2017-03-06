module.exports = () => (webpackConfig) => {
  webpackConfig.module.loaders.push({
    test: /\.js$/,
    exclude: /node_modules(?!\/react-atomic)/,
    loader: 'babel-loader',
    query: {
      presets: ['mesaic'],
    },
  });
};
