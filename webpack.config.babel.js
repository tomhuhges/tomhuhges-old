import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import merge from 'webpack-merge';
import validate from 'webpack-validator';
import dev from './webpack.config.dev';
import prod from './webpack.config.prod';

let paths = {
  src: path.join(__dirname, '/src'),
  dist: path.join(__dirname, '/dist'),
  css: path.join(__dirname, '/src/css'),
  images: path.join(__dirname, '/src/assets/img')
};

let defaults = {
  entry: {
    app: paths.src,
    style: paths.css + '/style.css'
  },
  output: {
    path: paths.dist
  },
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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: paths.src,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file?name=/assets/img/[name].[hash].[ext]',
        include: paths.images
      },
      {
        test: /\.svg$/,
        loader: 'babel?presets[]=es2015,presets[]=react!svg-react'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'tom hughes - js developer',
      template: './src/public/index.ejs'
    }),
    new HtmlWebpackPlugin({
      filename: '200.html',
      title: 'tom hughes - js developer',
      template: './src/public/index.ejs'
    })
  ]
};

let config;

if ( process.env.npm_lifecycle_event === 'build' ) {

  // prod config
  config = merge(
    defaults,
    prod({
      paths: paths
    })
  );

} else {

  // dev config
  config = merge(
    defaults,
    dev({
      paths: paths,
      server: {
        host: process.env.HOST,
        port: process.env.PORT
      }
    })
  );
}

export default validate(config);
