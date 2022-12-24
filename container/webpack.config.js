const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFedarationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080,
    },
    plugins: [
        new ModuleFedarationPlugin({
            name: 'container',
            remotes: {
                products: 'products@http://localhost:8081/remoteEntry.js',
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
