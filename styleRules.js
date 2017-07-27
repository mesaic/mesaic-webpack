const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StringReplacePlugin = require('string-replace-webpack-plugin');

module.exports = ({cssFileName, production, replacements, publicPath = ''}) => (webpackConfig) => {
  if (!Array.isArray(replacements)) {
    throw new Error('Needs a `replacements` array.');
  }

  const cssLoader = {
    loader: 'css-loader',
    options: {
      modules: true,
      importLoaders: 1,
      localIdentName: production ? '[hash:base64]' : '[local]__[hash:base32:5]',
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
    },
  };

  const lessLoader = {
    loader: 'less-loader',
    sourceMap: !production,
  };

  const stringReplaceLoader = StringReplacePlugin.replace({
    replacements,
  });

  const wrapExtractTextStyle = (use) =>
    ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use,
      publicPath,
    });

  webpackConfig.module.rules.push({
    test: /\.less$/,
    use: wrapExtractTextStyle([cssLoader, postCSSLoader, lessLoader, stringReplaceLoader]),
  });

  webpackConfig.module.rules.push({
    test: /\.less\.vars$/,
    issuer: /\.less$/,
    use: [stringReplaceLoader],
  });

  webpackConfig.module.rules.push({
    test: /\.css$/,
    use: wrapExtractTextStyle([cssLoader]),
  });

  webpackConfig.plugins.push(new StringReplacePlugin());
  webpackConfig.plugins.push(new ExtractTextPlugin({
    filename: cssFileName || '[name]-[contenthash].css',
    allChunks: true,
    disable: !production,
  }));
};
