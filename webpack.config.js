module.exports = {
  entry: [
    './app/App.js'
  ],
  output: {
    path: __dirname + '/public/js',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
