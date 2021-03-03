const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: __dirname + "/dist",
    filename: "index_bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  devServer: {
    contentBase: "./public",
    compress: true,
    port: 9000,
    disableHostCheck: true,
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }],
              ["@babel/plugin-transform-regenerator"],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
