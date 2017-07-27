module.exports = () => (webpackConfig) => {
  webpackConfig.module.rules.push({
    test: /\.(?:eot|ttf|woff2?|gif|png|jpe?g|ico)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name]-[hash:6].[ext]',
        },
      },
    ],
  });
};
