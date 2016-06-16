const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    sourceMapFilename: '[file].map'
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({ riot: 'riot' }),
    new CopyWebpackPlugin([
      { from: 'src/content' }
    ])
  ],
  module: {
    preLoaders: [
      { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none' } }
    ],
    loaders: [
      { 
        test: /\.js?$|\.tag$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.styl$/, 
        exclude: /(node_modules)/,
        loader: ExtractTextPlugin.extract('css-loader!stylus-loader')
      }
    ]
  },
  devServer: {
    contentBase: './dest'
  }
};