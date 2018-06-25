const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')


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
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(
            ['build/**/*.*'],
            { root: path.resolve('.') }
        )        
    ]
}

