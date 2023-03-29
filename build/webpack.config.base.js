const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isEnvProduction = process.env.NODE_ENV === 'production';

const assetsPath = function(_path) {
  const assetsSubDirectory = 'static';
  return path.posix.join(assetsSubDirectory, _path);
};
const resolve = function(dir) {
  return path.join(__dirname, '..', dir);
};
module.exports = {
  cache: {
    type: 'filesystem', // 使用文件缓存
  },
  performance: {hints: false},
  entry: {
    // app: './src/main.js' // 编译文件入口
    app: path.resolve(__dirname, '../src/main.tsx'), // 编译文件入口
  },
  output: {
    path: path.resolve(__dirname, '../dist'), // 编译输出的静态资源根路径
    filename: isEnvProduction ?
      assetsPath('js/[name].[contenthash].js') :
      assetsPath('js/[name].js'),
    chunkFilename: isEnvProduction ?
      assetsPath('js/[name].[contenthash].js') :
      assetsPath('js/[name].[id].js'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '*'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      'src': path.resolve(__dirname, '../src'),
    },
  },
  externals: {
    'echarts': 'echarts',
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            // test: /\.(jsx|js)$/,
            test: /\.([jt]sx|[jt]s)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  babelrc: true,
                  cacheDirectory: true,
                },
              },
            ],
          },
          {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            type: 'asset',
            parser: {
              //转base64的条件
              dataUrlCondition: {
                maxSize: 10 * 1024, // 10kb
              },
            },
            generator: {
              filename: 'img/[name].[hash:7][ext]',
            },
          },
          {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,

            type: 'asset', // type选择asset
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024, // 小于10kb转base64位
              },
            },
            generator: {
              filename: 'media/[name].[hash:7][ext]', // 文件输出目录和命名
            },

          },
          {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            type: 'asset',
            generator: {
              // 输出文件位置以及文件名
              filename: assetsPath('fonts/[name].[hash:7].[ext]'),
            },
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024, // 超过100kb不转 base64
              },
            },
          },
          {
            test: /\.css$/,
            use: [
              {
                loader: isEnvProduction ?
                  MiniCssExtractPlugin.loader :
                  'style-loader',
              },
              {loader: 'css-loader'},
            ],
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: isEnvProduction ?
                  MiniCssExtractPlugin.loader :
                  'style-loader',
              },
              // 'style-loader',
              {
                loader: 'css-loader',
              },
              'sass-loader',
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    parser: 'postcss-scss',
                    plugins: [
                      ['autoprefixer'],
                    ],
                  },
                },
              },

            ],
          },
        ],
      },
    ],
  },
  stats: {
    assets: false,
    builtAt: true,
    moduleAssets: false,
    children: false,
    performance: false,
    warnings: false,
    colors: true,
    modules: false,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve('public'),
          to: resolve('dist/static'),
        }],
    }),
    new WebpackBar({
      color: '#58bc58',
      basic: false,
      profile: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeAttributeQuotes: true,//压缩 去掉引号
        collapseWhitespace: true,
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),

  ],
};
