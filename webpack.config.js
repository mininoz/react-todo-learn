//webpack.config.js
var path = require('path')

module.exports = {
  // main javascript
  entry: './src/main.js',

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: './public',
  },

}
