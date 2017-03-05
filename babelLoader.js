module.exports = () => (webpackConfig) => {
	webpackConfig.module.loaders.push(
    {
      test: /\.js$/,
      exclude: /node_modules(?!\/react-atomic)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ['react-autoprefix', 'transform-runtime'],
      },
    }
	);
}
