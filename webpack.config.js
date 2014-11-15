var webpack = require("webpack")

var port = process.env.npm_package_config_port || 3000

module.exports = {
  entry : [
    "webpack-dev-server/client?http://localhost:" + port,
    "webpack/hot/only-dev-server",
    "./src/public/scripts/index"
  ],
  output : {
    path : __dirname,
    filename: "bundle.js",
    publicPath : "/dist/"
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
        test: /\.js$/,
        loaders: ["react-hot", "jsx-loader?harmony"]
      }
    ]
  }
}
