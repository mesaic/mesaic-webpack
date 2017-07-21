const autoprefixer = require('autoprefixer');

module.exports = () => ({
  loader: 'postcss-loader',
  options: {
    plugins: () => [
      autoprefixer({
        browsers: ['> 5%', 'last 3 iOS versions', 'last 2 versions'],
      }),
    ],
  },
});
