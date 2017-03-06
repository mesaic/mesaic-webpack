const StringReplacePlugin = require('string-replace-webpack-plugin');
const autoprefixer = require('autoprefixer');

const createLessSVRLoader = require('./internal/createLessSVRLoader');

module.exports = ({styles}) => (webpackConfig) => {
  const lessSVRLoader = createLessSVRLoader({styles});
  const cssModulesOptions = '&localIdentName=[path][name]__[local]--[hash:base64:5]&sourceMap=true&importLoaders=2';

  const loader = {
    test: /\.less/,
    loader: `style-loader!css-loader?modules=true${cssModulesOptions}!postcss-loader!${lessSVRLoader}`,
  };

  webpackConfig.module.loaders.push(loader);
  webpackConfig.plugins.push(new StringReplacePlugin());
  webpackConfig.postcss = () => {
    return [
      autoprefixer,
    ];
  };
};
