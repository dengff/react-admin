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
        minSize: 40000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        automaticNameDelimiter: '~',
        enforceSizeThreshold: 50000,
        cacheGroups: {
          antd_icons: {
            test: /[\\/]node_modules[\\/](?:(?:@ant-design\/icons))[\\/]/,
            name: 'antd_icons',
            priority: -10,
          },
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|react-color|redux|react-redux|redux-thunk|redux-persist)[\\/]/,
            name: 'react',
            priority: -10,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            priority: -20,
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
