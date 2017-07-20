const StringReplacePlugin = require('string-replace-webpack-plugin');

const postCSSLoader = require('./postCSSLoader');
const wrapExtractTextStyle = require('./wrapExtractTextStyle');

module.exports = ({replacements}) => (webpackConfig) => {
  const styleVariablesReplacementLoader = StringReplacePlugin.replace({replacements});

  const lessLoader = `less-loader?importLoader=${styleVariablesReplacementLoader}!${styleVariablesReplacementLoader}`;

  webpackConfig.module.rules.push({
    test: /\.less\.vanilla$/,
    use: wrapExtractTextStyle(['css-loader', postCSSLoader, lessLoader]),
  });
};
