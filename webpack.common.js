const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: {
        vendor: './src/vendor.js',
        main: './src/main.js',
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                }
            }
        ]
    }
};
