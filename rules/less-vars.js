module.exports = ({styleVariablesReplacementLoader}) => ({
  test: /\.less\.vars$/,
  issuer: /\.less$/,
  use: [styleVariablesReplacementLoader],
});
