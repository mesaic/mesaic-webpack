const babelLoaderConfig = require('./internal/babelLoader');

module.exports = ({
  compact,
  exclude = /node_modules(?!\/@mesaic)/,
  hot = false,
}) => (webpackConfig) => {
  const babelLoader = babelLoaderConfig({compact});

  webpackConfig.module.rules.push({
    test: /\.js$/,
    exclude,
    use: hot ? [{loader: 'react-hot-loader'}, babelLoader] : [babelLoader],
  });
};
