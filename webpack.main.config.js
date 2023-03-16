const MiniCssExtract = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

module.exports = {
    /**
     * This is the main entry point for your application, it's the first file
     * that runs in the main process.
     */
    entry: './src/main.js',
    // Put your normal webpack config below here
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {}
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                minify: TerserPlugin.uglifyJsMinify
            })
        ]
    },
    module: {
        rules: require('./webpack.rules'),
    },
    plugins: [
        new MiniCssExtract({
            filename: '[name].[contenthash].bundle.css'
        })
    ]
};
