const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StringReplacePlugin = require('string-replace-webpack-plugin');

module.exports = ({
  cssFileName,
  extract = false,
  production,
  publicPath = '',
  replacements,
}) => (webpackConfig) => {
  if (!Array.isArray(replacements)) {
    throw new Error('Needs a `replacements` array.');
  }

  const cssModuleLoader = {
    loader: 'css-loader',
    options: {
      modules: true,
      importLoaders: 1,
      localIdentName: production ? '[hash:base64]' : '[local]__[hash:base32:5]',
      sourceMap: !production,
    },
  };

  const cssRawLoader = {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      sourceMap: !production,
    },
  };

  const postCSSLoader = {
    loader: 'postcss-loader',
    options: {
      plugins: () => [
        autoprefixer({
          browsers: ['> 5%', 'last 3 iOS versions', 'last 2 versions'],
        }),
      ],
      sourceMap: !production,
    },
  };

  const lessLoader = {
    loader: 'less-loader',
    options: {
      sourceMap: !production,
    },
  };

  const stringReplaceLoader = StringReplacePlugin.replace({
    replacements,
  });

  const wrapExtractTextStyle = (use) =>
    ExtractTextPlugin.extract({
      fallback: 'style-loader',
      publicPath,
      use,
    });

  webpackConfig.module.rules.push({
    test: /\.less$/,
    use: wrapExtractTextStyle([cssModuleLoader, postCSSLoader, lessLoader, stringReplaceLoader]),
  });

  webpackConfig.module.rules.push({
    test: /\.less\.vars$/,
    issuer: /\.less$/,
    use: [stringReplaceLoader],
  });

  webpackConfig.module.rules.push({
    test: /\.less\.raw$/,
    use: wrapExtractTextStyle([cssRawLoader, postCSSLoader, lessLoader]),
  });

  webpackConfig.module.rules.push({
    test: /\.css$/,
    use: wrapExtractTextStyle([cssRawLoader, postCSSLoader]),
  });

  webpackConfig.plugins.push(new StringReplacePlugin());
  webpackConfig.plugins.push(new ExtractTextPlugin({
    filename: cssFileName || '[name]-[contenthash].css',
    allChunks: true,
    disable: !extract,
  }));
};
