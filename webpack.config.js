module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "./docs/bundle.js"
  }, 
  watch: true,
  devServer: { inline: true },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  }
};