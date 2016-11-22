const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
	bundle: './src/app.js'
  },
  output: {
    path: './docs',
    filename: '[name].js',
  }, 
  watch: true,
  devServer: { inline: true },
  module: {
    preLoaders: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'eslint-loader'
		}
    ],
    loaders: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015']
			}
		},
		{
			test: /\.css$/,
			loader: 'style-loader!css-loader',
			include: './src/css'
		}
	]
  },
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false
      },
      mangle: {
        except: ['webpackJsonp']
      }
    }),
    //new HtmlWebpackPlugin({ title: 'tom hughes - js developer' }),
    new CopyWebpackPlugin([{ from: './src/assets', to: 'assets' },])
  ]
};