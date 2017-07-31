const babelLoaderConfig = require('./internal/babelLoader');

module.exports = ({compact}) => (webpackConfig) => {
  webpackConfig.module.rules.push({
    test: /\.entry\.js$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'entrypoint-loader',
        options: {
          name: '[name]-[hash:6].[ext]',
        },
      },
      babelLoaderConfig({compact}),
    ],
  });
};
