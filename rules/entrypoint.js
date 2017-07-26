const babelLoaderConfig = require('../loaderConfigs/babel-loader');

module.exports = ({production, server}) => ({
  test: /\.entry\.js$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'entrypoint-loader',
      options: {
        name: '[name]-[hash:6].[ext]',
      },
    },
    babelLoaderConfig({production, server}),
  ],
});
