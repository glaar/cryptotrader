/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module 'babel-core'\n    at Function.Module._resolveFilename (module.js:469:15)\n    at Function.Module._load (module.js:417:25)\n    at Module.require (module.js:497:17)\n    at require (internal/module.js:20:19)\n    at Object.<anonymous> (/Users/glaar/Documents/python/cryptotrader/node_modules/babel-loader/lib/index.js:3:13)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)\n    at Function.Module._load (module.js:438:3)\n    at Module.require (module.js:497:17)\n    at require (internal/module.js:20:19)\n    at loadLoader (/Users/glaar/Documents/python/cryptotrader/node_modules/loader-runner/lib/loadLoader.js:13:17)\n    at iteratePitchingLoaders (/Users/glaar/Documents/python/cryptotrader/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/glaar/Documents/python/cryptotrader/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/Users/glaar/Documents/python/cryptotrader/node_modules/webpack/lib/NormalModule.js:125:2)\n    at NormalModule.build (/Users/glaar/Documents/python/cryptotrader/node_modules/webpack/lib/NormalModule.js:173:15)\n    at Compilation.buildModule (/Users/glaar/Documents/python/cryptotrader/node_modules/webpack/lib/Compilation.js:127:9)\n    at Compilation.<anonymous> (/Users/glaar/Documents/python/cryptotrader/node_modules/webpack/lib/Compilation.js:401:8)\n    at /Users/glaar/Documents/python/cryptotrader/node_modules/webpack/lib/NormalModuleFactory.js:63:13\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/Users/glaar/Documents/python/cryptotrader/node_modules/tapable/lib/Tapable.js:260:70)\n    at onDoneResolving (/Users/glaar/Documents/python/cryptotrader/node_modules/webpack/lib/NormalModuleFactory.js:38:11)\n    at onDoneResolving (/Users/glaar/Documents/python/cryptotrader/node_modules/webpack/lib/NormalModuleFactory.js:135:6)\n    at /Users/glaar/Documents/python/cryptotrader/node_modules/webpack/lib/NormalModuleFactory.js:130:7\n    at /Users/glaar/Documents/python/cryptotrader/node_modules/async/lib/async.js:726:13\n    at /Users/glaar/Documents/python/cryptotrader/node_modules/async/lib/async.js:52:16\n    at done (/Users/glaar/Documents/python/cryptotrader/node_modules/async/lib/async.js:246:17)\n    at /Users/glaar/Documents/python/cryptotrader/node_modules/async/lib/async.js:44:16\n    at /Users/glaar/Documents/python/cryptotrader/node_modules/async/lib/async.js:723:17\n    at /Users/glaar/Documents/python/cryptotrader/node_modules/async/lib/async.js:167:37");

/***/ }
/******/ ]);