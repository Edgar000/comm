const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports  = {
    entry: "./app/index",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    watch: true,
    devtool: 'cheap-inline-module-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'app/index.html'
    })]
};