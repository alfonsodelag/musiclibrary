const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode: "development",
    entry: "./src/main.js", // string | object | array
    module: {
        rules:
        [
            {
                test: /\.js$/, //Regular expression
                exclude: /(node_modules)/,//excluded node_modules
                use: {
                loader: "babel-loader",
                    options: {
                    presets: ["@babel/preset-env"]  //Preset used for env setup
                    }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    { loader: "css-loader", options: { importLoaders: 1 } },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}