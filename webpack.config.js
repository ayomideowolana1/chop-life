const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname,'dist')
    },
    plugins:[
        new htmlWebpackPlugin({
            title: "Chop Life NG"
        }),
    ],
    module:{
        rules:[
            {
            test:/\.css$/i,
            use:['style-loader','css-loader']
        },
        {
            test:/\.(jpg|jpeg|svg|png|gif)$/i,
            type:'asset/resource'
        },
        {
            test:/\.(woff|woff2|eot|ttf|otf)$/i,
            type:'asset/resource'
        },
    ]
    },
    mode: 'development',
}