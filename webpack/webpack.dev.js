const webpack = require("webpack");

const commonPaths = require("./paths");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "[name].js",
    path: commonPaths.outputPath,
    chunkFilename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              camelCase: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  devServer: {
    contentBase: commonPaths.outputPath,
    compress: true,
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
