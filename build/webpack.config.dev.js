'use strict';

const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.config.base');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const HOST = 'localhost';
const PORT = 8090;

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: '**/node_modules',
  },
  devServer: {
    hot: true,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    // quiet: true,
    port: PORT,
    /*proxy: {
      '/api': {
        // 例如我们请求 http://localhost:8080/api/users 会被代理到 https://api.github.com/api/users
        // target: 'https://www.fastmock.site/mock/a073c1a206e2b18497c30f4926f8647d/api/',
        // target: 'https://test-scm.trendy-global.com',
        target: 'https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e',
        // 实际上我们的真正请求地址为 https://api.github.com/users 所有我们需要通过 pathRewrite 配置项进行重写路径
        pathRewrite: {'^/api': '/api/'},
        changeOrigin: true,
      },
    },*/
  },

  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],
});
