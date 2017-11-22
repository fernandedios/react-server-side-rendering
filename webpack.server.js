const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');


const config = {
  // tell webpack that we're building for nodeJS, NOT browser
  target: 'node',

  // define root file of server
  entry: './src/index.js',

  // tell where to put output
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  
  // do NOT include files inside the node_modules folder
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
