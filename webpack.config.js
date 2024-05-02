const path = require('path');

module.exports = {
    mode: 'development',
    entry: './app.js',  // Entry point for your application
    output: {
        filename: 'bundle.js',  // Output bundle file
        path: path.resolve(__dirname, 'public'),  // Directs output to your public directory
    },
    module: {
        rules: [
            {
                test: /\.css$/,  // Rule for .css files
                use: ['style-loader', 'css-loader']  // Applies CSS loaders
            },
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),  // Serve your static files
        },
        compress: true,
        port: 9000,  // Port to serve on
    },
};