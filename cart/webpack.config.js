const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFedarationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082,
    },
    entry: './src/index.js',
    plugins: [
        new ModuleFedarationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/index',
            },
            shared: ['faker'],
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
