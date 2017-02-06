/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 06.02.17
 */

const webpack = require('webpack');
const path = require('path');

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                options: {
                    presets: ['es2017']
                }
            }
        ]
    }
};

module.exports = config;