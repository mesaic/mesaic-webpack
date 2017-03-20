const StringReplacePlugin = require('string-replace-webpack-plugin');

module.exports = ({replacements}) => {
  return StringReplacePlugin.replace({
    replacements,
  });
};
