const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/index.js", // the file where you call ReactDOM.render()
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    hot: true,  // hot reloads
    open: true, // opens browser on webpack start
    proxy: {
      '/api': 'http://localhost:5000', // allows requests to /api/... to map to localhost:5000/api/...
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // inserts the bundled JS into this html file.
    }),
  ],
  resolve: {  // resolve based on the order of the array, with priority highest at the start
    modules: [__dirname, "src", "node_modules"], 
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"), // all jsx files (i.e. React files) will go through Babel to convert to plain JS
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      }, 
    ],
  },
};