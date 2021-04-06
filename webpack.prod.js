const HtmlWebPackPlugin   = require('html-webpack-plugin');
const MiniCssStrackPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin  = require('css-minimizer-webpack-plugin');
const MinifyPlugin        = require('babel-minify-webpack-plugin');

module.exports = {
    mode: `production`,
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin({})]
    },
    output: {
        filename: 'main.[contenthash].js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use: [
                    MiniCssStrackPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: false
                },
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            inject: 'body'
        }),
        new MiniCssStrackPlugin({
            filename: '[name].[contenthash].css',
            ignoreOrder: false
        }),
        new MinifyPlugin()
    ]
}