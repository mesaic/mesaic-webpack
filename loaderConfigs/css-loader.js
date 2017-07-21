module.exports = ({production, modules}) => {
  const options = {
    modules,
    importLoaders: 2,
  };

  if (!production) {
    options.localIdentName = '[local]_[hash:base36:5]';
  }

  return {
    loader: 'css-loader',
    options,
  };
};
