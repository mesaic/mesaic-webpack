const StringReplacePlugin = require('string-replace-webpack-plugin');

const ExtractSvgPlugin = require('./extract-svg-webpack-plugin');

module.exports = ({replacements}) => (webpackConfig) => {
  const styleVariablesReplacementLoader = StringReplacePlugin.replace({replacements});

  webpackConfig.module.rules.push({
    test: /\.sprite\.svg$/,
    use: ExtractSvgPlugin.extract({
      before: [
        {
          loader: styleVariablesReplacementLoader,
        },
      ],
    }),
  });
};
