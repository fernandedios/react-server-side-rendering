const path = require('path');

module.exports = {
  // tell webpack that we're building for nodeJS, NOT browser
  target: 'node',

  // define root file of server
  entry: './src/index.js',

  // tell where to put output
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // run babel on every js file
  module: {
    rules: [
      {
        test: /\.js?$/, // regex for js filename
        loader: 'babel-loader',
        exclude: /node_modules/, // exclude files inside node_modules
        options: {
          presets: [
            'react',
            'stage-0',
            // meet requirements of latest 2 versions of browsers
            ['env', { targets: { browsers: ['last 2 versions'] } } ]
          ]
        }
      }
    ]
  }
};
