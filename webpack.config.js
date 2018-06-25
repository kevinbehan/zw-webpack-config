const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            },
            {
                test: /\.scss?/,
                loader: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                test: [/\.png$/, /\.jpe?g$/, /\.gif$/],
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:8].[ext]'
                }
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.[chunkhash:8].css'
        }),
        new CleanWebpackPlugin(
            ['build/**/*.*'],
            { root: path.resolve('.') }
        )        
    ]
}

