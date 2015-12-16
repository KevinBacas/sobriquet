var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, './src'),
        ],
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin("#!/usr/bin/env node", {raw:true})
  ]
};
