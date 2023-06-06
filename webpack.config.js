module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
        options: {
          presets: ["env", "react"],
          plugins: ["transform-class-properties"],
        },
      },
      {
        use: ["style-loader", "css-loader", "postcss-loader"],
        test: /\.css$/i,
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: "url-loader?limit=100000",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
