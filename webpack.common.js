const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ["./src/index.ts"],
    },

    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],

    output: {
        libraryTarget: "umd",
        library: "onix",
        filename: "onix-app.js",
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
};