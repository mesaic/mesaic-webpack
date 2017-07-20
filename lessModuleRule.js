const StringReplacePlugin = require('string-replace-webpack-plugin');

const postCSSLoader = require('./postCSSLoader');
const wrapExtractTextStyle = require('./wrapExtractTextStyle');

module.exports = ({production, replacements}) => (webpackConfig) => {
  const styleVariablesReplacementLoader = StringReplacePlugin.replace({replacements});

  const lessLoader = `less-loader?importLoader=${styleVariablesReplacementLoader}!${styleVariablesReplacementLoader}`;

  const options = {
    modules: true,
    // sourceMap: true,
    importLoaders: 2,
  };

  if (!production) {
    options.localIdentName = '[local]_[hash:base36:5]';
  }

  webpackConfig.module.rules.push({
    test: /\.(less|less\.module)$/,
    exclude: /node_modules\/bootstrap/,
    loader: wrapExtractTextStyle([
      {
        loader: 'css-loader',
        options,
      },
      postCSSLoader,
      {
        loader: lessLoader,
      },
    ]),
  });
};
