const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path')

module.exports = {
    entry: {
        main: './js/app.js',
    },
    output: {
        filename: 'main.[contenthash].js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(woff|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'files/'
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new MonacoWebpackPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'templates/index.html',
            filename: 'index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: 'templates/console-log.html',
            filename: 'templates/console-log.html',
            chunks: ['consolelog']
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname),
        publicPath: '/',
        port: 9000
    },
}
