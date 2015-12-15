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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _MarkovJs = __webpack_require__(1);

	var database = {
	  transitionTable: []
	};
	var words = ['abc'];
	database = (0, _MarkovJs.updateTransitionTable)(database, words);
	console.log(database);

	exports['default'] = { updateTransitionTable: _MarkovJs.updateTransitionTable };
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	// Model of the table :
	// let Database = {
	//   words: [],
	//   transitionTable: {
	//     'a': ['a', 'b']
	//   }
	// };

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var addWordIntoTransitionTable = function addWordIntoTransitionTable(transitionTable, word) {
	  var res = Object.assign({}, transitionTable);
	  for (var i = 0; i < word.length; i++) {
	    var char = word[i];
	    var nextChar = word[i + 1] || '$';
	    var transitionArray = res[char] || [];
	    transitionArray.push(nextChar);
	    res[char] = transitionArray;
	  }
	  return res;
	};

	var updateTransitionTable = function updateTransitionTable(database, words) {
	  var res = Object.assign({}, database);
	  for (var i = 0; i < words.length; i++) {
	    res.transitionTable = addWordIntoTransitionTable(database.transitionTable, words[i]);
	  }
	  return res;
	};

	exports['default'] = { updateTransitionTable: updateTransitionTable };
	module.exports = exports['default'];

/***/ }
/******/ ]);