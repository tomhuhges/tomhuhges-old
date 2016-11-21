module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "./docs/bundle.js"
  }, 
  watch: true,
  devServer: { inline: true },
};