const StringReplacePlugin = require('string-replace-webpack-plugin');

module.exports = ({replacements}) => (webpackConfig) => {
  const fileLoaderOptions = 'name=[name]-[hash:6].[ext]';

  const styleVariablesReplacementLoader = StringReplacePlugin.replace({replacements});

  webpackConfig.module.rules.push({
    test: /\.svg$/,
    exclude: /\.sprite\.svg$/,
    loader: `url-loader?limit=10000&${fileLoaderOptions}!${styleVariablesReplacementLoader}`,
  });
};
