const HtmlWebPackPlugin     = require('html-webpack-plugin');
const MiniCssStrackPlugin   = require('mini-css-extract-plugin');
const CssMinimizerPlugin    = require('css-minimizer-webpack-plugin');
module.exports = {
    mode: `development`,
    optimization: {
        minimize: true,
        minimizer: [ new CssMinimizerPlugin({}) ]
    },
    module: {
        rules: [
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
            filename: '[name].css',
            ignoreOrder: false
        }),
    ]
}