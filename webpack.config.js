var copy = require("copy-webpack-plugin");
var liveReload = require('webpack-livereload-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        bundle: "./main.ts",
        zone: "./node_modules/zone.js/dist/zone.js",
        reflect: "./node_modules/reflect-metadata/Reflect.js",
    },

    output: {
        path:path.join(__dirname,'dist'),
        filename: "./assets/[name].js",
    },
    // Enable sourcemaps for debugging webpack's output.
    // devtool: "source-map",
    devtool: "eval",
    /*  watch: true,*/

    resolve: {
        extensions: ["", ".js", ".ts"]
    },

    module: {
        loaders: [
            // All files with a '.ts' extension will be handled by 'ts-loader'.
            { test: /\.ts?$/, loader: "ts-loader" },
            { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
            { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
            { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' },
        ]
    },

    plugins: [
        new copy([
            {
                from: "./app/**/*.html",
                to: "./templates/"
            },
            {
                from: "./app/**/*.css",
                to: "./styles/"
            },
            {
                from: "./app/index.html",
                to: "./"
            },
            {
                from: "./app/assets/",
                to: "./assets/"
            },
          

        ]),
        new liveReload(),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
};