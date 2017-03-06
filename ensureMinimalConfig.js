const MINIMAL_CONFIG = {
  module: {
    loaders: [],
  },
  resolve: {
    extensions: [''],
  },
  output: {},
  plugins: [],
};

module.exports = () => (webpackConfig) => {
  if (!webpackConfig || Object.keys(webpackConfig).length === 0) {
    Object.assign(webpackConfig, MINIMAL_CONFIG);
  }
};
