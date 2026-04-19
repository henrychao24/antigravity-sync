const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
  name: 'extension',
  target: 'node',
  mode: 'none',
  entry: './src/extension.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'extension.js',
    libraryTarget: 'commonjs2'
  },
  externals: [
    { vscode: 'commonjs vscode' },
    // Externalize native node modules
    /^fsevents$/,
    /\.node$/,
    // Optional WebSocket dependencies (not needed, just removes warnings)
    { bufferutil: 'commonjs bufferutil' },
    { 'utf-8-validate': 'commonjs utf-8-validate' }
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.json')
          }
        }
      }
    ]
  },
  devtool: 'nosources-source-map'
};
