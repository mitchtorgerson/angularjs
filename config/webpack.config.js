const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',

  devtool: 'source-map',

  context: path.resolve(__dirname, '../src'),
  entry: [
    './index.js',
  ],

  output: {
    pathinfo: true,
    publicPath: '/',
  },

  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
    ],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'source-map-loader',
        enforce: 'pre',
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'tslint-loader',
        enforce: 'pre',
        options: {
          failOnHint: false,
        }
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          presets: [
            '@babel/env',
            '@babel/preset-typescript',
          ],
          plugins: [
            'angularjs-annotate',
            '@babel/proposal-class-properties',
            '@babel/proposal-object-rest-spread',
          ],
        }
      },
      {
        test: /\.html$/,
        include: /(components)/,
        use: [
          {
            loader: 'ngtemplate-loader',
            options: {
              relativeTo: path.resolve(__dirname, '../src'),
            }
          },
          'html-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              paths: [
                path.resolve(__dirname, '../src/less'),
              ]
            }
          },
        ],
      },
    ],
  },

  plugins: [
    new WebpackCleanupPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new HtmlWebpackPlugin({
      title: 'AngularJS Application',
      template: './index.html',
    }),
    new MiniCssExtractPlugin({}),
    new CopyWebpackPlugin([
      {
        from: './favicon.ico',
        to: './',
      }
    ]),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true,
        },
      },
    },
  },

};
