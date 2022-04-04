const path = require('path');
const webpack = require('webpack');

const dllPath = path.resolve(__dirname, 'dll');
const dllLibName = 'dllLibName';

module.exports = {
    entry: ['react'],

    output: {
        path: dllPath,
        filename: 'vendor.js',
        library: dllLibName
    },

    plugins: [
        new webpack.DllPlugin({
            name: dllLibName,
            path: path.resolve(__dirname, 'manifeast.json')
        })
    ]
}