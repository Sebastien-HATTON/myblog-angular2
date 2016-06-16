// @joaogarin

/*
 * Helper
 * env(), getBanner(), root(), and rootDir()
 * are defined at the bottom
 */
var webpack = require('webpack');
var helpers = require('./helpers');

var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var CompressionPlugin = require('compression-webpack-plugin');
var DedupePlugin = require('webpack/lib/optimize/DedupePlugin');

var ManifestPlugin = require('webpack-manifest-plugin');

var commonConfig = {
    resolve: {
        extensions: ['', '.ts', '.js', '.json'],
    },
    module: {
        preLoaders: [{
            test: /\.ts$/,
            loader: "tslint"
        }],
        loaders: [
            // Support for *.json files.
            { test: /\.json$/, loader: 'json' },

            // Support for CSS as raw text
            { test: /\.css$/, loader: 'raw' },

            //sass loader implementation
            { test: /\.scss$/, loaders: ["css", "sass"] },

            // support for .html as raw text
            { test: /\.html$/, loader: 'raw' },

            // inline base64 URLs for <=8k images, direct URLs for the rest
            { test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=8192' },

            // Support for .ts files.
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
    ]
};

var clientConfig = {
    target: 'web',
    entry: './src/client',
    output: {
        path: path.join(__dirname, 'dist', 'client'),
        filename: 'bundle.[hash].js'
    },
    node: {
        global: true,
        __dirname: true,
        __filename: true,
        process: true,
        Buffer: false
    },
    plugins : [
        new ManifestPlugin()
    ]
};

var serverConfig = {
    target: 'node',
    entry: './src/server',
    output: {
        path: path.join(__dirname, 'dist', 'server'),
        filename: 'bundle.js'
    },
    externals: helpers.checkNodeImport,
    node: {
        global: true,
        __dirname: true,
        __filename: true,
        process: true,
        Buffer: true
    }
};



// Default config
var defaultConfig = {
    module: {
        noParse: [
            path.join(__dirname, 'zone.js', 'dist'),
            path.join(__dirname, 'angular2', 'bundles')
        ]
    },
    context: __dirname,
    resolve: {
        root: path.join(__dirname, '/src')
    },
    output: {
        publicPath: path.resolve(__dirname),
    },
    plugins: [
        // Plugin: DedupePlugin
        // Description: Prevents the inclusion of duplicate code into your bundle
        // and instead applies a copy of the function at runtime.
        //
        // See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
        // See: https://github.com/webpack/docs/wiki/optimization#deduplication
        new DedupePlugin(),

        new UglifyJsPlugin({
            // to debug prod builds uncomment //debug lines and comment //prod lines

            // beautify: true,//debug
            // mangle: false,//debug
            // dead_code: false,//debug
            // unused: false,//debug
            // deadCode: false,//debug
            // compress : { screw_ie8 : true, keep_fnames: true, drop_debugger: false, dead_code: false, unused: false, }, // debug
            // comments: true,//debug

            beautify: false,//prod
            // disable mangling because of a bug in angular2 beta.1, beta.2 and beta.3
            // TODO(mastertinner): enable mangling as soon as angular2 beta.4 is out
            // mangle: { screw_ie8 : true },//prod
            mangle: false,
            compress: { screw_ie8: true },//prod
            comments: false//prod

        }),
        /**
         * Plugin: CompressionPlugin
         * Description: Prepares compressed versions of assets to serve
         * them with Content-Encoding
         *
         * See: https://github.com/webpack/compression-webpack-plugin
         */
        new CompressionPlugin({
            regExp: /\.css$|\.html$|\.js$|\.map$/,
            threshold: 2 * 1024
        })
    ],
    // Other module loader config
    tslint: {
        emitErrors: true,
        failOnHint: false,
        resourcePath: 'src/*',
    },
}

var webpackMerge = require('webpack-merge');
/*
 * Config
 */
module.exports = [
    // Client
    webpackMerge({}, defaultConfig, commonConfig, clientConfig),

    // Server
    webpackMerge({}, defaultConfig, commonConfig, serverConfig)
];