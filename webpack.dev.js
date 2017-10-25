const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');

console.log('sssss', process.env['application.port']);

module.exports = merge(base, {
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    publicPath: '/dist/',
    overlay: {
      errors: true,
      warnings: false
    },
    port: 8080,
    hot: true,
    proxy: {
      "/": {
        target: 'http://localhost:' + process.env['application.port'],
        bypass: function (req, res, proxyOptions) {
          // Don't proxy hot reload requests.
          if (/hot-update\.json$/.test(req.url)) {
            return true;
          }
        }
      }
    }
  }
});
