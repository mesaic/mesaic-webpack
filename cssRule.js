const postCSSLoader = require('./postCSSLoader');
const wrapExtractTextStyle = require('./wrapExtractTextStyle');

module.exports = () => (webpackConfig) => {
  webpackConfig.module.rules.push({
    test: /\.css$/,
    use: wrapExtractTextStyle(['css-loader', postCSSLoader]),
  });
};
