import CleanWebpackPlugin from 'clean-webpack-plugin';


export default {
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
