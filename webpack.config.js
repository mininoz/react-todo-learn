//webpack.config.js
var webpack = require('webpack')
var path = require('path')

module.exports = {


  // main javascript
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080/',
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/main.js',
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"]
      }
    ]
  },

  devServer: {
    contentBase: './public',
  },
}
