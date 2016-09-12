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
const WebpackMd5Hash = require('webpack-md5-hash');

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
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'url-loader',
                query: {
                    limit: '8192'
                }
            },

            // Support for .ts files.
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        /**
         * Plugin: WebpackMd5Hash
         * Description: Plugin to replace a standard webpack chunkhash with md5.
         *
         * See: https://www.npmjs.com/package/webpack-md5-hash
         */
        new WebpackMd5Hash(),
        /**
         * Plugin: UglifyJsPlugin
         * Description: Minimize all JavaScript output of chunks.
         * Loaders are switched into minimizing mode.
         *
         * See: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
         */
        // NOTE: To debug prod builds uncomment //debug lines and comment //prod lines
        new UglifyJsPlugin({
            // beautify: true, //debug
            // mangle: false, //debug
            // dead_code: false, //debug
            // unused: false, //debug
            // deadCode: false, //debug
            // compress: {
            //   screw_ie8: true,
            //   keep_fnames: true,
            //   drop_debugger: false,
            //   dead_code: false,
            //   unused: false
            // }, // debug
            // comments: true, //debug
            beautify: false, //prod
            mangle: { screw_ie8: true, keep_fnames: true }, //prod
            compress: { screw_ie8: true }, //prod
            comments: false //prod
        }),
    ]
};

var clientConfig = {
    target: 'web',
    entry: './src/client',
    output: {
        path: path.join(__dirname, 'dist', 'client'),
        filename: '[name].[chunkhash].bundle.js',
    },
    node: {
        global: true,
        __dirname: true,
        __filename: true,
        process: true,
        Buffer: false
    },
    plugins: [
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
    context: __dirname,
    resolve: {
        root: path.join(__dirname, '/src')
    },
    output: {
        publicPath: path.resolve(__dirname),
    },
    plugins: [],
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