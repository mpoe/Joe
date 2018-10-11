var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: SRC_DIR + '/app',
  output: {
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              name: '[name].[ext]',
              outputPath: DIST_DIR + '/img',
              publicPath: DIST_DIR + '/img',
              disable: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ogg|mp4|wav|mpe?g)$/i,
        use: 'file-loader'
      },
    ]
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true,
    port: 9000
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/index.html', to: '../index.html' },
    ],)
  ]
};