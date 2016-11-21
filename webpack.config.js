module.exports = {
  entry: './src/app.js',
  output: {
    filename: './docs/bundle.js'
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
				presets: ['es2015']
			}
		}
	]
  },
  eslint: {
    configFile: './.eslintrc'
  }
};