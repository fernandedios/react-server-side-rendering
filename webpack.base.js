module.exports = {
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
