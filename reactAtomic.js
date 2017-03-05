
module.exports = (webpackConfig) => {
	webpackConfig.module.loaders.concat([
    {
      test: /\.less\.module$/,
      include: [path.resolve(process.cwd(), 'node_modules/react-atomic')],
      exclude: /react-atomic\/node_modules/,
      loader: `style-loader!css-loader?modules=true&localIdentName=[path][name]__[local]--[hash:base64:5]&sourceMap=true&importLoaders=2!postcss-loader!${lessLoader}`,
    },
    {
      test: /\.js$/,
      include: [path.resolve(process.cwd(), 'node_modules/react-atomic')],
      exclude: /react-atomic\/node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ['transform-runtime'],
      },
    },
	]);
