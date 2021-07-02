module.exports = {
    mode: 'development',
    context: __dirname,
    entry: './src/main.ts',
    output: {
        path: __dirname,
        filename: 'build.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { 
                test: /\.ts$/, 
                loader: "ts-loader" 
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ]
    }
}