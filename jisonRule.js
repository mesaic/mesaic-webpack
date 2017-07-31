module.exports = ({hot}) => (webpackConfig) => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        plugins: 'transform-remove-strict-mode',
      },
    },
    {
      loader: 'another-jison-loader',
    },
  ];

  if (!hot) {
    loaders.unshift({loader: 'react-hot-loader'});
  }

  webpackConfig.module.rules.push({
    test: /\.jison$/,
    use: loaders,
  });
};
