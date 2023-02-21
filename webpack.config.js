const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        include: [
          path.resolve(__dirname, 'src')
        ]
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ]
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        type: 'asset/resource'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    static: './public',
    port: 5000,
    open: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss']
  }
}