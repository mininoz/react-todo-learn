//webpack.config.js
var path = require('path')

module.exports = {


  // main javascript
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
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
        loader: "babel-loader"
      }
    ]
  },

  devServer: {
    contentBase: './public',
  },

}
