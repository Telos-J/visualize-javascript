const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path')

module.exports = {
    entry: './js/app.js',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MonacoWebpackPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname),
        publicPath: '/dist',
        port: 9000
    },
}
