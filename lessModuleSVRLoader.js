const StringReplacePlugin = require('string-replace-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const createLessSVRLoader = require('./internal/createLessSVRLoader');

module.exports = ({replacements, production, cssFileName}) => (webpackConfig) => {
  const lessSVRLoader = createLessSVRLoader({replacements});
  const cssModulesOptions = '&localIdentName=[local]__[hash:base32:5]&sourceMap=true&importLoaders=2';
  const wrapExtractTextStyle = (loaders) => ExtractTextPlugin.extract('style-loader', loaders, {publicPath: ''});

  const loader = {
    test: /\.less/,
    loader: wrapExtractTextStyle(`css-loader?modules=true${cssModulesOptions}!postcss-loader!${lessSVRLoader}`),
  };

  webpackConfig.module.loaders.push(loader);
  webpackConfig.plugins.push(new StringReplacePlugin());
  webpackConfig.plugins.push(new ExtractTextPlugin(
    cssFileName || '[name]-[contenthash].css',
    {allChunks: true, disable: !production} // eslint-disable-line comma-dangle
  ));
  webpackConfig.postcss = () => {
    return [
      autoprefixer,
    ];
  };
};
