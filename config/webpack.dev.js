const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const { getFileReads, getFileWrites } = require('./middlewares');

module.exports = {
  mode: 'development',

  devtool: 'inline-source-map',

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
            [
              '@babel/env',
              { modules: false, targets: { chrome: "52" } },
            ],
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
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
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
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new HtmlWebpackPlugin({
      title: 'AngularJS Application',
      template: './index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: './favicon.ico',
        to: './',
      }
    ]),
  ],

  devServer: {
    before: (app) => {
      app.get('/api/files/writes', getFileWrites);
      app.get('/api/files/reads', getFileReads);
    },
    contentBase: [
      path.join(__dirname, 'src'),
    ],
    port: process.env.HTTP_PORT || 3000,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
};
