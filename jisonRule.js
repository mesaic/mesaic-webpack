module.exports = ({production}) => (webpackConfig) => {
  webpackConfig.module.rules.push({
    test: /\.jison$/,
    use: [
      ...(production ? [] : [{loader: 'react-hot-loader'}]),
      {
        loader: 'babel-loader',
        options: {
          plugins: 'transform-remove-strict-mode',
        },
      },
      {
        loader: 'another-jison-loader',
      },
    ],
  });
};
