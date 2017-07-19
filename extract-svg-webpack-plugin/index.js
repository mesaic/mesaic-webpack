/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, flowtype/require-valid-file-annotation */
const _forEach = require('lodash/forEach');
const SvgSpriter = require('svg-sprite');
const File = require('vinyl');
const ConcatSource = require('webpack-sources').ConcatSource;

const NS = require('./constants').NS;

function isString(a) {
  return typeof a === 'string';
}

function mergeOptions(a, b) {
  if (!b) {
    return a;
  }

  Object.keys(b).forEach((key) => {
    a[key] = b[key];
  });
  return a;
}

function ExtractSvgPlugin(options) {
  this.options = {};
  mergeOptions(this.options, options);
}
module.exports = ExtractSvgPlugin;


ExtractSvgPlugin.prototype.extract = function extract(options) {
  let before = options.before;

  if (isString(before)) {
    before = before.split('!');
  } else if (!Array.isArray(before)) {
    before = [before];
  }

  return [
    {
      loader: 'mesaic-svg-plugin/injectLoader',
    },
    {
      loader: 'mesaic-svg-plugin/loader',
    },
    ...before,
  ];
};

ExtractSvgPlugin.extract = ExtractSvgPlugin.prototype.extract.bind(ExtractSvgPlugin);

ExtractSvgPlugin.prototype.apply = function apply(compiler) {
  compiler.plugin('this-compilation', (compilation) => {
    const originalSvgs = {};

    compilation.plugin('normal-module-loader', (loaderContext) => {
      loaderContext[NS] = {
        add: (id, content) => {
          loaderContext[NS].id = id;
          loaderContext[NS].content = content;

          originalSvgs[id] = content;
        },
        id: undefined,
        content: undefined,
      };
    });

    compilation.plugin('additional-assets', (callback) => {
      const spriter = new SvgSpriter({
        mode: {
          symbol: {
            inline: true,
            sprite: 'sprite',
            bust: true,
          },
        },
      });

      (
        typeof this.options.iconReplacer === 'function'
          ? this.options.iconReplacer(originalSvgs)
          : Promise.resolve(originalSvgs)
      )
      .then((svgs) => {
        _forEach(svgs, (content, id) => {
          spriter.add(new File({
            path: `/tmp/${id}`,
            base: '/tmp',
            contents: Buffer.from(content, 'utf-8'),
          }));
        });

        spriter.compile((err, res, data) => {
          if (err) {
            callback(err);
            return;
          }

          const source = new ConcatSource();
          source.add(res.symbol.sprite.contents.toString('utf-8'));

          const fileName = data.symbol.sprite;
          compilation.assets[fileName] = source;

          compilation.chunks.forEach((chunk) => {
            if (chunk.hasRuntime()) {
              chunk.files.push(fileName);
            }
          });

          callback();
        });
      })
      .catch((err) => {
        callback(err);
      });
    });
  });
};
