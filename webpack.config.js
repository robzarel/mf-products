const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPluging = require('webpack/lib/container/ModuleFederationPlugin');

const IS_DEV = process.env.MODE === 'dev';

const config = {
  mode: IS_DEV ? 'development': 'production',
  output: {
    filename: '[name].[hash].js',
  },
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPluging({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductIndex': './src/bootstrap'
      },
      shared: ['faker'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
};

module.exports = config;
