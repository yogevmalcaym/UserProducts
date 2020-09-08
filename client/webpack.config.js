const webpack = require('webpack');
const path = require('path');

module.exports = {
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    mode: 'development',
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        './src/index.jsx',
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: ['babel-loader'],
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            styles: path.resolve(__dirname, 'src/globals/styles'),
            utils: path.resolve(__dirname, 'src/globals/utils'),
            store: path.resolve(__dirname, 'src/store'),
            "common-components": path.resolve(__dirname, 'src/commonComponents'),
            assets: path.resolve(__dirname, 'src/globals/assets')
        }
    },
    output: {
        publicPath: "/",
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({options: {}}),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        hot: true,
        open: true
    },
    devtool: 'inline-source-map',
};
