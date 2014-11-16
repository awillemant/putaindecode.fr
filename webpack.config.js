var webpack = require("webpack")

var port = process.env.npm_package_config_port || 3000

module.exports = {
  entry : [
    "webpack-dev-server/client?http://localhost:" + port,
    "webpack/hot/only-dev-server",
    "./src/public/scripts/index"
  ],
  output : {
    path : __dirname + "/dist/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve : {
    extensions : [
      "",
      ".js"
    ]
  },
  module : {
    loaders : [
      {
        test: /src(?:\/||\\)[\s\S]+\.js$/,
        loaders: ["react-hot", "6to5-loader", "jsx-loader"]
      }
    ]
  }
}
