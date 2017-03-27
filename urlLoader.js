const querystring = require('querystring');

const fileLoaderQuery = require('./fileLoader').query;
const createSVRLoader = require('./internal/createSVRLoader');

module.exports = (styles) => (webpackConfig) => {
  const svrLoader = createSVRLoader({styles, colors: styles.colors});

  webpackConfig.module.loaders.push({
    test: /\.svg$/,
    loader: `url-loader?limit=10000&${querystring.stringify(fileLoaderQuery)}!${svrLoader}`,
  });
};
