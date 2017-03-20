const StringReplacePlugin = require('string-replace-webpack-plugin');

module.exports = ({styles, colors, replacements}) => {
  return StringReplacePlugin.replace({
    replacements: replacements({styles, colors}),
  });
};
