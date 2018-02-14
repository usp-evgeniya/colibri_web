const webpack = require('webpack'),
uglifyJS = require('uglifyjs-webpack-plugin');

const config = {
    output: {
        //filename: 'main.min.js'
        filename: 'main.js'
    },
    /*plugins: [
        new uglifyJS({
            sourceMap: true

        })
    ]*/

};

module.exports = config;