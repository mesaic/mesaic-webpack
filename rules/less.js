const postCSSLoaderConfig = require('../loaderConfigs/postcss-loader');
const wrapExtractTextStyle = require('../utils/wrapExtractTextStyle');

module.exports = ({production, styleVariablesReplacementLoader}) => {
  const cssLoaderOptions = {
    modules: true,
    importLoaders: 1,
  };

  if (!production) {
    cssLoaderOptions.localIdentName = '[local]_[hash:base36:5]';
  }

  return {
    test: /\.(?:less|less\.module)$/,
    use: wrapExtractTextStyle([
      {
        loader: 'css-loader',
        options: cssLoaderOptions,
      },
      postCSSLoaderConfig(),
      {
        loader: 'less-loader',
      },
      styleVariablesReplacementLoader,
    ]),
  };
};
