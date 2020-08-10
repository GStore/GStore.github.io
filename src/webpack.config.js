const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = () => {
   
    let configure = {
      devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: process.env.PORT || 9000,
        open: true
      },
      // watch: true,
      context: __dirname,
      entry: path.resolve(__dirname, path.join("main.ts")),

      output: {
          filename: 'main.js',
          path: path.resolve(__dirname, './dist')
      },

      resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json']
      },

      module: {
          rules: [{ 
            test: /\.(ts|js)x?$/, 
            loader: 'babel-loader',
            exclude: /node_modules/ 
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }],
      },

      plugins: [
          new ForkTsCheckerWebpackPlugin(), 
          new HtmlWebpackPlugin(),
          new MiniCssExtractPlugin()],
      mode: process.env.NODE_ENV || 'development',
      target: 'web',
  };
  return configure;

};
