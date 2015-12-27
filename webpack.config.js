var path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    main: [
      './src/components/main'
    ]
  },
  output: {
   filename: './public/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
}