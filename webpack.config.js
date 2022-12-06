'use strict'
const { resolve } = require('path')

module.exports = {
    entry: './client/main.js',
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    mode: 'development',
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          exclude: /(node_modules|bower_components)/,
          include: resolve(__dirname, './client'),
          loader: 'babel-loader',
       
        },
        {
          // test: /\.css$/,
          // use: [
          //   'style-loader',
          //   'css-loader',
          // ]
        }
      ]
    }
  };