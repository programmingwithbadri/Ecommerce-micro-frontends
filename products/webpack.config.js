const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFedarationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
    entry: './src/index.js',
    plugins: [
        new ModuleFedarationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/bootstrap',
            },
            shared: ['faker'],
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
