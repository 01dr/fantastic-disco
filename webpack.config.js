/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 06.02.17
 */

const webpack = require('webpack');
const path = require('path');

const sourcePath = path.join(__dirname, './src');
const staticsPath = path.join(__dirname, './static');
// const nodeEnv = env && env.prod ? 'production' : 'development';
// const isProd = nodeEnv === 'production';

const config = {
    devtool: 'eval-source-map',
    context: sourcePath,
    entry: {
        js: './index.js',
        vendor: ['react']
    },
    output: {
        path: staticsPath,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            sourcePath
        ]
    },
    devServer: {
        contentBase: './src',
        historyApiFallback: true,
        port: 3000,
        compress: false,
        inline: true,
        hot: true,
        stats: {
            assets: true,
            children: false,
            chunks: false,
            hash: false,
            modules: false,
            publicPath: false,
            timings: true,
            version: false,
            warnings: true,
            colors: {
                green: '\u001b[32m',
            }
        },
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'file-loader',
                    query: {
                        name: '[name].[ext]'
                    }
                }
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                options: {
                    presets: ['es2017', 'react', 'stage-0']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: 'vendor.bundle.js'
        }),

        new webpack.NamedModulesPlugin(),

        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;