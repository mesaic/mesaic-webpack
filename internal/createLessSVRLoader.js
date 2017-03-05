const createSVRLoader = require('./createSVRLoader');
// const createSVRLoader = require('react-atomic/utils/createStyleVariablesReplacementLoader');

module.exports = ({styles, StringReplacePlugin}) => {
	const svrLoader = createSVRLoader({styles, colors: styles.colors, StringReplacePlugin});
	return `less-loader?importLoader=${svrLoader}!${svrLoader}`;
	// return `less-loader`;
}

