const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPluging = require('webpack/lib/container/ModuleFederationPlugin');

const ID_DEV = process.env.NODE_ENV === 'dev';

module.exports = {
  mode: ID_DEV ? 'development': 'production',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build/static'),
    publicPath: 'https://robzarel.github.io/mf-products/static/'
  },
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPluging({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductIndex': './src/index'
      },
      shared: {
        faker: {
          singleton: true
        }
      },
    }),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './public/index.html',
    })
  ]
};
