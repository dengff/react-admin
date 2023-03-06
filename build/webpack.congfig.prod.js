'use strict';
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin'); // css-minimizer-webpack-plugin css压缩
const BundleAnalyzerPlugin = require(
  'webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const proConfig = merge(baseConfig, {

  mode: 'production',
  watch: false,
  output: {
    clean: true,
  },
  optimization: {
    runtimeChunk: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // cache: true,
        // compress: {
        // 	// warnings: false,
        // 	// drop_console: true,
        // 	drop_debugger: true,
        // },
        parallel: 4,
        // extractComments: false,
        minify: TerserPlugin.esbuildMinify,
      }),
      new CssMinimizerPlugin({
        parallel: 4,
        minify: CssMinimizerPlugin.esbuildMinify,
      }),
    ],
    splitChunks: {
      // name: false,
      chunks: 'all',
      maxInitialRequests: 5,
      maxAsyncRequests: 10,
      minChunks: 1,
      // minSize: 30000,
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          name: 'vendors-chunk',
          chunks: 'initial',
        },
        antdsChunk: {
          chunks: 'all',
          name: `antds`,
          test: /[\\/]node_modules[\\/]_?antd\/es(.*)/,
          priority: 12,
          minChunks: 1,
        },
        antdChunk: {
          chunks: 'async',
          name: `antd`,
          test: /[\\/]node_modules[\\/]_?antd\/es(.*)/,
          priority: 13,
          minChunks: 1,
        },
        antDesignsChunk: {
          chunks: 'all',
          name: `antDesignsChunk`,
          test: /[\\/]node_modules[\\/]_?@ant-design(.*)/,
          priority: 12,
          minChunks: 1,
        },
        commons: {
          name: 'commons',
          minChunks: 2,
          chunks: 'initial',
          minSize: 0,
        },
      },
    },
  },
  devtool: false,
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash].css',
      chunkFilename: 'static/css/[id].[contenthash].css',
      ignoreOrder: true,
    }),
    new CompressionWebpackPlugin({
      algorithm: 'gzip',
      test: /\.(js|css)$/,
      threshold: 10240,
      minRatio: 0.8,
      // deleteOriginalAssets: true // 删除源文件
    }),
    // new BundleAnalyzerPlugin(),
    // new SpeedMeasurePlugin(),
  ],
});
module.exports = proConfig;
