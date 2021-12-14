const path = require('path');
const __root = process.cwd();

const devConfig = {
  target: ['web'],
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__root, 'dist'),
    filename: 'js/[name].js',
    assetModuleFilename: 'assets/[name].[contenthash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png|webp|bmp|svg)$/i,
        type: 'asset',
        // type: 'asset/inline',
        // type: 'asset/resource',
        parser: {
          dataUrlCondition: {
            // default 8
            maxSize: 4 * 1024, // 4kb
          },
        },
      },
      {
        test: /\.jsx?$/i,
        exclude: /(node_modules|dist)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = devConfig;
