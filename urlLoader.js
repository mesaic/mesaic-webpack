const querystring = require('querystring');

const fileLoaderQuery = require('./fileLoader').query;
const createSVRLoader = require('./internal/createSVRLoader');

module.exports = ({replacements}) => (webpackConfig) => {
  const svrLoader = createSVRLoader({replacements});

  webpackConfig.module.loaders.push({
    test: /\.svg$/,
    loader: `url-loader?limit=10000&${querystring.stringify(fileLoaderQuery)}!${svrLoader}`,
  });
};
