/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, flowtype/require-valid-file-annotation */
const SvgSpriter = require('svg-sprite');
const File = require('vinyl');

const NS = require('./constants').NS;

module.exports = function svgInjectLoader(content) {
  if (this.cacheable) {
    this.cacheable();
  }

  if (!this[NS]) {
    return content;
  }

  const callback = this.async();

  const {
    id,
    content: svg,
  } = this[NS];

  const spriter = new SvgSpriter({
    mode: {
      symbol: {
        inline: true,
        sprite: 'sprite',
      },
    },
  });

  spriter.add(new File({
    path: `/tmp/${id}`,
    base: '/tmp',
    contents: Buffer.from(svg, 'utf-8'),
  }));

  spriter.compile((err, res) => {
    if (err) {
      callback(err);
      return;
    }

    const sprite = res.symbol.sprite.contents.toString('utf-8');

    callback(null, [
      `(function() {
        var div = document.createElement('div');
        div.style.display = 'none';
        div.innerHTML = '${sprite}';
        document.body.insertBefore(div.firstChild, document.body.firstChild);
      })()`,
      content,
    ].join('\n'));
  });

  return undefined;
};
