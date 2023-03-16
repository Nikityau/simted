const MiniCssExtract = require('mini-css-extract-plugin')
const path = require('path')

const rules = require('./webpack.rules');

module.exports = {
    // Put your normal webpack config below here
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {}
    },
    module: {
        rules,
    },
    plugins: [
        new MiniCssExtract({
            filename: '[name].[contenthash].bundle.css'
        })
    ]
};
