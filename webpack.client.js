const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  // define root file of client
  entry: './src/client/client.js',

  // tell where to put output
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};

module.exports = merge(baseConfig, config);
