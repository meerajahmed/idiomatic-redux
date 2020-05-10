const Dotenv = require('dotenv-webpack');
const paths = require('../paths');

const config = {
  mode: 'production',
  output: {
    filename: '[id].[hash].js',
  },
  plugins: [
    new Dotenv({
      path: paths.prodEnv,
      systemvars: true,
      defaults: true,
    }),
  ],
};
module.exports = config;
