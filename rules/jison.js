module.exports = ({production}) => {
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

  if (!production) {
    loaders.unshift({loader: 'react-hot-loader'});
  }

  return {
    test: /\.jison$/,
    use: loaders,
  };
};
