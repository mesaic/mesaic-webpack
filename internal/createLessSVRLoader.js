const createSVRLoader = require('./createSVRLoader');

module.exports = ({styles, StringReplacePlugin}) => {
  const svrLoader = createSVRLoader({styles, colors: styles.colors, StringReplacePlugin});
  return `less-loader?importLoader=${svrLoader}!${svrLoader}`;
}

