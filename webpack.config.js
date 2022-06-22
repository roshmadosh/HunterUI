const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: "./src/index.tsx",

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
    new webpack.ProvidePlugin({
      React: 'react',
    })    
  ],
  resolve: {  // resolve based on the order of the array, with priority highest at the start
    modules: [__dirname, "src", "node_modules"],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        },
        use: 'ts-loader',
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
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
};