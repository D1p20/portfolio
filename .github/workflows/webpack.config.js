// webpack.config.js
const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  entry: 'main.js', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.FIREBASE_CONFIG': JSON.stringify(process.env.FIREBASE_CONFIG),
      'process.env.DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
    }),
  ],
};
