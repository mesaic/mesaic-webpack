/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, flowtype/require-valid-file-annotation */
/* eslint-disable func-names */
const NS = require('./constants').NS;

module.exports = function(content) {
  if (this.cacheable) {
    this.cacheable();
  }

  if (this[NS] === undefined) {
    throw new Error('"extract-svg-webpack-plugin" loader is used without the corresponding plugin.');
  } else {
    const {
      id,
      content: svgContent,
    } = this.inputValue;

    this[NS](id, svgContent);
  }

  return content;
};
