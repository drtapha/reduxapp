module.exports = {
    entry: './app.js',
    output: {
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                        plugins: [require('babel-plugin-transform-object-rest-spread'), 
                        require('babel-plugin-transform-class-properties')
                        ]
                    }
                }
            }
        ]
    }
}
