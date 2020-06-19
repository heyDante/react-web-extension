const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    popup: "./src/popup.js"
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  module: {
    rules: [
      {
        include: __dirname + "/src",
        loader: "babel-loader",
        test: /\.js$/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/popup.html",
      filename: "popup.html",
      inject: true,
      chunks: ["popup"]
    })
  ],
  mode: "development"
};