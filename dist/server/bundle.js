/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Library/WebServer/Documents/myblog-angular2";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";
	var path = __webpack_require__(27);
	var express = __webpack_require__(26);
	__webpack_require__(24);
	var angular2_universal_preview_1 = __webpack_require__(23);
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(3);
	__webpack_require__(28);
	__webpack_require__(29);
	var app_1 = __webpack_require__(16);
	var app = express();
	var root = path.join(path.resolve(__dirname, '..'));
	core_1.enableProdMode();
	app.engine('.html', angular2_universal_preview_1.expressEngine);
	app.set('views', __dirname);
	app.set('view engine', 'html');
	function ngApp(req, res) {
	    var baseUrl = '/';
	    var url = req.originalUrl || '/';
	    res.render('index', {
	        directives: [app_1.App],
	        providers: [
	            core_1.provide(router_1.APP_BASE_HREF, { useValue: baseUrl }),
	            core_1.provide(angular2_universal_preview_1.REQUEST_URL, { useValue: url }),
	            router_1.ROUTER_PROVIDERS,
	            angular2_universal_preview_1.NODE_LOCATION_PROVIDERS,
	            angular2_universal_preview_1.NODE_PRELOAD_CACHE_HTTP_PROVIDERS
	        ],
	        async: true,
	        preboot: true,
	        precache: true,
	    });
	}
	app.use(express.static(root));
	app.use('/', ngApp);
	app.use('/blog/:title', ngApp);
	app.use('/about', ngApp);
	app.listen(80, function () {
	});

	/* WEBPACK VAR INJECTION */}.call(exports, "src"))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2/core");

