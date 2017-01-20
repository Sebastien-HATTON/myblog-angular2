var webpack = require('webpack');
var path = require('path');
var clone = require('js.clone');
var webpackMerge = require('webpack-merge');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const ngtools = require('@ngtools/webpack');

export var commonPlugins = [
  // Plugin: CopyWebpackPlugin
  // Description: Copy files and directories in webpack.
  //
  // Copies project static assets.
  //
  // See: https://www.npmjs.com/package/copy-webpack-plugin
  new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
  // Loader options
  new webpack.LoaderOptionsPlugin({

  }),
  new webpack.NormalModuleReplacementPlugin(
    /facade(\\|\/)async/,
    root('node_modules/@angular/core/src/facade/async.js')
  ),
  new webpack.NormalModuleReplacementPlugin(
    /facade(\\|\/)collection/,
    root('node_modules/@angular/core/src/facade/collection.js')
  ),
  new webpack.NormalModuleReplacementPlugin(
    /facade(\\|\/)errors/,
    root('node_modules/@angular/core/src/facade/errors.js')
  ),
  new webpack.NormalModuleReplacementPlugin(
    /facade(\\|\/)lang/,
    root('node_modules/@angular/core/src/facade/lang.js')
  ),
  new webpack.NormalModuleReplacementPlugin(
    /facade(\\|\/)math/,
    root('node_modules/@angular/core/src/facade/math.js')
  ),
];
export var commonConfig = {
  // https://webpack.github.io/docs/configuration.html#devtool
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [root('node_modules')]
  },
  context: __dirname,
  output: {
    publicPath: '',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      // Support for *.json files.
      { test: /\.json$/, loader: 'json-loader' },

      // Support for CSS as raw text
      { test: /\.css$/, loader: 'raw-loader' },

      //sass loader implementation
      {
        test: /\.scss$/, loaders: ['raw-loader', 'sass-loader'], // sass-loader not scss-loader
      },

      // support for .html as raw text
      { test: /\.html$/, loader: 'raw-loader' },

      // Inline base64 URLs for <=8k images, direct URLs for the rest
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: 'url-loader',
        query: { limite: "10000" },
      },

      // Support for .ts files.
      {
        test: /\.ts$/,
        loaders: ['@ngtools/webpack'],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
    ],
  },
  plugins: [
    // Use commonPlugins.
  ]
};

// Client.
export var clientPlugins = [
  new ngtools.AotPlugin({
    tsConfigPath: './tsconfig.client.aot.json',
  }),
  new webpack.NormalModuleReplacementPlugin(
    /@angular(\\|\/)upgrade/,
    root('empty.js')
  ),
  // problem with platformUniversalDynamic on the server/client
  new webpack.NormalModuleReplacementPlugin(
    /@angular(\\|\/)compiler/,
    root('empty.js')
  ),
  new webpack.NormalModuleReplacementPlugin(
    /@angular(\\|\/)platform-browser-dynamic/,
    root('empty.js')
  ),
  new webpack.NormalModuleReplacementPlugin(
    /dom(\\|\/)debug(\\|\/)ng_probe/,
    root('empty.js')
  ),
  new webpack.NormalModuleReplacementPlugin(
    /dom(\\|\/)debug(\\|\/)by/,
    root('empty.js')
  ),
  new webpack.NormalModuleReplacementPlugin(
    /src(\\|\/)debug(\\|\/)debug_node/,
    root('empty.js')
  ),
  new webpack.NormalModuleReplacementPlugin(
    /src(\\|\/)debug(\\|\/)debug_renderer/,
    root('empty.js')
  ),
];
export var clientConfig = {
  target: 'web',
  entry: './src/client.aot.ts',
  output: {
    path: root('dist/client')
  },
  node: {
    global: true,
    crypto: 'empty',
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false
  }
};


// Server.
export var serverPlugins = [
  new ngtools.AotPlugin({
    tsConfigPath: './tsconfig.server.aot.json',
  }),
  new webpack.optimize.UglifyJsPlugin({
    // beautify: true,
    mangle: false, // to ensure process.env still works
    output: {
      comments: false
    },
    compress: {
      warnings: false,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true,
      negate_iife: false // we need this for lazy v8
    },
    sourceMap: true
  }),
];
export var serverConfig = {
  target: 'node',
  entry: './src/server.aot.ts', // use the entry file of the node server if everything is ts rather than es5
  output: {
    filename: 'index.js',
    path: root('dist/server'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      { test: /@angular(\\|\/)material/, use: "imports-loader?window=>global" }
    ],
  },
  externals: includeClientPackages(
    /@angularclass|@angular|angular2-|ng2-|ng-|@ng-|angular-|@ngrx|ngrx-|@angular2|ionic|@ionic|-angular2|-ng2|-ng/
  ),
  node: {
    global: true,
    crypto: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  }
};

export default [
  // Client
  webpackMerge(clone(commonConfig), clientConfig, { plugins: clientPlugins.concat(commonPlugins) }),

  // Server
  webpackMerge(clone(commonConfig), serverConfig, { plugins: serverPlugins.concat(commonPlugins) })
];




// Helpers
export function includeClientPackages(packages, localModule?: string[]) {
  return function (context, request, cb) {
    if (localModule instanceof RegExp && localModule.test(request)) {
      return cb();
    }
    if (packages instanceof RegExp && packages.test(request)) {
      return cb();
    }
    if (Array.isArray(packages) && packages.indexOf(request) !== -1) {
      return cb();
    }
    if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
      return cb(null, 'commonjs ' + request);
    }
    return cb();
  };
}

export function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
