const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/app'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']}
    ]
  }
};
