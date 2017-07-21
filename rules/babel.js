const babelLoaderConfig = require('../loaderConfigs/babel-loader');

module.exports = ({production, server}) => {
  const babelLoader = babelLoaderConfig({production, server});

  return {
    test: /\.js$/,
    exclude: /node_modules(?!\/@mesaic)|(\.entry\.js?$)/,
    use: server || production ? [babelLoader] : [{loader: 'react-hot-loader'}, babelLoader],
  };
};
