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
  mode: "development"
};