const StringReplacePlugin = require('string-replace-webpack-plugin');

const ExtractSvgPlugin = require('./extract-svg-webpack-plugin');

module.exports = ({replacements, iconReplacer, plugin = true, inject = false}) => (webpackConfig) => {
  const stringReplaceLoader = StringReplacePlugin.replace({
    replacements,
  });

  webpackConfig.module.rules.push({
    test: /\.sprite\.svg$/,
    use: ExtractSvgPlugin.extract({
      inject,
      before: [
        {
          loader: stringReplaceLoader,
        },
      ],
    }),
  });

  webpackConfig.module.rules.push({
    test: /\.svg$/,
    exclude: /\.sprite\.svg$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name]-[hash:6].[ext]',
        },
      },
      stringReplaceLoader,
    ],
  });

  if (plugin) {
    webpackConfig.plugins.push(new ExtractSvgPlugin({iconReplacer}));
  }
};
