const path = require('path');

module.exports = {
  entry: './src/inline.js',
  output: {
    filename: 'inline.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
