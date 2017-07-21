const ExtractSvgPlugin = require('../extract-svg-webpack-plugin');

module.exports = ({styleVariablesReplacementLoader}) => ({
  test: /\.sprite\.svg$/,
  use: ExtractSvgPlugin.extract({
    before: [
      {
        loader: styleVariablesReplacementLoader,
      },
    ],
  }),
});
