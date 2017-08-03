const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HappyPack = require('happypack')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  cache: true,
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: ['babel-polyfill','./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: '[name].js'
  },
  devServer: {
    contentBase: './src',
    port: 5000,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }
          /*{
            loader: 'happypack/loader',
            options: {
              presets: ['es2015','react','stage-0'],
              plugins: [
                'add-module-exports',
                'syntax-async-functions',
                'transform-regenerator',
                'transform-object-rest-spread',
                'syntax-dynamic-import',
                'transform-regenerator'
              ],
              compact : false
            }
          }*/
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpe?g|png)$/i,
        loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                quality: 95,
                progressive: true
              }
            }
        }],
        exclude: /node_modules/,
        include: [
          path.join(__dirname, 'src/utils/images')
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
      ignoreOrder: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        return module.context && module.context.indexOf('node_modules') !== -1
      }
    }),
    /*new HappyPack({
      loaders: [{
        path: 'babel-loader',
        query: {
          plugins: [
            'babel-plugin-add-module-exports',
            'babel-plugin-syntax-async-functions',
            'babel-plugin-syntax-dynamic-import',
            'babel-plugin-transform-object-rest-spread',
            'babel-plugin-transform-regenerator'
          ],
          presets: ['es2015', 'react', 'stage-0'],
        }
      }],
    })*/
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}