var path = require('path');
var zlib = require('zlib');


// Helper functions

function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

function gzipMaxLevel(buffer, callback) {
  return zlib['gzip'](buffer, {level: 9}, callback);
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

function rootNode(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return root.apply(path, ['node_modules'].concat(args));
}

function prependExt(extensions, args) {
  args = args || [];
  if (!Array.isArray(args)) { args = [args] }
  return extensions.reduce(function(memo, val) {
    return memo.concat(val, args.map(function(prefix) {
      return prefix + val;
    }));
  }, ['']);
}

function checkNodeImport(context, request, cb) {
    if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
        cb(null, 'commonjs ' + request); return;
    }
    cb();
}

exports.hasProcessFlag = hasProcessFlag;
exports.gzipMaxLevel = gzipMaxLevel;
exports.root = root;
exports.rootNode = rootNode;
exports.prependExt = prependExt;
exports.prepend = prependExt;
exports.checkNodeImport = checkNodeImport;