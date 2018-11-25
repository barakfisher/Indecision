
const path = require('path');
console.log(path.join(__dirname,'public')); //current location

module.exports = {
    entry : './src/app.js', //starting point
    output : {
        path :path.join(__dirname,'public'), //absolute path 
        filename:'bundle.js'
    },
    module : {
        rules: [{
            loader :'babel-loader',
            test: /.\js$/,
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/ ,  /// look for all files that ends with .scss or .css
            use : [  // for an array of loaders
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase : path.join(__dirname,'public')
    }
};