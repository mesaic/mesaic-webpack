const createSVRLoader = require('./createSVRLoader');

module.exports = ({styles}) => {
  const svrLoader = createSVRLoader({styles, colors: styles.colors});
  return `less-loader?importLoader=${svrLoader}!${svrLoader}`;
};

