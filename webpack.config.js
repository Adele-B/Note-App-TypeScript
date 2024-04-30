const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const devMode = argv.mode !== 'production';

  return {
    entry: ['./src/index.ts', './src/assets/main.scss'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      publicPath: '/'
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    performance: {
      maxAssetSize: 250000,
      maxEntrypointSize: 250000
    },
    resolve: {
      alias: {
        '/assets': path.resolve(__dirname, 'src/assets')
      }
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          resolve: {
            extensions: ['.js', '.ts', '.tsx']
          },
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-typescript']
            }
          },
        },
        {
          test: /\.(sa|sc|c)ss$/, // styles files
          use: ['style-loader', 'css-loader', 'postcss-loader']
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
          type: 'asset/inline'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
        favicon: './src/assets/images/favicon.ico'
      }),
      // new CopyPlugin(
      //   {
      //     patterns: [
      //       { from: 'src/assets/images', to: 'assets/images' }
      //       { from: 'src/assets/scss', to: 'assets/scss' },
      //     ]
      //   }
      // ),
      // This allows to pass env vars on runtime, see /nginx/run.sh and Dockerfile
      new webpack.EnvironmentPlugin({
        DATA_API_BASE_URL: 'http://localhost:5000'
      })
    ].concat(devMode ? [] : [new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css',
      chunkFilename: '[id]-[contenthash].css'
    })]),
    devServer: {
      historyApiFallback: true,
      hot: false,
      liveReload: true,
      static: {
        directory: path.join(__dirname, 'dist')
      },
      port: 3000
    }
  };
};
