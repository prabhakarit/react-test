const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require('./paths');

module.exports = {
    entry: paths.entryPath,
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    output: {
      path: paths.outputPath,
      filename: "bundle.min.js",
      publicPath: "/"
    },
    devServer: {
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          options: {
            configFile: "tsconfig.json"
          }
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          loader: "file-loader"
        },
        {
          test: /\.(jpe?g|png|gif|svg)(\?[a-z0-9=.]+)?$/,
          loader: "url-loader?limit=100000"
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: paths.templatePath
      })
    ]
  };
