const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
var InjectHtmlPlugin = require('inject-html-webpack-plugin');



module.exports = {
    mode: "development",
    devtool: "source-map",
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: "./js/index.js",
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        assetModuleFilename: 'images/[name][ext]',
    },
     
    module: {
      rules: [
        {
        test: /\.(scss|css)$/,
          exclude: /node_modules/,
          use: [
            {
                loader: miniCss.loader,
            },
            "css-loader",
            "postcss-loader",
            "sass-loader"
          ]
      },
      {
        test: /\.html$/i,
        use: 'html-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      }
    ]
    },

    plugins: [
        new miniCss({
            filename: '[name].css'
        }),
        new htmlWebpackPlugin({
            template: "./template.html"
        }),
        new HtmlWebpackInlineSVGPlugin({
          runPreEmit: true,
        }),
        new SpriteLoaderPlugin({
            plainSprite: true
        }),
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        watchFiles: ["./src/*.html"]
    }
  };