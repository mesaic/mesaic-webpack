/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, flowtype/require-valid-file-annotation */
const loaderUtils = require('loader-utils');

const NS = require('./constants').NS;

module.exports = function svgLoader(content) {
  if (this.cacheable) {
    this.cacheable();
  }

  // use the hash of the svg's content
  const id = loaderUtils.interpolateName(this, '[name]', {
    content,
  }).replace(/\.sprite$/, '');

  // Plugin was installed, send the data
  if (this[NS] && typeof this[NS].add === 'function') {
    this[NS].add(id, content);
  }

  return `module.exports = '#${id}'`;
};
