const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPluging = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
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
      template: './public/index.html',
    })
  ]
};
