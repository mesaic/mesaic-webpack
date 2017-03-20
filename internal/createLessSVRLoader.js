const createSVRLoader = require('./createSVRLoader');

module.exports = ({replacements}) => {
  const svrLoader = createSVRLoader({replacements});
  return `less-loader?importLoader=${svrLoader}!${svrLoader}`;
};

