const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const { argv } = require("process")
const PRODUCTION = "production"
const DEVELOPMENT = "development"

const config = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
  ,
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html"
    })
  ]
}

module.exports = (argv, env) => {
  if(env.mode === PRODUCTION) {
    return {
      mode: PRODUCTION,
      ...config,
      cache: false,
      devtool: false,
      devServer: false
    }
  } else {
    return {
      mode: DEVELOPMENT,
      ...config,
      cache: true,
      devtool: "source-map",
      devServer: {
        static: {
          directory: path.join(__dirname, "dist")
        },
        compress: true,
        port: 5000
      }
    }
  }
}