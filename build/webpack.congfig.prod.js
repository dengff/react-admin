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
    moduleIds: 'deterministic',
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
      chunks: 'all',
      cacheGroups: {
        reactDom: {
          chunks: 'all',
          name: `react-dom`,
          test: /[\\/]node_modules[\\/]_?react-dom(.*)/,
          priority: 10,
          minChunks: 1,
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
