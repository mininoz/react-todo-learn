//webpack.config.js
var path = require('path')

module.exports = {
  devTool: 'source-map',
  
  // main javascript
  entry: './src/main.js',

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
