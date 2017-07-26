module.exports = ({styleVariablesReplacementLoader}) => ({
  test: /\.svg$/,
  exclude: /\.sprite\.svg$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: '[name]-[hash:6].[ext]',
      },
    },
    styleVariablesReplacementLoader,
  ],
});
