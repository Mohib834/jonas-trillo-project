const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:['./src/js/index.js'],
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'js/bundle.js'
    },

    module:{
        rules:[
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.(jpe?g|png|gif)$/,
                use:'file-loader'
            },
            {
                test:/\.html$/,
                use:'html-loader' 
            },
            {
                test:/.svg$/,
                use:'svg-sprite-loader'
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html'
        })
    ]
};