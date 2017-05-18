const Webpack = require('webpack')
const {join} = require('path')

module.exports = {
    context: join(__dirname, 'client_src'),
    entry: {
        'main': './main'
    },
    output: {
        path: join(__dirname, 'client'),
        filename: 'app.js',
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        modules: ['.', 'node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
                options: {
                    useBabel: false
                }
            },
             {
                test: /\.styl$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]'
                            // localIdentName: DELIR_ENV === 'dev'
                            //     ? '[path][name]__[local]--[emoji:4]'
                            //     : '[local]--[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'stylus-loader'
                    },
                ],
            },
        ],
    },
}
