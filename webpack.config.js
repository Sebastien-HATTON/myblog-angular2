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
    ],
    // Other module loader config
    tslint: {
        emitErrors: true,
        failOnHint: false,
        resourcePath: 'src/*',
    },
};

var clientConfig = {
    target: 'web',
    entry: './src/client',
    output: {
        path: path.join(__dirname, 'dist', 'client'),
        filename: 'bundle.js'
    },
    node: {
        global: true,
        __dirname: true,
        __filename: true,
        process: true,
        Buffer: false
    }
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
        publicPath: path.resolve(__dirname)
    }
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