/***/ },
/* 2 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("angular2/router");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2/common");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(3);
	var css = __webpack_require__(12);
	var logo = __webpack_require__(22);
	var SiteIntro = (function () {
	    function SiteIntro() {
	    }
	    SiteIntro = __decorate([
	        core_1.Component({
	            selector: 'site-intro',
	            directives: [router_1.RouterLink],
	            styles: [("" + css)],
	            template: "<div class=\"site-intro\">\n  <a [routerLink]=\"['Home']\">\n    <img alt=\"logo_dark\" src=\"" + logo + "\"/>\n  </a>\n  <p class=\"site-intro__intro-text\">\n    Hi, my name is Joao Garin. I love travelling, programming and sports. I also enjoy coffee very much. Thank you for\n    visiting my blog.\n  </p>\n  <span class=\"site-intro__separator\">\n      <i class=\"fa fa-2x fa-list\">\n\n      </i>\n  </span>\n</div>"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SiteIntro);
	    return SiteIntro;
	}());
	exports.SiteIntro = SiteIntro;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(25);
	var blogitem_1 = __webpack_require__(15);
	var domain = __webpack_require__(14).domain;
	var BlogService = (function () {
	    function BlogService(http) {
	        this.blogitems = function (node_item) {
	            return http.get(domain + 'blog-items-fields/all')
	                .map(function (response) { return response.json().map(function (item) {
	                return new blogitem_1.BlogItem(item.field_image.replace("/blog_backoffice/", domain + "blog_backoffice/"), item.title, item.body, item.path.replace("/blog_backoffice/", ""), item.nid, item.created);
	            }); });
	        };
	        this.blogitemnode = function (title) {
	            return http.get(domain + 'get-alias-id/' + title).map(function (response_alias) { return response_alias.json().map(function (alias_item) {
	                return http.get(domain + 'blog_backoffice/get-node/' + alias_item.nid)
	                    .map(function (response) { return response.json().map(function (item) {
	                    return new blogitem_1.BlogItem(item.field_image.replace("/blog_backoffice/", domain + "blog_backoffice/"), item.title, item.body, item.path.replace("/blog_backoffice/", ""), item.nid, item.created);
	                }); });
	            }); });
	        };
	    }
	    BlogService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], BlogService);
	    return BlogService;
	}());
	exports.BlogService = BlogService;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "/*\n* Background color for the theme\n*/\n/*\n* Menu color\n*/\n/*\n* Background for the computer mockup\n*/\n/*\n* Body text color\n*/\n/*\n* Primary color\n*/\n/*\n* Color secondary\n*/\n/*\n* Color normal grey\n*/\n/*\n* Color grey light\n*/\n/*\n* Color grey light\n*/\n/*\n* Color grey dark\n*/\n/*\n* Button primary color\n*/\n/*\n* Social backgrounds\n*/\n.hover-bg-twitter:focus,\n.hover-bg-twitter:hover {\n  color: #fff;\n  background: #00c7f7; }\n\n.hover-bg-facebook:focus,\n.hover-bg-facebook:hover {\n  color: #fff;\n  background: #335397; }\n\n.hover-bg-google-plus:focus,\n.hover-bg-google-plus:hover {\n  color: #fff;\n  background: #dd4a38; }\n\n.hover-bg-gplus:focus,\n.hover-bg-gplus:hover {\n  color: #fff;\n  background: #dd4a38; }\n\n.hover-bg-instagram:focus,\n.hover-bg-instagram:hover {\n  color: #fff;\n  background: #82685a; }\n\n.hover-bg-vimeo:focus,\n.hover-bg-vimeo:hover {\n  color: #fff;\n  background: #63879c; }\n\n.hover-bg-flickr:focus,\n.hover-bg-flickr:hover {\n  color: #fff;\n  background: #0061db; }\n\n.hover-bg-github:focus,\n.hover-bg-github:hover {\n  color: #fff;\n  background: #3b3b3b; }\n\n.hover-bg-pinterest:focus,\n.hover-bg-pinterest:hover {\n  color: #fff;\n  background: #bc2725; }\n\n.hover-bg-tumblr:focus,\n.hover-bg-tumblr:hover {\n  color: #fff;\n  background: #586980; }\n\n.hover-bg-linkedin:focus,\n.hover-bg-linkedin:hover {\n  color: #fff;\n  background: #018faf; }\n\n.hover-bg-dribble:focus,\n.hover-bg-dribble:hover {\n  color: #fff;\n  background: #ea73a0; }\n\n.hover-bg-stumbleupon:focus,\n.hover-bg-stumbleupon:hover {\n  color: #fff;\n  background: #ea4b24; }\n\n.hover-bg-lastfm:focus,\n.hover-bg-lastfm:hover {\n  color: #fff;\n  background: #b80638; }\n\n.hover-bg-evernote:focus,\n.hover-bg-evernote:hover {\n  color: #fff;\n  background: #3bab27; }\n\n.hover-bg-skype:focus,\n.hover-bg-skype:hover {\n  color: #fff;\n  background: #skype; }\n\n.hover-bg-soundcloud:focus,\n.hover-bg-soundcloud:hover {\n  color: #fff;\n  background: #06f; }\n\n.hover-bg-behance:focus,\n.hover-bg-behance:hover {\n  color: #fff;\n  background: #b80638; }\n\n.hover-bg-rss:focus,\n.hover-bg-rss:hover {\n  color: #fff;\n  background: #f79638; }\n\n.hover-bg-youtube:focus,\n.hover-bg-youtube:hover {\n  color: #fff;\n  background: #cc181e; }\n\n.hover-bg-drupal:focus,\n.hover-bg-drupal:hover {\n  color: #fff;\n  background: #0678be; }\n\n/**\n * Breakpoint for very small viewports with a one column layout.\n */\n/**\n * Breakpoint for slightly bigger viewports with a column layout.\n */\n/**\n * Medium, tablet like viewports using a 12 column layout.\n */\n/**\n * Big viewport using the full width using a 24 column layout.\n */\n/**\n * Dense pixel ration devices.\n */\n/**\n * Tells the u mixin to use pixel values only.\n */\n/**\n * Returns a number from a string.\n */\n/**\n * Base font size without the units.\n * @access private\n */\n/**\n * Base line height without the units.\n * @access private\n */\n/**\n * Outputs the given value as pixel or rems depending on the given unit and the on the $px-only. It\n * acts as rem fallback for ie <= 8.\n * @link http://davidwalsh.name/rem-px-browser-function-sass\n * @param {px | rem} $values - A value which should be rendered to rem.\n * @param {boolean} $use-px-only - Determines if the function should return px based on the rems.\n * @example scss\n *     $base-font-size: 14px;\n *     $px-only: false;\n *     font-size: u(2rem);\n *     // css output:\n *     font-size: 2rem;\n *\n *     $base-font-size: 14px;\n *     $px-only: true;\n *     font-size: u(2rem);\n *     // css output:\n *     font-size: 28px;\n */\n/**\n * Get the line height for the given font size, which should be in pixels or rem.\n * Forked from inuit css.\n * @link https://github.com/inuitcss/tools.mixins\n * @param {px | rem} $font-size - The font size.\n * @param {boolean} $use-px-only - Determines if the return value should be in pxs. Use full when setting the\n *     line-height in a :before or :after due to a ie bug: https://connect.microsoft.com/IE/feedback/details/776744\n */\n/**\n * Adjust the line height to the given font size, which should be in pixels or rem.\n * Forked from inuit css.\n * @link https://github.com/inuitcss/tools.mixins\n * @param {px | rem} $font-size - The new font size.\n * @param {rem | auto} $font-size (auto) - If auto the mixin will automatically calculate the right size to\n *     keep the vertical rhythm.\n * @param {boolean} $lineheight-px-only - Determines if the line height value should be in pxs. Use full when using this\n *     mixin in a :before or :after due to a ie bug: https://connect.microsoft.com/IE/feedback/details/776744\n */\n/**\n * Calculates the space needed for the given lines and a amount of space was already is used by\n * element another.\n * @param {number} $lines - Amount of lines that should be used for the space.\n * @param {px|rem} $subtract - Amount of space that should be subtracted from the lines.\n * @return {rem|px} Either rem or pixels depending on the $px-only variable.\n */\n/**\n * Adds a margin top without destroying the vertical rhythm.\n */\n/**\n * Adds a margin bottom without destroying the vertical rhythm.\n */\n/**\n * Adds a padding top without destroying the vertical rhythm.\n */\n/**\n * Adds a padding bottom without destroying the vertical rhythm.\n */\n/**\n * Applies a border to one side of an element, while fixing the vertical rhythm using padding.\n * Forked from\n * @link https://gist.github.com/ry5n/2026666\n * @param {top | left | right | bottom} $side - The side to which the border should be applied.\n * @param {list|none} $border - A list in the order of border width in px, border style and border color.\n * @param {number} $lines (1) - The number of lines which should be used as padding to keep the vertical\n *     rhythm.\n */\n/**\n * Apply an equal border to all sides, while fixing the vertical rhythm using padding.\n * Forked from\n * @link https://gist.github.com/ry5n/2026666\n * @param {list|none} $border - A list in the order of border width in px, border style and border color.\n * @param {number} $lines (1) - The number of lines which should be used as padding to keep the\n *     vertical rhythm.\n */\n/**\n * Removes the the border and padding from an element.\n */\n/**\n * Apply a border on a given side and adds a padding and margin to that same side.\n * @param {top | left | right | bottom} $side - The side to which the border should be applied.\n * @param {list|none} $border - A list in the order of border width in px, border style and border color.\n * @param {number} $lines (1) - The number of lines which should be used as padding and margin to\n *     keep the vertical rhythm.\n */\n.blog_header {\n  height: 60px;\n  background: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 10;\n  background: #34393F; }\n  .blog_header .menu_toggle {\n    float: left;\n    color: #ff3366; }\n  .blog_header .icon-list {\n    float: right; }\n  .blog_header .icon-list a,\n  .blog_header .menu_toggle a {\n    width: 60px;\n    height: 60px;\n    display: inline-block;\n    line-height: 60px;\n    font-size: 20px;\n    text-align: center;\n    -webkit-transition: all 0.5s ease;\n    -moz-transition: all 0.5s ease;\n    -ms-transition: all 0.5s ease;\n    transition: all 0.5s ease;\n    margin-right: -5px;\n    color: white; }\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "/*\n* Background color for the theme\n*/\n/*\n* Menu color\n*/\n/*\n* Background for the computer mockup\n*/\n/*\n* Body text color\n*/\n/*\n* Primary color\n*/\n/*\n* Color secondary\n*/\n/*\n* Color normal grey\n*/\n/*\n* Color grey light\n*/\n/*\n* Color grey light\n*/\n/*\n* Color grey dark\n*/\n/*\n* Button primary color\n*/\n/*\n* Social backgrounds\n*/\n.hover-bg-twitter:focus,\n.hover-bg-twitter:hover {\n  color: #fff;\n  background: #00c7f7; }\n\n.hover-bg-facebook:focus,\n.hover-bg-facebook:hover {\n  color: #fff;\n  background: #335397; }\n\n.hover-bg-google-plus:focus,\n.hover-bg-google-plus:hover {\n  color: #fff;\n  background: #dd4a38; }\n\n.hover-bg-gplus:focus,\n.hover-bg-gplus:hover {\n  color: #fff;\n  background: #dd4a38; }\n\n.hover-bg-instagram:focus,\n.hover-bg-instagram:hover {\n  color: #fff;\n  background: #82685a; }\n\n.hover-bg-vimeo:focus,\n.hover-bg-vimeo:hover {\n  color: #fff;\n  background: #63879c; }\n\n.hover-bg-flickr:focus,\n.hover-bg-flickr:hover {\n  color: #fff;\n  background: #0061db; }\n\n.hover-bg-github:focus,\n.hover-bg-github:hover {\n  color: #fff;\n  background: #3b3b3b; }\n\n.hover-bg-pinterest:focus,\n.hover-bg-pinterest:hover {\n  color: #fff;\n  background: #bc2725; }\n\n.hover-bg-tumblr:focus,\n.hover-bg-tumblr:hover {\n  color: #fff;\n  background: #586980; }\n\n.hover-bg-linkedin:focus,\n.hover-bg-linkedin:hover {\n  color: #fff;\n  background: #018faf; }\n\n.hover-bg-dribble:focus,\n.hover-bg-dribble:hover {\n  color: #fff;\n  background: #ea73a0; }\n\n.hover-bg-stumbleupon:focus,\n.hover-bg-stumbleupon:hover {\n  color: #fff;\n  background: #ea4b24; }\n\n.hover-bg-lastfm:focus,\n.hover-bg-lastfm:hover {\n  color: #fff;\n  background: #b80638; }\n\n.hover-bg-evernote:focus,\n.hover-bg-evernote:hover {\n  color: #fff;\n  background: #3bab27; }\n\n.hover-bg-skype:focus,\n.hover-bg-skype:hover {\n  color: #fff;\n  background: #skype; }\n\n.hover-bg-soundcloud:focus,\n.hover-bg-soundcloud:hover {\n  color: #fff;\n  background: #06f; }\n\n.hover-bg-behance:focus,\n.hover-bg-behance:hover {\n  color: #fff;\n  background: #b80638; }\n\n.hover-bg-rss:focus,\n.hover-bg-rss:hover {\n  color: #fff;\n  background: #f79638; }\n\n.hover-bg-youtube:focus,\n.hover-bg-youtube:hover {\n  color: #fff;\n  background: #cc181e; }\n\n.hover-bg-drupal:focus,\n.hover-bg-drupal:hover {\n  color: #fff;\n  background: #0678be; }\n\n/**\n * Breakpoint for very small viewports with a one column layout.\n */\n/**\n * Breakpoint for slightly bigger viewports with a column layout.\n */\n/**\n * Medium, tablet like viewports using a 12 column layout.\n */\n/**\n * Big viewport using the full width using a 24 column layout.\n */\n/**\n * Dense pixel ration devices.\n */\n/**\n * Tells the u mixin to use pixel values only.\n */\n/**\n * Returns a number from a string.\n */\n/**\n * Base font size without the units.\n * @access private\n */\n/**\n * Base line height without the units.\n * @access private\n */\n/**\n * Outputs the given value as pixel or rems depending on the given unit and the on the $px-only. It\n * acts as rem fallback for ie <= 8.\n * @link http://davidwalsh.name/rem-px-browser-function-sass\n * @param {px | rem} $values - A value which should be rendered to rem.\n * @param {boolean} $use-px-only - Determines if the function should return px based on the rems.\n * @example scss\n *     $base-font-size: 14px;\n *     $px-only: false;\n *     font-size: u(2rem);\n *     // css output:\n *     font-size: 2rem;\n *\n *     $base-font-size: 14px;\n *     $px-only: true;\n *     font-size: u(2rem);\n *     // css output:\n *     font-size: 28px;\n */\n/**\n * Get the line height for the given font size, which should be in pixels or rem.\n * Forked from inuit css.\n * @link https://github.com/inuitcss/tools.mixins\n * @param {px | rem} $font-size - The font size.\n * @param {boolean} $use-px-only - Determines if the return value should be in pxs. Use full when setting the\n *     line-height in a :before or :after due to a ie bug: https://connect.microsoft.com/IE/feedback/details/776744\n */\n/**\n * Adjust the line height to the given font size, which should be in pixels or rem.\n * Forked from inuit css.\n * @link https://github.com/inuitcss/tools.mixins\n * @param {px | rem} $font-size - The new font size.\n * @param {rem | auto} $font-size (auto) - If auto the mixin will automatically calculate the right size to\n *     keep the vertical rhythm.\n * @param {boolean} $lineheight-px-only - Determines if the line height value should be in pxs. Use full when using this\n *     mixin in a :before or :after due to a ie bug: https://connect.microsoft.com/IE/feedback/details/776744\n */\n/**\n * Calculates the space needed for the given lines and a amount of space was already is used by\n * element another.\n * @param {number} $lines - Amount of lines that should be used for the space.\n * @param {px|rem} $subtract - Amount of space that should be subtracted from the lines.\n * @return {rem|px} Either rem or pixels depending on the $px-only variable.\n */\n/**\n * Adds a margin top without destroying the vertical rhythm.\n */\n/**\n * Adds a margin bottom without destroying the vertical rhythm.\n */\n/**\n * Adds a padding top without destroying the vertical rhythm.\n */\n/**\n * Adds a padding bottom without destroying the vertical rhythm.\n */\n/**\n * Applies a border to one side of an element, while fixing the vertical rhythm using padding.\n * Forked from\n * @link https://gist.github.com/ry5n/2026666\n * @param {top | left | right | bottom} $side - The side to which the border should be applied.\n * @param {list|none} $border - A list in the order of border width in px, border style and border color.\n * @param {number} $lines (1) - The number of lines which should be used as padding to keep the vertical\n *     rhythm.\n */\n/**\n * Apply an equal border to all sides, while fixing the vertical rhythm using padding.\n * Forked from\n * @link https://gist.github.com/ry5n/2026666\n * @param {list|none} $border - A list in the order of border width in px, border style and border color.\n * @param {number} $lines (1) - The number of lines which should be used as padding to keep the\n *     vertical rhythm.\n */\n/**\n * Removes the the border and padding from an element.\n */\n/**\n * Apply a border on a given side and adds a padding and margin to that same side.\n * @param {top | left | right | bottom} $side - The side to which the border should be applied.\n * @param {list|none} $border - A list in the order of border width in px, border style and border color.\n * @param {number} $lines (1) - The number of lines which should be used as padding and margin to\n *     keep the vertical rhythm.\n */\n.nav_sidebar {\n  visibility: hidden;\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: white;\n  width: 250px;\n  height: 100%;\n  border-right: 1px solid #dedede;\n  -webkit-transition: all 0.5s ease;\n  -moz-transition: all 0.5s ease;\n  -ms-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n  text-align: center;\n  padding-top: 80px; }\n  .nav_sidebar ul {\n    padding-left: 0;\n    text-align: center; }\n  .nav_sidebar li {\n    width: 100%; }\n    .nav_sidebar li a {\n      width: 100%;\n      padding: 10px 30px;\n      display: block;\n      text-transform: uppercase;\n      font-size: 0.7rem;\n      font-family: 'Josefin Sans', sans-serif;\n      letter-spacing: 1px;\n      text-transform: uppercase;\n      font-weight: bold; }\n  .nav_sidebar.opened {\n    visibility: visible;\n    opacity: 1;\n    z-index: 9; }\n\n.menu_toggle {\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  left: 0; }\n  .menu_toggle a {\n    width: 60px;\n    height: 60px;\n    display: inline-block;\n    line-height: 60px;\n    font-size: 20px;\n    text-align: center;\n    cursor: pointer;\n    -webkit-transition: all 0.5s ease;\n    -moz-transition: all 0.5s ease;\n    -ms-transition: all 0.5s ease;\n    transition: all 0.5s ease;\n    transition-duration: 0.8s;\n    transition-property: transform; }\n    .menu_toggle a:hover {\n      transform: rotate(360deg);\n      -webkit-transform: rotate(360deg); }\n\n.user-pic {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px; }\n  .user-pic img {\n    max-width: 80px;\n    height: auto;\n    -webkit-border-radius: 100%;\n    -moz-border-radius: 100%;\n    -ms-border-radius: 100%;\n    border-radius: 100%;\n    padding: 2px;\n    border: 1px solid #e5e5e5; }\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "/**\n * Breakpoint for very small viewports with a one column layout.\n */\n/**\n * Breakpoint for slightly bigger viewports with a column layout.\n */\n/**\n * Medium, tablet like viewports using a 12 column layout.\n */\n/**\n * Big viewport using the full width using a 24 column layout.\n */\n/**\n * Dense pixel ration devices.\n */\n/**\n * Tells the u mixin to use pixel values only.\n */\n/**\n * Returns a number from a string.\n */\n/**\n * Base font size without the units.\n * @access private\n */\n/**\n * Base line height without the units.\n * @access private\n */\n/**\n * Outputs the given value as pixel or rems depending on the given unit and the on the $px-only. It\n * acts as rem fallback for ie <= 8.\n * @link http://davidwalsh.name/rem-px-browser-function-sass\n * @param {px | rem} $values - A value which should be rendered to rem.\n * @param {boolean} $use-px-only - Determines if the function should return px based on the rems.\n * @example scss\n *     $base-font-size: 14px;\n *     $px-only: false;\n *     font-size: u(2rem);\n *     // css output:\n *     font-size: 2rem;\n *\n *     $base-font-size: 14px;\n *     $px-only: true;\n *     font-size: u(2rem);\n *     // css output:\n *     font-size: 28px;\n */\n/**\n * Get the line height for the given font size, which should be in pixels or rem.\n * Forked from inuit css.\n * @link https://github.com/inuitcss/tools.mixins\n * @param {px | rem} $font-size - The font size.\n * @param {boolean} $use-px-only - Determines if the return value should be in pxs. Use full when setting the\n *     line-height in a :before or :after due to a ie bug: https://connect.microsoft.com/IE/feedback/details/776744\n */\n/**\n * Adjust the line height to the given font size, which should be in pixels or rem.\n * Forked from inuit css.\n * @link https://github.com/inuitcss/tools.mixins\n * @param {px | rem} $font-size - The new font size.\n * @param {rem | auto} $font-size (auto) - If auto the mixin will automatically calculate the right size to\n *     keep the vertical rhythm.\n * @param {boolean} $lineheight-px-only - Determines if the line height value should be in pxs. Use full when using this\n *     mixin in a :before or :after due to a ie bug: https://connect.microsoft.com/IE/feedback/details/776744\n */\n/**\n * Calculates the space needed for the given lines and a amount of space was already is used by\n * element another.\n * @param {number} $lines - Amount of lines that should be used for the space.\n * @param {px|rem} $subtract - Amount of space that should be subtracted from the lines.\n * @return {rem|px} Either rem or pixels depending on the $px-only variable.\n */\n/**\n * Adds a margin top without destroying the vertical rhythm.\n */\n/**\n * Adds a margin bottom without destroying the vertical rhythm.\n */\n/**\n * Adds a padding top without destroying the vertical rhythm.\n */\n/**\n * Adds a padding bottom without destroying the vertical rhythm.\n */\n/**\n * Applies a border to one side of an element, while fixing the vertical rhythm using padding.\n * Forked from\n * @link https://gist.github.com/ry5n/2026666\n * @param {top | left | right | bottom} $side - The side to which the border should be applied.\n * @param {list|none} $border - A list in the order of border width in px, border style and border color.\n * @param {number} $lines (1) - The number of lines which should be used as padding to keep the vertical\n *     rhythm.\n */\n/**\n * Apply an equal border to all sides, while fixing the vertical rhythm using padding.\n * Forked from\n * @link https://gist.github.com/ry5n/2026666\n * @param {list|none} $border - A list in the order of border width in px, border style and border color.\n * @param {number} $lines (1) - The number of lines which should be used as padding to keep the\n *     vertical rhythm.\n */\n/**\n * Removes the the border and padding from an element.\n */\n/**\n * Apply a border on a given side and adds a padding and margin to that same side.\n * @param {top | left | right | bottom} $side - The side to which the border should be applied.\n * @param {list|none} $border - A list in the order of border width in px, border style and border color.\n * @param {number} $lines (1) - The number of lines which should be used as padding and margin to\n *     keep the vertical rhythm.\n */\n.about {\n  margin-top: 200px; }\n  @media (min-width: 800px) {\n    .about {\n      margin-top: 0px;\n      overflow: hidden;\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      -webkit-transition: all 0.5s ease;\n      -moz-transition: all 0.5s ease;\n      -ms-transition: all 0.5s ease;\n      transition: all 0.5s ease; } }\n\n@media (min-width: 800px) {\n  .about-text {\n    position: absolute;\n    left: 0;\n    width: 50%;\n    height: 100%;\n    display: table; }\n    .about-text .text-inner {\n      display: table-cell;\n      vertical-align: middle;\n      padding-left: 100px;\n      padding-bottom: 100px; } }\n\n.about__image-background {\n  display: block;\n  width: 100%;\n  height: 200px;\n  right: 0%;\n  top: 0;\n  position: absolute; }\n  .about__image-background .inner {\n    background: url(https://images.unsplash.com/photo-1418743342338-5ee869c68e95?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=4ddc1683b10c2942c5b38782531d9f9e);\n    background-size: cover;\n    height: 100%; }\n  @media (min-width: 800px) {\n    .about__image-background {\n      display: block;\n      width: 100%;\n      top: inherit;\n      height: 200%;\n      right: -50%;\n      position: absolute;\n      transform: rotate(-45deg);\n      overflow: hidden;\n      z-index: 9; }\n      .about__image-background .inner {\n        transform: rotate(45deg);\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: -20%;\n        top: -50%; } }\n  @media (min-width: 1500px) {\n    .about__image-background {\n      width: 140%;\n      right: -80%; } }\n\n.call-to-action {\n  margin-top: 2rem; }\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "/*\n* Background color for the theme\n*/\n/*\n* Menu color\n*/\n/*\n* Background for the computer mockup\n*/\n/*\n* Body text color\n*/\n/*\n* Primary color\n*/\n/*\n* Color secondary\n*/\n/*\n* Color normal grey\n*/\n/*\n* Color grey light\n*/\n/*\n* Color grey light\n*/\n/*\n* Color grey dark\n*/\n/*\n* Button primary color\n*/\n/*\n* Social backgrounds\n*/\n.hover-bg-twitter:focus,\n.hover-bg-twitter:hover {\n  color: #fff;\n  background: #00c7f7; }\n\n.hover-bg-facebook:focus,\n.hover-bg-facebook:hover {\n  color: #fff;\n  background: #335397; }\n\n.hover-bg-google-plus:focus,\n.hover-bg-google-plus:hover {\n  color: #fff;\n  background: #dd4a38; }\n\n.hover-bg-gplus:focus,\n.hover-bg-gplus:hover {\n  color: #fff;\n  background: #dd4a38; }\n\n.hover-bg-instagram:focus,\n.hover-bg-instagram:hover {\n  color: #fff;\n  background: #82685a; }\n\n.hover-bg-vimeo:focus,\n.hover-bg-vimeo:hover {\n  color: #fff;\n  background: #63879c; }\n\n.hover-bg-flickr:focus,\n.hover-bg-flickr:hover {\n  color: #fff;\n  background: #0061db; }\n\n.hover-bg-github:focus,\n.hover-bg-github:hover {\n  color: #fff;\n  background: #3b3b3b; }\n\n.hover-bg-pinterest:focus,\n.hover-bg-pinterest:hover {\n  color: #fff;\n  background: #bc2725; }\n\n.hover-bg-tumblr:focus,\n.hover-bg-tumblr:hover {\n  color: #fff;\n  background: #586980; }\n\n.hover-bg-linkedin:focus,\n.hover-bg-linkedin:hover {\n  color: #fff;\n  background: #018faf; }\n\n.hover-bg-dribble:focus,\n.hover-bg-dribble:hover {\n  color: #fff;\n  background: #ea73a0; }\n\n.hover-bg-stumbleupon:focus,\n.hover-bg-stumbleupon:hover {\n  color: #fff;\n  background: #ea4b24; }\n\n.hover-bg-lastfm:focus,\n.hover-bg-lastfm:hover {\n  color: #fff;\n  background: #b80638; }\n\n.hover-bg-evernote:focus,\n.hover-bg-evernote:hover {\n  color: #fff;\n  background: #3bab27; }\n\n.hover-bg-skype:focus,\n.hover-bg-skype:hover {\n  color: #fff;\n  background: #skype; }\n\n.hover-bg-soundcloud:focus,\n.hover-bg-soundcloud:hover {\n  color: #fff;\n  background: #06f; }\n\n.hover-bg-behance:focus,\n.hover-bg-behance:hover {\n  color: #fff;\n  background: #b80638; }\n\n.hover-bg-rss:focus,\n.hover-bg-rss:hover {\n  color: #fff;\n  background: #f79638; }\n\n.hover-bg-youtube:focus,\n.hover-bg-youtube:hover {\n  color: #fff;\n  background: #cc181e; }\n\n.hover-bg-drupal:focus,\n.hover-bg-drupal:hover {\n  color: #fff;\n  background: #0678be; }\n\n/**\n * Breakpoint for very small viewports with a one column layout.\n */\n/**\n * Breakpoint for slightly bigger viewports with a column layout.\n */\n/**\n * Medium, tablet like viewports using a 12 column layout.\n */\n/**\n * Big viewport using the full width using a 24 column layout.\n */\n/**\n * Dense pixel ration devices.\n */\n/**\n * Tells the u mixin to use pixel values only.\n */\n/**\n * Returns a number from a string.\n */\n/**\n * Base font size without the units.\n * @access private\n */\n/**\n * Base line height without the units.\n * @access private\n */\n/**\n * Outputs the given value as pixel or rems depending on the given unit and the on the $px-only. It\n * acts as rem fallback for ie <= 8.\n * @link http://davidwalsh.name/rem-px-browser-function-sass\n * @param {px | rem} $values - A value which should be rendered to rem.\n * @param {boolean} $use-px-only - Determines if the function should return px based on the rems.\n * @example scss\n *     $base-font-size: 14px;\n *     $px-only: false;\n *     font-size: u(2rem);\n *     // css output:\n *     font-size: 2rem;\n *\n *     $base-font-size: 14px;\n *     $px-only: true;\n *     font-size: u(2rem);\n *     // css output:\n *     font-size: 28px;\n */\n/**\n * Get the line height for the given font size, which should be in pixels or rem.\n * Forked from inuit css.\n * @link https://github.com/inuitcss/tools.mixins\n * @param {px | rem} $font-size - The font size.\n * @param {boolean} $use-px-only - Determines if the return value should be in pxs. Use full when setting the\n *     line-height in a :before or :after due to a ie bug: https://connect.microsoft.com/IE/feedback/details/776744\n */\n/**\n * Adjust the line height to the given font size, which should be in pixels or rem.\n * Forked from inuit css.\n * @link https://github.com/inuitcss/tools.mixins\n * @param {px | rem} $font-size - The new font size.\n * @param {rem | auto} $font-size (auto) - If auto the mixin will automatically calculate the right size to\n *     keep the vertical rhythm.\n * @param {boolean} $lineheight-px-only - Determines if the line height value should be in pxs. Use full when using this\n *     mixin in a :before or :after due to a ie bug: https://connect.microsoft.com/IE/feedback/details/776744\n */\n/**\n * Calculates the space needed for the given lines and a amount of space was already is used by\n * element another.\n * @param {number} $lines - Amount of lines that should be used for the space.\n * @param {px|rem} $subtract - Amount of space that should be subtracted from the lines.\n * @return {rem|px} Either rem or pixels depending on the $px-only variable.\n */\n/**\n * Adds a margin top without destroying the vertical rhythm.\n */\n/**\n * Adds a margin bottom without destroying the vertical rhythm.\n */\n/**\n * Adds a padding top without destroying the vertical rhythm.\n */\n/**\n * Adds a padding bottom without destroying the vertical rhythm.\n */\n/**\n * Applies a border to one side of an element, while fixing the vertical rhythm using padding.\n * Forked from\n * @link https://gist.github.com/ry5n/2026666\n * @param {top | left | right | bottom} $side - The side to which the border should be applied.\n * @param {list|none} $border - A list in the order of border width in px, border style and border color.\n * @param {number} $lines (1) - The number of lines which should be used as padding to keep the vertical\n *     rhythm.\n */\n/**\n * Apply an equal border to all sides, while fixing the vertical rhythm using padding.\n * Forked from\n * @link https://gist.github.com/ry5n/2026666\n * @param {list|none} $border - A list in the order of border width in px, border style and border color.\n * @param {number} $lines (1) - The number of lines which should be used as padding to keep the\n *     vertical rhythm.\n */\n/**\n * Removes the the border and padding from an element.\n */\n/**\n * Apply a border on a given side and adds a padding and margin to that same side.\n * @param {top | left | right | bottom} $side - The side to which the border should be applied.\n * @param {list|none} $border - A list in the order of border width in px, border style and border color.\n * @param {number} $lines (1) - The number of lines which should be used as padding and margin to\n *     keep the vertical rhythm.\n */\n.blog-list {\n  text-align: center; }\n  .blog-list input.form-control {\n    margin-bottom: 3rem;\n    padding: 0.9rem;\n    width: 60%;\n    text-align: center;\n    border-radius: 2px;\n    box-shadow: none;\n    font-size: 14px;\n    font-family: \"Open Sans\", \"open-sans\", sans-serif;\n    border: 1px solid #e5e5e5; }\n    .blog-list input.form-control:focus {\n      -moz-box-shadow: none;\n      -webkit-box-shadow: none;\n      -ms-box-shadow: none;\n      box-shadow: none;\n      border: 1px solid #ff3366;\n      outline: none; }\n\n.blog_item {\n  text-align: left;\n  margin-bottom: 8rem; }\n  @media (min-width: 800px) {\n    .blog_item {\n      max-width: 700px;\n      margin-left: auto;\n      margin-right: auto; } }\n  .blog_item h2 {\n    margin-bottom: 2rem; }\n  .blog_item h1 {\n    margin-bottom: 3rem; }\n  .blog_item .post-body {\n    margin: 2rem auto; }\n  .blog_item .comments {\n    margin: 2rem auto; }\n  .blog_item .blog-item__image img {\n    max-width: 100%;\n    height: auto; }\n  .blog_item .full-post {\n    text-align: center;\n    margin-top: 20px;\n    display: inline-block;\n    width: 100%; }\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "/**\n * Breakpoint for very small viewports with a one column layout.\n */\n/**\n * Breakpoint for slightly bigger viewports with a column layout.\n */\n/**\n * Medium, tablet like viewports using a 12 column layout.\n */\n/**\n * Big viewport using the full width using a 24 column layout.\n */\n/**\n * Dense pixel ration devices.\n */\n/**\n * Tells the u mixin to use pixel values only.\n */\n/**\n * Returns a number from a string.\n */\n/**\n * Base font size without the units.\n * @access private\n */\n/**\n * Base line height without the units.\n * @access private\n */\n/**\n * Outputs the given value as pixel or rems depending on the given unit and the on the $px-only. It\n * acts as rem fallback for ie <= 8.\n * @link http://davidwalsh.name/rem-px-browser-function-sass\n * @param {px | rem} $values - A value which should be rendered to rem.\n * @param {boolean} $use-px-only - Determines if the function should return px based on the rems.\n * @example scss\n *     $base-font-size: 14px;\n *     $px-only: false;\n *     font-size: u(2rem);\n *     // css output:\n *     font-size: 2rem;\n *\n *     $base-font-size: 14px;\n *     $px-only: true;\n *     font-size: u(2rem);\n *     // css output:\n *     font-size: 28px;\n */\n/**\n * Get the line height for the given font size, which should be in pixels or rem.\n * Forked from inuit css.\n * @link https://github.com/inuitcss/tools.mixins\n * @param {px | rem} $font-size - The font size.\n * @param {boolean} $use-px-only - Determines if the return value should be in pxs. Use full when setting the\n *     line-height in a :before or :after due to a ie bug: https://connect.microsoft.com/IE/feedback/details/776744\n */\n/**\n * Adjust the line height to the given font size, which should be in pixels or rem.\n * Forked from inuit css.\n * @link https://github.com/inuitcss/tools.mixins\n * @param {px | rem} $font-size - The new font size.\n * @param {rem | auto} $font-size (auto) - If auto the mixin will automatically calculate the right size to\n *     keep the vertical rhythm.\n * @param {boolean} $lineheight-px-only - Determines if the line height value should be in pxs. Use full when using this\n *     mixin in a :before or :after due to a ie bug: https://connect.microsoft.com/IE/feedback/details/776744\n */\n/**\n * Calculates the space needed for the given lines and a amount of space was already is used by\n * element another.\n * @param {number} $lines - Amount of lines that should be used for the space.\n * @param {px|rem} $subtract - Amount of space that should be subtracted from the lines.\n * @return {rem|px} Either rem or pixels depending on the $px-only variable.\n */\n/**\n * Adds a margin top without destroying the vertical rhythm.\n */\n/**\n * Adds a margin bottom without destroying the vertical rhythm.\n */\n/**\n * Adds a padding top without destroying the vertical rhythm.\n */\n/**\n * Adds a padding bottom without destroying the vertical rhythm.\n */\n/**\n * Applies a border to one side of an element, while fixing the vertical rhythm using padding.\n * Forked from\n * @link https://gist.github.com/ry5n/2026666\n * @param {top | left | right | bottom} $side - The side to which the border should be applied.\n * @param {list|none} $border - A list in the order of border width in px, border style and border color.\n * @param {number} $lines (1) - The number of lines which should be used as padding to keep the vertical\n *     rhythm.\n */\n/**\n * Apply an equal border to all sides, while fixing the vertical rhythm using padding.\n * Forked from\n * @link https://gist.github.com/ry5n/2026666\n * @param {list|none} $border - A list in the order of border width in px, border style and border color.\n * @param {number} $lines (1) - The number of lines which should be used as padding to keep the\n *     vertical rhythm.\n */\n/**\n * Removes the the border and padding from an element.\n */\n/**\n * Apply a border on a given side and adds a padding and margin to that same side.\n * @param {top | left | right | bottom} $side - The side to which the border should be applied.\n * @param {list|none} $border - A list in the order of border width in px, border style and border color.\n * @param {number} $lines (1) - The number of lines which should be used as padding and margin to\n *     keep the vertical rhythm.\n */\n.blog_item {\n  text-align: left;\n  margin-bottom: 8rem; }\n  @media (min-width: 800px) {\n    .blog_item {\n      max-width: 700px;\n      margin-left: auto;\n      margin-right: auto; } }\n  .blog_item h2 {\n    margin-bottom: 2rem; }\n  .blog_item h1 {\n    margin-bottom: 3rem; }\n  .blog_item .post-body {\n    margin: 2rem auto; }\n  .blog_item .comments {\n    margin: 2rem auto; }\n  .blog_item .blog-item__image img {\n    max-width: 100%;\n    height: auto; }\n  .blog_item .full-post {\n    text-align: center;\n    margin-top: 20px;\n    display: inline-block;\n    width: 100%; }\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "/*\n* Background color for the theme\n*/\n/*\n* Menu color\n*/\n/*\n* Background for the computer mockup\n*/\n/*\n* Body text color\n*/\n/*\n* Primary color\n*/\n/*\n* Color secondary\n*/\n/*\n* Color normal grey\n*/\n/*\n* Color grey light\n*/\n/*\n* Color grey light\n*/\n/*\n* Color grey dark\n*/\n/*\n* Button primary color\n*/\n/*\n* Social backgrounds\n*/\n.hover-bg-twitter:focus,\n.hover-bg-twitter:hover {\n  color: #fff;\n  background: #00c7f7; }\n\n.hover-bg-facebook:focus,\n.hover-bg-facebook:hover {\n  color: #fff;\n  background: #335397; }\n\n.hover-bg-google-plus:focus,\n.hover-bg-google-plus:hover {\n  color: #fff;\n  background: #dd4a38; }\n\n.hover-bg-gplus:focus,\n.hover-bg-gplus:hover {\n  color: #fff;\n  background: #dd4a38; }\n\n.hover-bg-instagram:focus,\n.hover-bg-instagram:hover {\n  color: #fff;\n  background: #82685a; }\n\n.hover-bg-vimeo:focus,\n.hover-bg-vimeo:hover {\n  color: #fff;\n  background: #63879c; }\n\n.hover-bg-flickr:focus,\n.hover-bg-flickr:hover {\n  color: #fff;\n  background: #0061db; }\n\n.hover-bg-github:focus,\n.hover-bg-github:hover {\n  color: #fff;\n  background: #3b3b3b; }\n\n.hover-bg-pinterest:focus,\n.hover-bg-pinterest:hover {\n  color: #fff;\n  background: #bc2725; }\n\n.hover-bg-tumblr:focus,\n.hover-bg-tumblr:hover {\n  color: #fff;\n  background: #586980; }\n\n.hover-bg-linkedin:focus,\n.hover-bg-linkedin:hover {\n  color: #fff;\n  background: #018faf; }\n\n.hover-bg-dribble:focus,\n.hover-bg-dribble:hover {\n  color: #fff;\n  background: #ea73a0; }\n\n.hover-bg-stumbleupon:focus,\n.hover-bg-stumbleupon:hover {\n  color: #fff;\n  background: #ea4b24; }\n\n.hover-bg-lastfm:focus,\n.hover-bg-lastfm:hover {\n  color: #fff;\n  background: #b80638; }\n\n.hover-bg-evernote:focus,\n.hover-bg-evernote:hover {\n  color: #fff;\n  background: #3bab27; }\n\n.hover-bg-skype:focus,\n.hover-bg-skype:hover {\n  color: #fff;\n  background: #skype; }\n\n.hover-bg-soundcloud:focus,\n.hover-bg-soundcloud:hover {\n  color: #fff;\n  background: #06f; }\n\n.hover-bg-behance:focus,\n.hover-bg-behance:hover {\n  color: #fff;\n  background: #b80638; }\n\n.hover-bg-rss:focus,\n.hover-bg-rss:hover {\n  color: #fff;\n  background: #f79638; }\n\n.hover-bg-youtube:focus,\n.hover-bg-youtube:hover {\n  color: #fff;\n  background: #cc181e; }\n\n.hover-bg-drupal:focus,\n.hover-bg-drupal:hover {\n  color: #fff;\n  background: #0678be; }\n\n/**\n * Breakpoint for very small viewports with a one column layout.\n */\n/**\n * Breakpoint for slightly bigger viewports with a column layout.\n */\n/**\n * Medium, tablet like viewports using a 12 column layout.\n */\n/**\n * Big viewport using the full width using a 24 column layout.\n */\n/**\n * Dense pixel ration devices.\n */\n/**\n * Tells the u mixin to use pixel values only.\n */\n/**\n * Returns a number from a string.\n */\n/**\n * Base font size without the units.\n * @access private\n */\n/**\n * Base line height without the units.\n * @access private\n */\n/**\n * Outputs the given value as pixel or rems depending on the given unit and the on the $px-only. It\n * acts as rem fallback for ie <= 8.\n * @link http://davidwalsh.name/rem-px-browser-function-sass\n * @param {px | rem} $values - A value which should be rendered to rem.\n * @param {boolean} $use-px-only - Determines if the function should return px based on the rems.\n * @example scss\n *     $base-font-size: 14px;\n *     $px-only: false;\n *     font-size: u(2rem);\n *     // css output:\n *     font-size: 2rem;\n *\n *     $base-font-size: 14px;\n *     $px-only: true;\n *     font-size: u(2rem);\n *     // css output:\n *     font-size: 28px;\n */\n/**\n * Get the line height for the given font size, which should be in pixels or rem.\n * Forked from inuit css.\n * @link https://github.com/inuitcss/tools.mixins\n * @param {px | rem} $font-size - The font size.\n * @param {boolean} $use-px-only - Determines if the return value should be in pxs. Use full when setting the\n *     line-height in a :before or :after due to a ie bug: https://connect.microsoft.com/IE/feedback/details/776744\n */\n/**\n * Adjust the line height to the given font size, which should be in pixels or rem.\n * Forked from inuit css.\n * @link https://github.com/inuitcss/tools.mixins\n * @param {px | rem} $font-size - The new font size.\n * @param {rem | auto} $font-size (auto) - If auto the mixin will automatically calculate the right size to\n *     keep the vertical rhythm.\n * @param {boolean} $lineheight-px-only - Determines if the line height value should be in pxs. Use full when using this\n *     mixin in a :before or :after due to a ie bug: https://connect.microsoft.com/IE/feedback/details/776744\n */\n/**\n * Calculates the space needed for the given lines and a amount of space was already is used by\n * element another.\n * @param {number} $lines - Amount of lines that should be used for the space.\n * @param {px|rem} $subtract - Amount of space that should be subtracted from the lines.\n * @return {rem|px} Either rem or pixels depending on the $px-only variable.\n */\n/**\n * Adds a margin top without destroying the vertical rhythm.\n */\n/**\n * Adds a margin bottom without destroying the vertical rhythm.\n */\n/**\n * Adds a padding top without destroying the vertical rhythm.\n */\n/**\n * Adds a padding bottom without destroying the vertical rhythm.\n */\n/**\n * Applies a border to one side of an element, while fixing the vertical rhythm using padding.\n * Forked from\n * @link https://gist.github.com/ry5n/2026666\n * @param {top | left | right | bottom} $side - The side to which the border should be applied.\n * @param {list|none} $border - A list in the order of border width in px, border style and border color.\n * @param {number} $lines (1) - The number of lines which should be used as padding to keep the vertical\n *     rhythm.\n */\n/**\n * Apply an equal border to all sides, while fixing the vertical rhythm using padding.\n * Forked from\n * @link https://gist.github.com/ry5n/2026666\n * @param {list|none} $border - A list in the order of border width in px, border style and border color.\n * @param {number} $lines (1) - The number of lines which should be used as padding to keep the\n *     vertical rhythm.\n */\n/**\n * Removes the the border and padding from an element.\n */\n/**\n * Apply a border on a given side and adds a padding and margin to that same side.\n * @param {top | left | right | bottom} $side - The side to which the border should be applied.\n * @param {list|none} $border - A list in the order of border width in px, border style and border color.\n * @param {number} $lines (1) - The number of lines which should be used as padding and margin to\n *     keep the vertical rhythm.\n */\nspan.site-intro__separator:before,\nspan.site-intro__separator:after {\n  content: '';\n  width: 50px;\n  border-top: 2px solid #373C43;\n  display: inline-block;\n  margin-bottom: 1rem;\n  border-top: 2px solid #ff3366; }\n  @media (min-width: 800px) {\n    span.site-intro__separator:before,\n    span.site-intro__separator:after {\n      width: 200px; } }\n\nspan.site-intro__separator:before {\n  margin-right: 1rem; }\n\nspan.site-intro__separator:after {\n  margin-left: 1rem; }\n\n.site-intro__separator .fa {\n  color: #ff3366; }\n\n.site-intro {\n  padding-bottom: 5rem;\n  padding-top: 5rem;\n  text-align: center;\n  font-family: 'Josefin Sans', sans-serif;\n  text-transform: uppercase;\n  font-weight: 600; }\n  .site-intro p {\n    font-size: 0.9rem; }\n  .site-intro .site-intro__intro-text {\n    padding: 30px 0;\n    max-width: 600px;\n    margin: 0 auto; }\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "/*\n* Background color for the theme\n*/\n/*\n* Menu color\n*/\n/*\n* Background for the computer mockup\n*/\n/*\n* Body text color\n*/\n/*\n* Primary color\n*/\n/*\n* Color secondary\n*/\n/*\n* Color normal grey\n*/\n/*\n* Color grey light\n*/\n/*\n* Color grey light\n*/\n/*\n* Color grey dark\n*/\n/*\n* Button primary color\n*/\n/*\n* Social backgrounds\n*/\n.hover-bg-twitter:focus,\n.hover-bg-twitter:hover {\n  color: #fff;\n  background: #00c7f7; }\n\n.hover-bg-facebook:focus,\n.hover-bg-facebook:hover {\n  color: #fff;\n  background: #335397; }\n\n.hover-bg-google-plus:focus,\n.hover-bg-google-plus:hover {\n  color: #fff;\n  background: #dd4a38; }\n\n.hover-bg-gplus:focus,\n.hover-bg-gplus:hover {\n  color: #fff;\n  background: #dd4a38; }\n\n.hover-bg-instagram:focus,\n.hover-bg-instagram:hover {\n  color: #fff;\n  background: #82685a; }\n\n.hover-bg-vimeo:focus,\n.hover-bg-vimeo:hover {\n  color: #fff;\n  background: #63879c; }\n\n.hover-bg-flickr:focus,\n.hover-bg-flickr:hover {\n  color: #fff;\n  background: #0061db; }\n\n.hover-bg-github:focus,\n.hover-bg-github:hover {\n  color: #fff;\n  background: #3b3b3b; }\n\n.hover-bg-pinterest:focus,\n.hover-bg-pinterest:hover {\n  color: #fff;\n  background: #bc2725; }\n\n.hover-bg-tumblr:focus,\n.hover-bg-tumblr:hover {\n  color: #fff;\n  background: #586980; }\n\n.hover-bg-linkedin:focus,\n.hover-bg-linkedin:hover {\n  color: #fff;\n  background: #018faf; }\n\n.hover-bg-dribble:focus,\n.hover-bg-dribble:hover {\n  color: #fff;\n  background: #ea73a0; }\n\n.hover-bg-stumbleupon:focus,\n.hover-bg-stumbleupon:hover {\n  color: #fff;\n  background: #ea4b24; }\n\n.hover-bg-lastfm:focus,\n.hover-bg-lastfm:hover {\n  color: #fff;\n  background: #b80638; }\n\n.hover-bg-evernote:focus,\n.hover-bg-evernote:hover {\n  color: #fff;\n  background: #3bab27; }\n\n.hover-bg-skype:focus,\n.hover-bg-skype:hover {\n  color: #fff;\n  background: #skype; }\n\n.hover-bg-soundcloud:focus,\n.hover-bg-soundcloud:hover {\n  color: #fff;\n  background: #06f; }\n\n.hover-bg-behance:focus,\n.hover-bg-behance:hover {\n  color: #fff;\n  background: #b80638; }\n\n.hover-bg-rss:focus,\n.hover-bg-rss:hover {\n  color: #fff;\n  background: #f79638; }\n\n.hover-bg-youtube:focus,\n.hover-bg-youtube:hover {\n  color: #fff;\n  background: #cc181e; }\n\n.hover-bg-drupal:focus,\n.hover-bg-drupal:hover {\n  color: #fff;\n  background: #0678be; }\n\n/*\n* Background color for the theme\n*/\n/*\n* Menu color\n*/\n/*\n* Background for the computer mockup\n*/\n/*\n* Body text color\n*/\n/*\n* Primary color\n*/\n/*\n* Color secondary\n*/\n/*\n* Color normal grey\n*/\n/*\n* Color grey light\n*/\n/*\n* Color grey light\n*/\n/*\n* Color grey dark\n*/\n/*\n* Button primary color\n*/\n/*\n* Social backgrounds\n*/\n.hover-bg-twitter:focus,\n.hover-bg-twitter:hover {\n  color: #fff;\n  background: #00c7f7; }\n\n.hover-bg-facebook:focus,\n.hover-bg-facebook:hover {\n  color: #fff;\n  background: #335397; }\n\n.hover-bg-google-plus:focus,\n.hover-bg-google-plus:hover {\n  color: #fff;\n  background: #dd4a38; }\n\n.hover-bg-gplus:focus,\n.hover-bg-gplus:hover {\n  color: #fff;\n  background: #dd4a38; }\n\n.hover-bg-instagram:focus,\n.hover-bg-instagram:hover {\n  color: #fff;\n  background: #82685a; }\n\n.hover-bg-vimeo:focus,\n.hover-bg-vimeo:hover {\n  color: #fff;\n  background: #63879c; }\n\n.hover-bg-flickr:focus,\n.hover-bg-flickr:hover {\n  color: #fff;\n  background: #0061db; }\n\n.hover-bg-github:focus,\n.hover-bg-github:hover {\n  color: #fff;\n  background: #3b3b3b; }\n\n.hover-bg-pinterest:focus,\n.hover-bg-pinterest:hover {\n  color: #fff;\n  background: #bc2725; }\n\n.hover-bg-tumblr:focus,\n.hover-bg-tumblr:hover {\n  color: #fff;\n  background: #586980; }\n\n.hover-bg-linkedin:focus,\n.hover-bg-linkedin:hover {\n  color: #fff;\n  background: #018faf; }\n\n.hover-bg-dribble:focus,\n.hover-bg-dribble:hover {\n  color: #fff;\n  background: #ea73a0; }\n\n.hover-bg-stumbleupon:focus,\n.hover-bg-stumbleupon:hover {\n  color: #fff;\n  background: #ea4b24; }\n\n.hover-bg-lastfm:focus,\n.hover-bg-lastfm:hover {\n  color: #fff;\n  background: #b80638; }\n\n.hover-bg-evernote:focus,\n.hover-bg-evernote:hover {\n  color: #fff;\n  background: #3bab27; }\n\n.hover-bg-skype:focus,\n.hover-bg-skype:hover {\n  color: #fff;\n  background: #skype; }\n\n.hover-bg-soundcloud:focus,\n.hover-bg-soundcloud:hover {\n  color: #fff;\n  background: #06f; }\n\n.hover-bg-behance:focus,\n.hover-bg-behance:hover {\n  color: #fff;\n  background: #b80638; }\n\n.hover-bg-rss:focus,\n.hover-bg-rss:hover {\n  color: #fff;\n  background: #f79638; }\n\n.hover-bg-youtube:focus,\n.hover-bg-youtube:hover {\n  color: #fff;\n  background: #cc181e; }\n\n.hover-bg-drupal:focus,\n.hover-bg-drupal:hover {\n  color: #fff;\n  background: #0678be; }\n\n/**\n * Tells the u mixin to use pixel values only.\n */\n/**\n * Returns a number from a string.\n */\n/**\n * Base font size without the units.\n * @access private\n */\n/**\n * Base line height without the units.\n * @access private\n */\n/**\n * Outputs the given value as pixel or rems depending on the given unit and the on the $px-only. It\n * acts as rem fallback for ie <= 8.\n * @link http://davidwalsh.name/rem-px-browser-function-sass\n * @param {px | rem} $values - A value which should be rendered to rem.\n * @param {boolean} $use-px-only - Determines if the function should return px based on the rems.\n * @example scss\n *     $base-font-size: 14px;\n *     $px-only: false;\n *     font-size: u(2rem);\n *     // css output:\n *     font-size: 2rem;\n *\n *     $base-font-size: 14px;\n *     $px-only: true;\n *     font-size: u(2rem);\n *     // css output:\n *     font-size: 28px;\n */\n/**\n * Get the line height for the given font size, which should be in pixels or rem.\n * Forked from inuit css.\n * @link https://github.com/inuitcss/tools.mixins\n * @param {px | rem} $font-size - The font size.\n * @param {boolean} $use-px-only - Determines if the return value should be in pxs. Use full when setting the\n *     line-height in a :before or :after due to a ie bug: https://connect.microsoft.com/IE/feedback/details/776744\n */\n/**\n * Adjust the line height to the given font size, which should be in pixels or rem.\n * Forked from inuit css.\n * @link https://github.com/inuitcss/tools.mixins\n * @param {px | rem} $font-size - The new font size.\n * @param {rem | auto} $font-size (auto) - If auto the mixin will automatically calculate the right size to\n *     keep the vertical rhythm.\n * @param {boolean} $lineheight-px-only - Determines if the line height value should be in pxs. Use full when using this\n *     mixin in a :before or :after due to a ie bug: https://connect.microsoft.com/IE/feedback/details/776744\n */\n/**\n * Calculates the space needed for the given lines and a amount of space was already is used by\n * element another.\n * @param {number} $lines - Amount of lines that should be used for the space.\n * @param {px|rem} $subtract - Amount of space that should be subtracted from the lines.\n * @return {rem|px} Either rem or pixels depending on the $px-only variable.\n */\n/**\n * Adds a margin top without destroying the vertical rhythm.\n */\n/**\n * Adds a margin bottom without destroying the vertical rhythm.\n */\n/**\n * Adds a padding top without destroying the vertical rhythm.\n */\n/**\n * Adds a padding bottom without destroying the vertical rhythm.\n */\n/**\n * Applies a border to one side of an element, while fixing the vertical rhythm using padding.\n * Forked from\n * @link https://gist.github.com/ry5n/2026666\n * @param {top | left | right | bottom} $side - The side to which the border should be applied.\n * @param {list|none} $border - A list in the order of border width in px, border style and border color.\n * @param {number} $lines (1) - The number of lines which should be used as padding to keep the vertical\n *     rhythm.\n */\n/**\n * Apply an equal border to all sides, while fixing the vertical rhythm using padding.\n * Forked from\n * @link https://gist.github.com/ry5n/2026666\n * @param {list|none} $border - A list in the order of border width in px, border style and border color.\n * @param {number} $lines (1) - The number of lines which should be used as padding to keep the\n *     vertical rhythm.\n */\n/**\n * Removes the the border and padding from an element.\n */\n/**\n * Apply a border on a given side and adds a padding and margin to that same side.\n * @param {top | left | right | bottom} $side - The side to which the border should be applied.\n * @param {list|none} $border - A list in the order of border width in px, border style and border color.\n * @param {number} $lines (1) - The number of lines which should be used as padding and margin to\n *     keep the vertical rhythm.\n */\n.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-weight: 300;\n  line-height: 1.1;\n  color: #333; }\n\nh1, .h1 {\n  margin: 0.67rem 0;\n  font-size: 2rem;\n  line-height: 3rem;\n  text-transform: uppercase;\n  font-family: 'Josefin Sans', sans-serif;\n  font-weight: 600; }\n\np {\n  font-size: 1rem;\n  line-height: 2.1rem;\n  color: #7e8890; }\n\na, a:hover {\n  text-decoration: none;\n  color: #ff3366; }\n\na:focus, button:focus {\n  outline: none;\n  text-decoration: none; }\n\n.text-muted {\n  color: #C5C5C5; }\n\n.text-center {\n  text-align: center; }\n\n/**\n * Breakpoint for very small viewports with a one column layout.\n */\n/**\n * Breakpoint for slightly bigger viewports with a column layout.\n */\n/**\n * Medium, tablet like viewports using a 12 column layout.\n */\n/**\n * Big viewport using the full width using a 24 column layout.\n */\n/**\n * Dense pixel ration devices.\n */\n[ng\\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {\n  display: none !important; }\n\n:after, :before {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n:after, :before {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\npre {\n  padding: 20px;\n  border: none;\n  font-size: 14px;\n  background: #fbfcfd;\n  border: 1px solid #DEE2E6;\n  border-radius: 2px;\n  word-wrap: break-word; }\n\nbody {\n  margin: 0; }\n\n/*\n* Background color for the theme\n*/\n/*\n* Menu color\n*/\n/*\n* Background for the computer mockup\n*/\n/*\n* Body text color\n*/\n/*\n* Primary color\n*/\n/*\n* Color secondary\n*/\n/*\n* Color normal grey\n*/\n/*\n* Color grey light\n*/\n/*\n* Color grey light\n*/\n/*\n* Color grey dark\n*/\n/*\n* Button primary color\n*/\n/*\n* Social backgrounds\n*/\n.hover-bg-twitter:focus,\n.hover-bg-twitter:hover {\n  color: #fff;\n  background: #00c7f7; }\n\n.hover-bg-facebook:focus,\n.hover-bg-facebook:hover {\n  color: #fff;\n  background: #335397; }\n\n.hover-bg-google-plus:focus,\n.hover-bg-google-plus:hover {\n  color: #fff;\n  background: #dd4a38; }\n\n.hover-bg-gplus:focus,\n.hover-bg-gplus:hover {\n  color: #fff;\n  background: #dd4a38; }\n\n.hover-bg-instagram:focus,\n.hover-bg-instagram:hover {\n  color: #fff;\n  background: #82685a; }\n\n.hover-bg-vimeo:focus,\n.hover-bg-vimeo:hover {\n  color: #fff;\n  background: #63879c; }\n\n.hover-bg-flickr:focus,\n.hover-bg-flickr:hover {\n  color: #fff;\n  background: #0061db; }\n\n.hover-bg-github:focus,\n.hover-bg-github:hover {\n  color: #fff;\n  background: #3b3b3b; }\n\n.hover-bg-pinterest:focus,\n.hover-bg-pinterest:hover {\n  color: #fff;\n  background: #bc2725; }\n\n.hover-bg-tumblr:focus,\n.hover-bg-tumblr:hover {\n  color: #fff;\n  background: #586980; }\n\n.hover-bg-linkedin:focus,\n.hover-bg-linkedin:hover {\n  color: #fff;\n  background: #018faf; }\n\n.hover-bg-dribble:focus,\n.hover-bg-dribble:hover {\n  color: #fff;\n  background: #ea73a0; }\n\n.hover-bg-stumbleupon:focus,\n.hover-bg-stumbleupon:hover {\n  color: #fff;\n  background: #ea4b24; }\n\n.hover-bg-lastfm:focus,\n.hover-bg-lastfm:hover {\n  color: #fff;\n  background: #b80638; }\n\n.hover-bg-evernote:focus,\n.hover-bg-evernote:hover {\n  color: #fff;\n  background: #3bab27; }\n\n.hover-bg-skype:focus,\n.hover-bg-skype:hover {\n  color: #fff;\n  background: #skype; }\n\n.hover-bg-soundcloud:focus,\n.hover-bg-soundcloud:hover {\n  color: #fff;\n  background: #06f; }\n\n.hover-bg-behance:focus,\n.hover-bg-behance:hover {\n  color: #fff;\n  background: #b80638; }\n\n.hover-bg-rss:focus,\n.hover-bg-rss:hover {\n  color: #fff;\n  background: #f79638; }\n\n.hover-bg-youtube:focus,\n.hover-bg-youtube:hover {\n  color: #fff;\n  background: #cc181e; }\n\n.hover-bg-drupal:focus,\n.hover-bg-drupal:hover {\n  color: #fff;\n  background: #0678be; }\n\n.btn, .btn-primary {\n  background-image: none;\n  -webkit-border-radius: 0px;\n  -moz-border-radius: 0px;\n  -ms-border-radius: 0px;\n  border-radius: 0px;\n  border: none;\n  padding-bottom: 0.8rem;\n  padding-top: 0.8rem;\n  padding-left: 2.5rem;\n  padding-right: 2.5rem;\n  -moz-box-shadow: 0px 0px 0px 0px;\n  -webkit-box-shadow: 0px 0px 0px 0px;\n  -ms-box-shadow: 0px 0px 0px 0px;\n  box-shadow: 0px 0px 0px 0px;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  font-family: 'Josefin Sans', sans-serif;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  font-weight: 600; }\n\n.btn-primary {\n  background: #ff3366;\n  border: 1px solid #ff3366;\n  color: #fff; }\n\n.btn-primary:hover, .btn-primary:focus {\n  background: #373C43;\n  border-color: #373C43;\n  border: 1px solid #373C43;\n  color: white; }\n\nhtml {\n  font-size: 16px; }\n\nimg {\n  max-width: 100%;\n  height: auto; }\n\nbody {\n  font-family: \"Open Sans\", \"open-sans\", sans-serif;\n  background: white; }\n\np {\n  font-size: 1.1rem;\n  line-height: 2.1rem;\n  color: #7e8890; }\n\na, a:hover {\n  text-decoration: none;\n  color: #ff3366; }\n\na:focus, button:focus {\n  outline: none;\n  text-decoration: none; }\n\nhtml,\nbody {\n  overflow-x: hidden;\n  width: 100%;\n  height: 100%; }\n\n.blog-app {\n  background: #fff;\n  padding-bottom: 60px;\n  overflow-y: scroll;\n  font-family: \"Open Sans\", \"open-sans\", sans-serif;\n  font-size: 1rem;\n  line-height: 2.1rem;\n  -webkit-transition: all 0.5s ease;\n  -moz-transition: all 0.5s ease;\n  -ms-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n  margin-left: 2rem;\n  margin-right: 2rem;\n  margin-top: 60px; }\n  @media (min-width: 800px) {\n    .blog-app {\n      max-width: 700px;\n      margin: auto;\n      margin-top: 60px; } }\n  @media (min-width: 800px) {\n    .blog-app.shiftLeft {\n      margin-left: 400px; } }\n  .blog-app.shiftLeft .about {\n    left: 300px;\n    margin-left: 0; }\n", ""]);

	// exports


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = {
		"domain": "http://localhost/blog_backoffice/"
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	var BlogItem = (function () {
	    function BlogItem(image, title, body, url, id, created) {
	        this.image = image;
	        this.title = title;
	        this.body = body;
	        this.url = url;
	        this.id = id;
	        this.created = created;
	    }
	    return BlogItem;
	}());
	exports.BlogItem = BlogItem;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(3);
	var bloglist_1 = __webpack_require__(20);
	var blognode_1 = __webpack_require__(21);
	var Header_1 = __webpack_require__(17);
	var NavSidebar_1 = __webpack_require__(18);
	var about_1 = __webpack_require__(19);
	var page_css = __webpack_require__(13);
	var App = (function () {
	    function App() {
	    }
	    App.prototype.ngOnInit = function () {
	        this.links = [{
	                "url": "About",
	                "name": "About Me"
	            }];
	    };
	    App.prototype.moveBody = function (message) {
	        this.shifted = !this.shifted;
	    };
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            directives: [router_1.ROUTER_DIRECTIVES, bloglist_1.BlogList, Header_1.Header, NavSidebar_1.NavSidebar],
	            styles: [("" + page_css)],
	            encapsulation: core_1.ViewEncapsulation.None,
	            template: "\n    <blog-header></blog-header>\n    <nav-sidebar (NavStateChanged)=\"moveBody($event)\" [navLinks]=links></nav-sidebar>\n    <div class=\"blog-app\" [ngClass]=\"{shiftLeft:shifted}\">\n        <router-outlet></router-outlet>\n    </div>"
	        }),
	        router_1.RouteConfig([
	            { path: '/', component: bloglist_1.BlogList, name: 'Home' },
	            { path: '/blog', component: bloglist_1.BlogList, name: 'Home' },
	            { path: '/blog/:title', component: blognode_1.BlogNode, name: 'Blognode' },
	            { path: '/about', component: about_1.about, name: 'About' }
	        ]), 
	        __metadata('design:paramtypes', [])
	    ], App);
	    return App;
	}());
	exports.App = App;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var header_css = __webpack_require__(7);
	var Header = (function () {
	    function Header() {
	    }
	    Header = __decorate([
	        core_1.Component({
	            selector: 'blog-header',
	            styles: [("" + header_css)],
	            template: "<div class=\"blog_header\">\n    <div class=\"icon-list\">\n            <a class=\"hover-bg-facebook\" href=\"https://www.facebook.com/joao.garin\"><i class=\"fa fa-fw fa-facebook-square\"></i></a>\n            <a class=\"hover-bg-github\" target=\"_blank\" href=\"https://github.com/joaogarin\"><i class=\"fa fa-fw fa-github-square\"></i></a>\n            <a class=\"hover-bg-drupal\" target=\"_blank\" href=\"https://www.drupal.org/u/joaogarin\"><i class=\"fa fa-fw fa-drupal\"></i></a>\n            <a class=\"hover-bg-twitter\" target=\"_blank\" href=\"https://twitter.com/joaogarin\"><i class=\"fa fa-fw fa-twitter-square\"></i></a>\n            <a class=\"hover-bg-linkedin\" target=\"_blank\" href=\"https://pt.linkedin.com/pub/joao-garin/25/185/9b1\"><i class=\"fa fa-fw fa-linkedin-square\"></i></a>\n            <a class=\"hover-bg-behance\" target=\"_blank\" href=\"https://www.behance.net/joaogarin\"><i class=\"fa fa-fw fa-behance\"></i></a>\n        </div>\n    </div>"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Header);
	    return Header;
	}());
	exports.Header = Header;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(4);
	var common_2 = __webpack_require__(4);
	var router_1 = __webpack_require__(3);
	var nav_css = __webpack_require__(8);
	var NavSidebar = (function () {
	    function NavSidebar() {
	        this.NavStateChanged = new core_1.EventEmitter();
	        Object.assign(this, { isOpen: false });
	    }
	    NavSidebar.prototype.toggleNav = function () {
	        var changedStatus = !this.isOpen;
	        Object.assign(this, { isOpen: changedStatus });
	        this.NavStateChanged.emit("opened");
	    };
	    NavSidebar = __decorate([
	        core_1.Component({
	            selector: 'nav-sidebar',
	            inputs: ['navLinks'],
	            outputs: ['NavStateChanged'],
	            styles: [("" + nav_css)],
	            directives: [common_1.NgFor, router_1.RouterLink, common_2.NgClass],
	            template: "\n    <div class=\"menu_toggle\">\n            <a (click)=\"toggleNav()\"><i class=\"fa fa-navicon\"></i></a>\n    </div>\n    <aside class=\"nav_sidebar\" [ngClass]=\"{opened: isOpen}\">\n        <div class=\"user-pic\">\n          <a [routerLink]=\"['Home']\"><img src=\"https://www.drupal.org/files/styles/grid-2/public/user-pictures/picture-612814-1413290760.png?itok=GXM2mba3\"/></a>\n        </div>\n        <ul>\n            <li *ngFor=\"#navLink of navLinks\">\n                <a [routerLink]=\"[navLink.url]\">{{navLink.name}}</a>\n            </li>\n            <li>\n                <a target=\"_blank\" href=\"http://themeforest.net/user/monkey_themes\">Themes / Portfolio</a>\n            </li>\n            <li>\n                <a target=\"_blank\" href=\"https://behance.net/joaogarin\">U/X & Design</a>\n            </li>\n            <li>\n                <a target=\"_blank\" href=\"https://github.com/joaogarin\">Open source</a>\n            </li>\n        </ul>\n        <a href=\"https://twitter.com/joaogarin\" class=\"twitter-follow-button\" data-show-count=\"false\">Follow @joaogarin</a>\n        <script>window.twttr = (function(d, s, id) {\n  var js, fjs = d.getElementsByTagName(s)[0],\n    t = window.twttr || {};\n  if (d.getElementById(id)) return t;\n  js = d.createElement(s);\n  js.id = id;\n  js.src = \"https://platform.twitter.com/widgets.js\";\n  fjs.parentNode.insertBefore(js, fjs);\n \n  t._e = [];\n  t.ready = function(f) {\n    t._e.push(f);\n  };\n \n  return t;\n}(document, \"script\", \"twitter-wjs\"));</script>\n     </aside>"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NavSidebar);
	    return NavSidebar;
	}());
	exports.NavSidebar = NavSidebar;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var $css_about = __webpack_require__(9);
	var about = (function () {
	    function about() {
	    }
	    about = __decorate([
	        core_1.Component({
	            selector: "about",
	            template: "<div class=\"about\">\n        <div class=\"about-text\">\n            <div class=\"text-inner\">\n                <h1>Joao Anahory Garin</h1>\n                <h3>Front end developer</h3>\n                <p>I am a front end developer from Lisbon, living in Vienna. I am passionate about CSS, HTML Javacript and the whole world of UI and UX.</p>\n                <div class=\"call-to-action\">\n                    <a href=\"#\" class=\"btn btn-primary\">Contact me</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"about__image-background\">\n            <div class=\"inner\">\n            </div>\n        </div>\n    </div>",
	            styles: [("" + $css_about)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], about);
	    return about;
	}());
	exports.about = about;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(4);
	var BlogService_1 = __webpack_require__(6);
	var router_1 = __webpack_require__(3);
	var siteintro_1 = __webpack_require__(5);
	var blogs_css = __webpack_require__(10);
	var BlogList = (function () {
	    function BlogList(_blogservice) {
	        this._blogservice = _blogservice;
	    }
	    BlogList.prototype.ngOnInit = function () {
	        this.getBogItems();
	    };
	    BlogList.prototype.getBogItems = function () {
	        var _this = this;
	        this._blogservice.blogitems("all")
	            .subscribe(function (blogitems) { return _this.blogItems = blogitems; }, function (error) { return console.error('Error: ' + error); }, function () { return console.log("Finished loading blogs request"); });
	    };
	    BlogList = __decorate([
	        core_1.Component({
	            selector: 'blog-list',
	            providers: [BlogService_1.BlogService],
	            directives: [common_1.NgFor, router_1.RouterLink, siteintro_1.SiteIntro],
	            styles: [("" + blogs_css)],
	            template: "<site-intro></site-intro><div class=\"blog-list blogs\">\n    <div class=\"blog_item\" *ngFor=\"#blog_item of blogItems\">\n        <p class=\"text-muted\">\n            Post on : {{blog_item.created}} by Joao Garin\n        </p>\n\n        <h1 class=\"blog-title\">\n            {{blog_item.title}}\n        </h1>\n\n        <div class=\"blog-item__image\" [innerHtml]=\"blog_item.image\">\n\n        </div>\n\n        <p class=\"post-body\" [innerHtml]=\"blog_item.body\">\n\n        </p>\n\n        <div class=\"full-post\">\n            <a class=\"btn btn-primary\" [routerLink]=\"['/Blognode', {title: blog_item.url}]\">Read full post</a>\n        </div>\n    </div>\n</div>"
	        }), 
	        __metadata('design:paramtypes', [BlogService_1.BlogService])
	    ], BlogList);
	    return BlogList;
	}());
	exports.BlogList = BlogList;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(3);
	var BlogService_1 = __webpack_require__(6);
	var siteintro_1 = __webpack_require__(5);
	var blogs_css = __webpack_require__(11);
	var BlogNode = (function () {
	    function BlogNode(blogservice, routeParams) {
	        var _this = this;
	        this.blogservice = blogservice;
	        this.routeParams = routeParams;
	        this.title = routeParams.get("title");
	        blogservice.blogitemnode(this.title).subscribe(function (blognode) {
	            blognode.map(function (blognode_obs) {
	                blognode_obs.subscribe(function (node) { return _this.blogItems = node; });
	            });
	        }, function (error) { return console.error('Error: ' + error); }, function () { });
	    }
	    BlogNode = __decorate([
	        core_1.Component({
	            selector: 'blog-node',
	            providers: [BlogService_1.BlogService],
	            directives: [common_1.NgFor, siteintro_1.SiteIntro],
	            styles: [("" + blogs_css)],
	            template: "<site-intro></site-intro><div class=\"blog-list blogs\">\n    <div class=\"blog_item\" *ngFor=\"#blog_item of blogItems\">\n        <p class=\"text-muted\">\n            Post on : {{blog_item.created}} by Joao Garin\n        </p>\n\n        <h1 class=\"blog-title\">\n            {{blog_item.title}}\n        </h1>\n\n        <div class=\"blog-item__image\" [innerHtml]=\"blog_item.image\">\n\n        </div>\n\n        <p class=\"post-body\" [innerHtml]=\"blog_item.body\">\n\n        </p>\n        <!--<div class=\"comments\">\n            <disqus disqusIdentifier=\"blog_item.id\" disqusTitle=\"blog_item.title\" disqusUrl=\"blog_item.url\"></disqus>\n        </div>-->\n    </div>\n</div>"
	        }), 
	        __metadata('design:paramtypes', [BlogService_1.BlogService, router_1.RouteParams])
	    ], BlogNode);
	    return BlogNode;
	}());
	exports.BlogNode = BlogNode;


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkIzNEM2N0RBRjBBMTFFNTg2RkFEMzE2MkFGMjg2NjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkIzNEM2N0VBRjBBMTFFNTg2RkFEMzE2MkFGMjg2NjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQjM0QzY3QkFGMEExMUU1ODZGQUQzMTYyQUYyODY2NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQjM0QzY3Q0FGMEExMUU1ODZGQUQzMTYyQUYyODY2NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIAEsASwMBEQACEQEDEQH/xACBAAACAwEBAQEAAAAAAAAAAAAABwUGCAQDAQIBAQEBAQAAAAAAAAAAAAAAAAABAgMQAAEDAwIDBQYDBwUBAAAAAAECAwQAEQUSBiETBzFBUSIIYXGBoUIUMmIjUoKiM3MVFpGxwbIXGBEBAQEBAQEBAAAAAAAAAAAAAAERAhIxIf/aAAwDAQACEQMRAD8A1TQFAUHFmcxj8NjXslkXOTCj6S+9pUoISpQTqISCbAq4nuHGg8c7m0Y3bs3NsNffNRIy5aW2lgc1tCNfkXZQ4pHCg6MVloOUxcXJwnA5DmtoeYc7LpcAKb+3ja1B10BQFAUBQFAUCs699QcPhNpzcCl1L2ZyzJYTFSQS2y5wW65+yNNwnxPxrXMS0kMV1o3Bjenb+zWmkuB4OsonuLJU1FeFlNIRb2qsongD2VrGdSu1OouQyGO2jseJphwcdMbl5TIvuJQChmQZJ4myUNtp48TckDs75YutO4DOQs7imspB1mG+pwMLWNOtCFqQHEj9lenUn2VhpIUBQFAUHDm83i8JjH8plJCYsGMnU68v5AAcSSeAA4mgzbvz1IbjyjzsTbAOIx1ykSSAqW4PG5ulv3J4/mrc5ZtJ+TJkypDkiS6t+Q6oqdecUVrUo9pUo3JNaR5UQUFz2d1d3ztUtNQZ6pGPasBjpV3WNI+lIJ1I/cIqWLrS/TPq5gd8Ryy2Pss0ynVIxy1XJA4FbSuGtHwuO+sWY1KvdRRQFBlf1Fb7k5jda9vR3CMXhlaFoB4OSiP1FK8dF9A8OPjW+YzapnT/AKcbh3vklRMYhLcZixmTnbhppJ7L24qUe5I/241bcSQ+sT6YdjRmEjIy5k+RbzrC0sN3/KhKVKHxUaz6ax8nel/Y7z6FxZ0+I0D+o0FtuAj8qlIuPnT0Y7FemnpsWeWBOC7W5okDV77FGn5U9GFn1G9O2V2/Cey2AkLyuOYBXIjLSBJbQO1Q0+VwDvsAR4VZ0lhVYTM5HC5WLlcc6WJsNwOMuDxHcR3pI4Ed4rSNwbR3FG3JtrHZyONLc5lLikduhf4XEfurBFcq2l6DO071N7nyE0xds7ebUpRPJS7zZLygO/ls8u3Du41vyzpZS9gdTMvOk5J3buQU/MdXIdUYziQVuqKlWCh4mrsTFw2rufrLsHEpx0Xa60wErU64p6A+orUo8VLcbKb8OHuqXKq0Yv1T8tfJzu31NrTwWuK7xB/pOgf96nk1bofqP6ZPsFx2RKirAvyXY6ionwBa5ifnTzV1CZf1S7VY1JxeKlzljsU8UR0H4guq/hp5NV09e+q+cJ/x7bSCyrgC1GkS1fFYKUfw1fMTS3m9NupMuU/MVteY0X1qdU01GWhCSs3IQj6QL8BV1MXDanUvqZ04wLWLm7ZX/Z2HVlLsyPJjqCnV6ygPn9PtJsNNSyVdWr/6qY5Gv/G18z7fmafuhp53O0adXK/Bo82q17+W31VPJ6QfUmBH2F1rw+bxaExYc1bMp1pvyoGpwtSUgDgApPH41Z+wv1pesNENuzrZ1Fb3LkWts4IyMHiH1x5D6oz73MUyrS4VOIICBcG3zrUjOrJ1D3Tt6d0eVuqRjY6pWTjIbgtymW3VtyH/AC2SVp7W/MoH2Uk/VpbdL+gUTdu005zJZB+EqUtxMJtpCCnQ2dHMVq4qusHgLdnbVvSSPboLGx2K6hZfamchRn5ieYiK6+y2taX4qyFBtSwVALRdXDwp0RbOofVvfsDdMvB7NwhlRsQECa/9s7IutSAu1myAhACreJqSLaZPT3dyt2bUiZlyOYkh0rakxzeyHWllCwL8bXFxUsWFP6pMtLdG3ttRVXMtxyS4yPqWCllgG3ddxdXlmrl/4XtLkfb8v9H+yf2bTpT/ADOd9x952fzub5tVT0uIX1LbPkZXbEXOw2y4/hVrMhKRc/bO21q/cUlJ91zV5pUr0t6y7Yzm3YkfLZFiBm4raWZbcpxLQcKBbmtqWQlWsC5F7g0sJVlynVDp5i2lOSs/CskElDLqX1n3IZ1qP+lTDSH3fuXL9ZN5QNv7fYcZwcRRUlbgtZJNnJTwHBICeCE/8qrU/E+tK4bEw8PiYeLhJ0RYTKGGU9+lAtc+09prDRE9eNoZjAbnidRtvJKS2ttU9SBflPt2Sh1QH0OJASr5/irXNZq87N69bDzsFoz5jeGyZA+4iyjob19hKHj5FJ8LkH2VLyurPM6h7DhRFyns/jwwgajokNOKPf5UIKlKPsApi6RODfkdVuuDWZaaWnBYZTT4KxbQxGUVMJV2jU895tPhq8K18jP2tMVhp8WhC0KQtIUhQKVJULgg8CCDQZZ6+9LmtuZVrM4OEWcDNTZ9DQJbYkAm479CVixT3XuPCt81mxZ+nnp42vmNtYzN5l6eh+Y0HXIOptpIuTb6CvSoAKHHsNS9Eh0bZ2jtzbEEwsHBbhMqsXCm5WsjvccUStR95rOtJig/LrTTrS2nUJcacBSttQCkqSRYgg8CDQLLcPp16dZZ5b8Zp/EurNyIawGr/wBNxLiU+5Nq16TGfM103yjfUWRs7EMSH3EvhuO48mxLRAPPWUjSG7HVfwrWs41vs/Z+E2nhWsViY6WW02U+6PxvO2AU4tRuSTb4dg4Vi1tN1AUBQFAUBQFAUBQFAUBQFAUBQFAUBQFAUBQf/9k="

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-preview");

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-preview/polyfills");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("angular2/http");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/map");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("rxjs/add/operator/mergeMap");

/***/ }
/******/ ]);