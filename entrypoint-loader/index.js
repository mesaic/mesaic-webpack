/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, flowtype/require-valid-file-annotation */
const SingleEntryPlugin = require('webpack/lib/SingleEntryPlugin');
const WebWorkerTemplatePlugin = require('webpack/lib/webworker/WebWorkerTemplatePlugin');
const loaderUtils = require('loader-utils');

module.exports = function entrypointLoader() {};

module.exports.pitch = function pitchEntrypointLoader(request) {
  if (!this.webpack) {
    throw new Error('Only usable with webpack');
  }

  const callback = this.async();

  const options = loaderUtils.getOptions(this);
  const filename = loaderUtils.interpolateName(this, options.name || '[hash].worker.js', {
    context: options.context,
    regExp: options.regExp,
  });

  const outputOptions = {
    filename,
    chunkFilename: `[id].${filename}`,
    namedChunkFilename: null,
  };

  if (this.options && this.options.worker && this.options.worker.output) {
    let name;
    for (name in this.options.worker.output) {
      outputOptions[name] = this.options.worker.output[name];
    }
  }

  const workerCompiler = this._compilation.createChildCompiler('worker', outputOptions);
  workerCompiler.apply(new WebWorkerTemplatePlugin(outputOptions));
  workerCompiler.apply(new SingleEntryPlugin(this.context, '!!' + request, 'main'));

  if (this.options && this.options.worker && this.options.worker.plugins) {
    this.options.worker.plugins.forEach((plugin) => {
      workerCompiler.apply(plugin);
    });
  }

  const subCache = `subcache ${__dirname} ${request}`;
  workerCompiler.plugin('compilation', (compilation) => {
    if (compilation.cache) {
      if (!compilation.cache[subCache]) {
        compilation.cache[subCache] = {};
      }
      compilation.cache = compilation.cache[subCache];
    }
  });

  workerCompiler.runAsChild((err, entries) => {
    if (err) {
      return callback(err);
    }

    if (entries[0]) {
      const workerFile = entries[0].files[0];
      return callback(null, `module.exports = ${JSON.stringify(workerFile)};`);
    } else {
      return callback(null, null);
    }
  });
};
