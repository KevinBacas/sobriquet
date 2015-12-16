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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _commandLineArgs = __webpack_require__(1);

	var _commandLineArgs2 = _interopRequireDefault(_commandLineArgs);

	var _MarkovJs = __webpack_require__(121);

	var cli = (0, _commandLineArgs2['default'])([{ name: 'words', type: String, multiple: true, defaultOption: true, defaultValue: [], description: 'List of words injected to the Markov chain' }, { name: 'number', alias: 'n', type: Number, defaultValue: 10, description: 'Number of words you want to generate' }, { name: 'start', alias: 's', type: String, defaultValue: 'a', description: 'The starting letter' }, { name: 'help', alias: 'h', type: Boolean, defaultValue: false, description: 'Display the usage of the CLI' }]);

	var options = cli.parse();

	if (options.help) {
	  console.log(cli.getUsage());
	} else {
	  var database = {
	    transitionTable: []
	  };
	  database = (0, _MarkovJs.updateTransitionTable)(database, options.words);
	  console.log("Random word(s) generated:");
	  for (var i = 0; i < options.number; ++i) {
	    console.log((0, _MarkovJs.generateRandomWord)(database.transitionTable, options.start));
	  }
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var detect = __webpack_require__(2)

	if (detect.class() && detect.arrowFunction() && detect.newArrayFeatures()) {
	  module.exports = __webpack_require__(5)
	} else {
	  __webpack_require__(18)
	  module.exports = __webpack_require__(116)
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	var arrayify = __webpack_require__(3)

	/**
	 * Detect which ES6 features are available.
	 *
	 * @module feature-detect-es6
	 * @typicalname detect
	 * @example
	 * var detect = require('feature-detect-es6')
	 *
	 * if (detect.all('class', 'spread', 'let', 'arrowFunction')){
	 *   // safe to run ES6 code natively..
	 * } else {
	 *   // run your transpiled ES5..
	 * }
	 */

	/**
	 * Returns true if the `class` statement is available.
	 *
	 * @returns {boolean}
	 */
	exports.class = function () {
	  return evaluates('class Something {}')
	}

	/**
	 * Returns true if the arrow functions available.
	 *
	 * @returns {boolean}
	 */
	exports.arrowFunction = function () {
	  return evaluates('var f = x => 1')
	}

	/**
	 * Returns true if the `let` statement is available.
	 *
	 * @returns {boolean}
	 */
	exports.let = function () {
	  return evaluates('let a = 1')
	}

	/**
	 * Returns true if the `const` statement is available.
	 *
	 * @returns {boolean}
	 */
	exports.const = function () {
	  return evaluates('const a = 1')
	}

	/**
	 * Returns true if the [new Array features](http://exploringjs.com/es6/ch_arrays.html) are available (exluding `Array.prototype.values` which has zero support anywhere).
	 *
	 * @returns {boolean}
	 */
	exports.newArrayFeatures = function () {
	  return typeof Array.prototype.find !== 'undefined' &&
	    typeof Array.prototype.findIndex !== 'undefined' &&
	    typeof Array.from !== 'undefined' &&
	    typeof Array.of !== 'undefined' &&
	    typeof Array.prototype.entries !== 'undefined' &&
	    typeof Array.prototype.keys !== 'undefined' &&
	    typeof Array.prototype.copyWithin !== 'undefined' &&
	    typeof Array.prototype.fill !== 'undefined'
	}

	/**
	 * Returns true if `Map`, `WeakMap`, `Set` and `WeakSet` are available.
	 *
	 * @returns {boolean}
	 */
	exports.collections = function () {
	  return typeof Map !== 'undefined' &&
	    typeof WeakMap !== 'undefined' &&
	    typeof Set !== 'undefined' &&
	    typeof WeakSet !== 'undefined'
	}

	/**
	 * Returns true if generators are available.
	 *
	 * @returns {boolean}
	 */
	exports.generators = function () {
	  return evaluates('function* test() {}')
	}

	/**
	 * Returns true if `Promise` is available.
	 *
	 * @returns {boolean}
	 */
	exports.promises = function () {
	  return typeof Promise !== 'undefined'
	}

	/**
	 * Returns true if template strings are available.
	 *
	 * @returns {boolean}
	 */
	exports.templateStrings = function () {
	  return evaluates('var a = `a`')
	}

	/**
	 * Returns true if `Symbol` is available.
	 *
	 * @returns {boolean}
	 */
	exports.symbols = function () {
	  return typeof Symbol !== 'undefined'
	}

	/**
	 * Returns true if destructuring is available.
	 *
	 * @returns {boolean}
	 */
	exports.destructuring = function () {
	  return evaluates("var { first: f, last: l } = { first: 'Jane', last: 'Doe' }")
	}

	/**
	 * Returns true if the spread operator (`...`) is available.
	 *
	 * @returns {boolean}
	 */
	exports.spread = function () {
	  return evaluates('Math.max(...[ 5, 10 ])')
	}

	function evaluates (statement) {
	  try {
	    eval(statement)
	    return true
	  } catch (err) {
	    return false
	  }
	}

	/**
	 * Returns true if *all* specified features are detected.
	 *
	 * @returns {boolean}
	 * @param [...feature] {string} - the features to detect.
	 * @example
	 * var result = detect.all('class', 'spread', 'let', 'arrowFunction')
	 */
	exports.all = function () {
	  return arrayify(arguments).every(function (testName) {
	    return exports[testName]()
	  })
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var t = __webpack_require__(4);

	/**
	@module array-back
	@example
	var arrayify = require("array-back");
	*/
	module.exports = arrayify;

	/**
	Takes any input and guarantees an array back.

	- converts array-like objects (e.g. `arguments`) to a real array
	- converts `undefined` to an empty array
	- converts any another other, singular value (including `null`) into an array containing that value
	- ignores input which is already an array

	@param {*} - the input value to convert to an array
	@returns {Array}
	@alias module:array-back
	@example
	> a.arrayify(undefined)
	[]

	> a.arrayify(null)
	[ null ]

	> a.arrayify(0)
	[ 0 ]

	> a.arrayify([ 1, 2 ])
	[ 1, 2 ]

	> function f(){ return a.arrayify(arguments); }
	> f(1,2,3)
	[ 1, 2, 3 ]
	*/
	function arrayify(input){
	    if (input === undefined){
	        return [];
	    } else if (t.isArrayLike(input)){
	        return Array.prototype.slice.call(input);
	    } else {
	        return Array.isArray(input) ? input : [ input ];
	    }
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict'

	/**
	For type-checking Javascript values.
	@module typical
	@typicalname t
	@example
	var t = require("typical")
	*/
	exports.isNumber = isNumber
	exports.isString = isString
	exports.isBoolean = isBoolean
	exports.isPlainObject = isPlainObject
	exports.isArrayLike = isArrayLike
	exports.isObject = isObject
	exports.isDefined = isDefined
	exports.isFunction = isFunction

	/**
	Returns true if input is a number
	@param {*} - the input to test
	@returns {boolean}
	@static
	@example
	> t.isNumber(0)
	true
	> t.isNumber(1)
	true
	> t.isNumber(1.1)
	true
	> t.isNumber(0xff)
	true
	> t.isNumber(0644)
	true
	> t.isNumber(6.2e5)
	true
	> t.isNumber(NaN)
	false
	> t.isNumber(Infinity)
	false
	*/
	function isNumber (n) {
	  return !isNaN(parseFloat(n)) && isFinite(n)
	}

	/**
	A plain object is a simple object literal, it is not an instance of a class. Returns true if the input `typeof` is `object` and directly decends from `Object`.

	@param {*} - the input to test
	@returns {boolean}
	@static
	@example
	> t.isPlainObject({ clive: "hater" })
	true
	> t.isPlainObject(new Date())
	false
	> t.isPlainObject([ 0, 1 ])
	false
	> t.isPlainObject(1)
	false
	> t.isPlainObject(/test/)
	false
	*/
	function isPlainObject (input) {
	  return input !== null && typeof input === 'object' && input.constructor === Object
	}

	/**
	An array-like value has all the properties of an array, but is not an array instance. Examples in the `arguments` object. Returns true if the input value is an object, not null and has a `length` property with a numeric value.

	@param {*} - the input to test
	@returns {boolean}
	@static
	@example
	function sum(x, y){
	    console.log(t.isArrayLike(arguments))
	    // prints `true`
	}
	*/
	function isArrayLike (input) {
	  return isObject(input) && typeof input.length === 'number'
	}

	/**
	returns true if the typeof input is `"object"`, but not null!
	@param {*} - the input to test
	@returns {boolean}
	@static
	*/
	function isObject (input) {
	  return typeof input === 'object' && input !== null
	}

	/**
	Returns true if the input value is defined
	@param {*} - the input to test
	@returns {boolean}
	@static
	*/
	function isDefined (input) {
	  return typeof input !== 'undefined'
	}

	/**
	Returns true if the input value is a string
	@param {*} - the input to test
	@returns {boolean}
	@static
	*/
	function isString (input) {
	  return typeof input === 'string'
	}

	/**
	Returns true if the input value is a boolean
	@param {*} - the input to test
	@returns {boolean}
	@static
	*/
	function isBoolean (input) {
	  return typeof input === 'boolean'
	}

	/**
	Returns true if the input value is a function
	@param {*} - the input to test
	@returns {boolean}
	@static
	*/
	function isFunction (input) {
	  return typeof input === 'function'
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	var arrayify = __webpack_require__(3)
	var o = __webpack_require__(6)
	var Definitions = __webpack_require__(11)
	var option = __webpack_require__(12)
	var getUsage = __webpack_require__(14)
	var t = __webpack_require__(4)
	var Argv = __webpack_require__(113)

	/**
	A library to collect command-line args and generate a usage guide.

	@module command-line-args
	*/
	module.exports = commandLineArgs

	/**
	 * @class
	 * @classdesc A class encapsulating operations you can perform using an [OptionDefinition](#exp_module_definition--OptionDefinition) array as input.
	 *
	 * The constructor will throw if you pass invalid option definitions. You should fix these issues before proceeding.
	 * @param {module:definition[]} - An optional array of [OptionDefinition](#exp_module_definition--OptionDefinition) objects
	 * @typicalname cli
	 * @alias module:command-line-args
	 * @throws `NAME_MISSING` if an option definition is missing the required `name` property
	 * @throws `INVALID_TYPE` if an option definition has a `type` value that's not a function
	 * @throws `INVALID_ALIAS` if an alias is numeric, a hyphen or a length other than 1
	 * @throws `DUPLICATE_NAME` if an option definition name was used more than once
	 * @throws `DUPLICATE_ALIAS` if an option definition alias was used more than once
	 * @throws `DUPLICATE_DEFAULT_OPTION` if more than one option definition has `defaultOption: true`
	 * @example
	 * ```js
	 * var commandLineArgs = require('command-line-args')
	 * var cli = commandLineArgs([
	 *   { name: 'file' },
	 *   { name: 'verbose' },
	 *   { name: 'depth'}
	 * ])
	 * ```
	 */
	class CommandLineArgs {
	  constructor (definitions) {
	    this.definitions = new Definitions(definitions)
	  }

	  /**
	  Returns an object containing all the values and flags set on the command line. By default it parses the global [`process.argv`](https://nodejs.org/api/process.html#process_process_argv) array.

	  @param [argv] {string[]} - An array of strings, which if passed will be parsed instead of `process.argv`.
	  @returns {object}
	  @throws `UNKNOWN_OPTION` if the user sets an option without a definition
	  */
	  parse (argv) {
	    argv = new Argv(argv)
	    argv.expandOptionEqualsNotation()
	    argv.expandGetoptNotation()
	    argv.validate(this.definitions)

	    /* create output initialised with default values */
	    var output = this.definitions.createOutput()
	    var def

	    /* walk argv building the output */
	    argv.forEach(item => {
	      if (option.isOption(item)) {
	        def = this.definitions.get(item)
	        if (!t.isDefined(output[def.name])) outputSet(output, def.name, def.getInitialValue())
	        if (def.isBoolean()) {
	          outputSet(output, def.name, true)
	          def = null
	        }
	      } else {
	        var value = item
	        if (!def) {
	          def = this.definitions.getDefault()
	          if (!def) return
	          if (!t.isDefined(output[def.name])) outputSet(output, def.name, def.getInitialValue())
	        }

	        var outputValue = def.type ? def.type(value) : value
	        outputSet(output, def.name, outputValue)

	        if (!def.multiple) def = null
	      }
	    })

	    /* clear _initial flags */
	    o.each(output, (value, key) => {
	      if (Array.isArray(value) && value._initial) delete value._initial
	    })

	    /* group the output values */
	    if (this.definitions.isGrouped()) {
	      var grouped = {
	        _all: output
	      }

	      this.definitions.whereGrouped().forEach(def => {
	        arrayify(def.group).forEach(groupName => {
	          grouped[groupName] = grouped[groupName] || {}
	          if (t.isDefined(output[def.name])) {
	            grouped[groupName][def.name] = output[def.name]
	          }
	        })
	      })

	      this.definitions.whereNotGrouped().forEach(def => {
	        if (t.isDefined(output[def.name])) {
	          if (!grouped._none) grouped._none = {}
	          grouped._none[def.name] = output[def.name]
	        }
	      })
	      return grouped
	    } else {
	      return output
	    }
	  }

	  /**
	  Generates a usage guide. Please see [command-line-usage](https://github.com/75lb/command-line-usage) for full instructions of how to use.

	  @param [options] {object} - the options to pass to [command-line-usage](https://github.com/75lb/command-line-usage)
	  @returns {string}
	  */
	  getUsage (options) {
	    return getUsage(this.definitions, options)
	  }
	}

	function outputSet (output, property, value) {
	  if (output[property] && output[property]._initial) {
	    output[property] = []
	    delete output[property]._initial
	  }
	  if (Array.isArray(output[property])) {
	    output[property].push(value)
	  } else {
	    output[property] = value
	  }
	}

	/* Factory method: initialises a new CommandLineArgs instance. */
	function commandLineArgs (definitions) {
	  return new CommandLineArgs(definitions)
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	var a = __webpack_require__(7)
	var t = __webpack_require__(4)
	var objectGet = __webpack_require__(8)
	var testValue = __webpack_require__(10)

	/**
	Useful functions for working with objects
	@module object-tools
	@typicalname o
	@example
	var o = require("object-tools")
	*/
	exports.extend = extend
	exports.clone = clone
	exports.every = every
	exports.each = each
	exports.exists = testValue
	exports.without = without
	exports.extract = extract
	exports.where = where
	exports.select = select
	exports.get = objectGet

	/**
	Merge a list of objects, left to right, into one - to a maximum depth of 10.

	@param {...object} object - a sequence of object instances to be extended
	@returns {object}
	@static
	@example
	> o.extend({ one: 1, three: 3 }, { one: "one", two: 2 }, { four: 4 })
	{ one: 'one',
	  three: 3,
	  two: 2,
	  four: 4 }
	*/
	function extend () {
	  var depth = 0
	  var args = a.arrayify(arguments)
	  if (!args.length) return {}
	  var last = a(args).last()
	  if (t.isPlainObject(last) && '__depth' in last) {
	    depth = last.__depth
	    args.pop()
	  }
	  return args.reduce(function (output, curr) {
	    if (typeof curr !== 'object') return output
	    for (var prop in curr) {
	      var value = curr[prop]
	      if (value === undefined) break
	      if (t.isObject(value) && !Array.isArray(value) && depth < 10) {
	        if (!output[prop]) output[prop] = {}
	        output[prop] = extend(output[prop], value, { __depth: ++depth })
	      } else {
	        output[prop] = value
	      }
	    }
	    return output
	  }, {})
	}

	/**
	Clones an object or array
	@param {object|array} input - the input to clone
	@returns {object|array}
	@static
	@example
	> date = new Date()
	Fri May 09 2014 13:54:34 GMT+0200 (CEST)
	> o.clone(date)
	{}  // a Date instance doesn't own any properties
	> date.clive = "hater"
	'hater'
	> o.clone(date)
	{ clive: 'hater' }
	> array = [1,2,3]
	[ 1, 2, 3 ]
	> newArray = o.clone(array)
	[ 1, 2, 3 ]
	> array === newArray
	false
	*/
	function clone (input) {
	  var output
	  if (typeof input === 'object' && !Array.isArray(input) && input !== null) {
	    output = {}
	    for (var prop in input) {
	      output[prop] = input[prop]
	    }
	    return output
	  } else if (Array.isArray(input)) {
	    output = []
	    input.forEach(function (item) {
	      output.push(clone(item))
	    })
	    return output
	  } else {
	    return input
	  }
	}

	/**
	Returns true if the supplied iterator function returns true for every property in the object
	@param {object} - the object to inspect
	@param {Function} - the iterator function to run against each key/value pair, the args are `(value, key)`.
	@returns {boolean}
	@static
	@example
	> function aboveTen(input){ return input > 10; }
	> o.every({ eggs: 12, carrots: 30, peas: 100 }, aboveTen)
	true
	> o.every({ eggs: 6, carrots: 30, peas: 100 }, aboveTen)
	false
	*/
	function every (object, iterator) {
	  var result = true
	  for (var prop in object) {
	    result = result && iterator(object[prop], prop)
	  }
	  return result
	}

	/**
	Runs the iterator function against every key/value pair in the input object
	@param {object} - the object to iterate
	@param {Function} - the iterator function to run against each key/value pair, the args are `(value, key)`.
	@static
	@example
	> var total = 0
	> function addToTotal(n){ total += n; }
	> o.each({ eggs: 3, celery: 2, carrots: 1 }, addToTotal)
	> total
	6
	*/
	function each (object, callback) {
	  for (var prop in object) {
	    callback(object[prop], prop)
	  }
	}

	/**
	returns true if the key/value pairs in `query` also exist identically in `object`.
	Also supports RegExp values in `query`. If the `query` property begins with `!` then test is negated.

	@method exists
	@param object {object} - the object to examine
	@param query {object} - the key/value pairs to look for
	@returns {boolean}
	@static
	@example
	> o.exists({ a: 1, b: 2}, {a: 0})
	false
	> o.exists({ a: 1, b: 2}, {a: 1})
	true
	> o.exists({ a: 1, b: 2}, {"!a": 1})
	false
	> o.exists({ name: "clive hater" }, { name: /clive/ })
	true
	> o.exists({ name: "clive hater" }, { "!name": /ian/ })
	true
	> o.exists({ a: 1}, { a: function(n){ return n > 0; } })
	true
	> o.exists({ a: 1}, { a: function(n){ return n > 1; } })
	false
	*/

	/**
	Returns a clone of the object minus the specified properties. See also {@link module:object-tools.select}.
	@param {object} - the input object
	@param {string|string[]} - a single property, or array of properties to omit
	@returns {object}
	@static
	@example
	> o.without({ a: 1, b: 2, c: 3}, "b")
	{ a: 1, c: 3 }
	> o.without({ a: 1, b: 2, c: 3}, ["b", "a"])
	{ c: 3 }
	*/
	function without (object, toRemove) {
	  toRemove = a.arrayify(toRemove)
	  var output = clone(object)
	  toRemove.forEach(function (remove) {
	    delete output[remove]
	  })
	  return output
	}

	/**
	Returns a new object containing the key/value pairs which satisfy the query
	@param {object} - The input object
	@param {string[]|function(*, string)} - Either an array of property names, or a function. The function is called with `(value, key)` and must return `true` to be included in the output.
	@returns {object}
	@static
	@example
	> object = { a: 1, b: 0, c: 2 }
	{ a: 1, b: 0, c: 2 }
	> o.where(object, function(value, key){
	      return value > 0
	  })
	{ a: 1, c: 2 }
	> o.where(object, [ "b" ])
	{ b: 0 }
	> object
	{ a: 1, b: 0, c: 2 }
	@since 1.2.0
	*/
	function where (object, query) {
	  var output = {}
	  var prop
	  if (typeof query === 'function') {
	    for (prop in object) {
	      if (query(object[prop], prop) === true) output[prop] = object[prop]
	    }
	  } else if (Array.isArray(query)) {
	    for (prop in object) {
	      if (query.indexOf(prop) > -1) output[prop] = object[prop]
	    }
	  }
	  return output
	}

	/**
	identical to `o.where(object, query)` with one exception - the found properties are removed from the input `object`
	@param {object} - The input object
	@param {string[]|function(*, string)} - Either an array of property names, or a function. The function is called with `(value, key)` and must return `true` to be included in the output.
	@returns {object}
	@static
	@example
	> object = { a: 1, b: 0, c: 2 }
	{ a: 1, b: 0, c: 2 }
	> o.where(object, function(value, key){
	      return value > 0
	  })
	{ a: 1, c: 2 }
	> object
	{ b: 0 }
	@since 1.2.0
	*/
	function extract (object, query) {
	  var output = where(object, query)
	  for (var prop in output) {
	    delete object[prop]
	  }
	  return output
	}

	/**
	Returns a new object containing only the selected fields. See also {@link module:object-tools.without}.
	@param {object} - the input object
	@param {string|array} - a list of fields to return
	@returns {object}
	@static
	*/
	function select (object, fields) {
	  return a.arrayify(fields).reduce(function (prev, curr) {
	    prev[curr] = object[curr]
	    return prev
	  }, {})
	}

	/**
	Returns the value at the given property.
	@param object {object} - the input object
	@param expression {string} - the property accessor expression
	@returns {*}
	@method get
	@static
	@memberof module:object-tools
	@since 1.4.0
	*/


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	var objectGet = __webpack_require__(8)
	var arrayify = __webpack_require__(3)
	var sortBy = __webpack_require__(9)
	var testValue = __webpack_require__(10)

	/**
	@module
	@typicalname a
	*/
	module.exports = ArrayTools

	ArrayTools.pluck = pluck
	ArrayTools.pick = pick
	ArrayTools.arrayify = arrayify
	ArrayTools.exists = exists
	ArrayTools.without = without
	ArrayTools.where = where
	ArrayTools.findWhere = findWhere
	ArrayTools.unique = unique
	ArrayTools.spliceWhile = spliceWhile
	ArrayTools.extract = extract
	ArrayTools.remove = remove
	ArrayTools.flatten = flatten
	ArrayTools.sortBy = sortBy
	ArrayTools.last = last
	ArrayTools.contains = contains

	function ArrayTools (input) {
	  if (!(this instanceof ArrayTools)) return new ArrayTools(input)
	  this._data = input
	  this.val = function () {
	    var endValue = this._data
	    this._data = input
	    return endValue
	  }
	}

	/* Array methods which return the chainable */
	['filter', 'reverse', 'sort', 'concat', 'slice', 'map'].forEach(function (method) {
	  ArrayTools.prototype[method] = function () {
	    this._data = Array.prototype[method].apply(this._data, arguments)
	    return this
	  }
	})

	/* Array method chain terminators, return a scalar or undefined */
	;['join', 'every', 'some', 'forEach'].forEach(function (method) {
	  ArrayTools.prototype[method] = function () {
	    var endValue = this.val()
	    return Array.prototype[method].apply(endValue, arguments)
	  }
	})

	/* array-tools methods which return the chainable */
	;['pluck', 'pick', 'arrayify', 'where', 'without', 'unique', 'spliceWhile', 'extract', 'flatten', 'sortBy'].forEach(function (method) {
	  ArrayTools.prototype[method] = function () {
	    var args = arrayify(arguments)
	    args.unshift(this._data)
	    this._data = ArrayTools[method].apply(null, args)
	    return this
	  }
	})

	/* array-tools method chain terminators, return a scalar or non-array */
	;['exists', 'findWhere', 'last', 'remove', 'contains'].forEach(function (method) {
	  ArrayTools.prototype[method] = function () {
	    var args = arrayify(arguments)
	    var endValue = this.val()
	    args.unshift(endValue)
	    return ArrayTools[method].apply(null, args)
	  }
	})

	/**
	Takes any input and guarantees an array back.

	- converts array-like objects (e.g. `arguments`) to a real array
	- converts `undefined` to an empty array
	- converts any another other, singular value (including `null`) into an array containing that value
	- ignores input which is already an array

	@param any {*} - the input value to convert to an array
	@returns {Array}
	@category chainable
	@method arrayify
	@static
	@example
	> a.arrayify(undefined)
	[]

	> a.arrayify(null)
	[ null ]

	> a.arrayify(0)
	[ 0 ]

	> a.arrayify([ 1, 2 ])
	[ 1, 2 ]

	> function f(){ return a.arrayify(arguments); }
	> f(1,2,3)
	[ 1, 2, 3 ]
	*/

	/**
	Deep query an array.

	@param {object[]} - the array to query
	@param {any | any[]} - one or more queries
	@returns {Array}
	@category chainable
	@static
	@example
	Say you have a recordset:
	```js
	> data = [
	    { name: "Dana", age: 30 },
	    { name: "Yana", age: 20 },
	    { name: "Zhana", age: 10 }
	]
	```

	You can return records with properties matching an exact value:
	```js
	> a.where(data, { age: 10 })
	[ { name: 'Zhana', age: 10 } ]
	```

	or where NOT the value (prefix the property name with `!`)
	```js
	> a.where(data, { "!age": 10 })
	[ { name: 'Dana', age: 30 }, { name: 'Yana', age: 20 } ]
	```

	match using a function:
	```js
	> function over10(age){ return age > 10; }
	> a.where(data, { age: over10 })
	[ { name: 'Dana', age: 30 }, { name: 'Yana', age: 20 } ]
	```

	match using a regular expression
	```js
	> a.where(data, { name: /ana/ })
	[ { name: 'Dana', age: 30 },
	  { name: 'Yana', age: 20 },
	  { name: 'Zhana', age: 10 } ]
	```

	You can query to any arbitrary depth. So with deeper data, like this:
	```js
	> deepData = [
	    { name: "Dana", favourite: { colour: "light red" } },
	    { name: "Yana", favourite: { colour: "dark red" } },
	    { name: "Zhana", favourite: { colour: [ "white", "red" ] } }
	]
	```

	get records with `favourite.colour` values matching `/red/`
	```js
	> a.where(deepData, { favourite: { colour: /red/ } })
	[ { name: 'Dana', favourite: { colour: 'light red' } },
	  { name: 'Yana', favourite: { colour: 'dark red' } } ]
	```

	if the value you're looking for _maybe_ part of an array, prefix the property name with `+`. Now Zhana is included:
	```js
	> a.where(deepData, { favourite: { "+colour": /red/ } })
	[ { name: 'Dana', favourite: { colour: 'light red' } },
	  { name: 'Yana', favourite: { colour: 'dark red' } },
	  { name: 'Zhana', favourite: { colour: [ "white", "red" ] } } ]
	```

	you can combine any of the above by supplying an array of queries. Records will be returned if _any_ of the queries match:
	```js
	> var nameBeginsWithY = { name: /^Y/ }
	> var faveColourIncludesWhite = { favourite: { "+colour": "white" } }

	> a.where(deepData, [ nameBeginsWithY, faveColourIncludesWhite ])
	[ { name: 'Yana', favourite: { colour: 'dark red' } },
	  { name: 'Zhana', favourite: { colour: [ "white", "red" ] } } ]
	```
	*/
	function where (array, query) {
	  array = arrayify(array)
	  return array.filter(function (item) {
	    return testValue(item, query)
	  })
	}

	/**
	Returns a new array with the same content as the input minus the specified values. It accepts the same query syntax as {@link module:array-tools.where}.

	@param {Array} - the input array
	@param {any | any[]} - one, or more queries
	@returns {Array}
	@category chainable
	@example
	> a.without([ 1, 2, 3 ], 2)
	[ 1, 3 ]

	> a.without([ 1, 2, 3 ], [ 2, 3 ])
	[ 1 ]

	> data = [
	    { name: "Dana", age: 30 },
	    { name: "Yana", age: 20 },
	    { name: "Zhana", age: 10 }
	]
	> a.without(data, { name: /ana/ })
	[]

	@alias module:array-tools.without
	*/
	function without (array, toRemove) {
	  toRemove = arrayify(toRemove)
	  return array.filter(function (item) {
	    return !testValue(item, toRemove)
	  })
	}

	/**
	Works in exactly the same way as {@link module:array-tools.where} but returning a boolean indicating whether a matching record exists.

	@param {Array} - the array to search
	@param {*} - the value to search for
	@returns {boolean}
	@category not chainable
	@static
	@example
	> data = [
	    { name: "Dana", age: 30 },
	    { name: "Yana", age: 20 },
	    { name: "Zhana", age: 10 }
	]

	> a.exists(data, { age: 10 })
	true
	*/
	function exists (array, query) {
	  return arrayify(array).some(function (item) {
	    return testValue(item, query)
	  })
	}

	/**
	Returns an array containing each value plucked from the specified property of each object in the input array.

	@param recordset {object[]} - The input recordset
	@param property {string|string[]} - Property name, or an array of property names. If an array is supplied, the first existing property will be returned.
	@returns {Array}
	@category chainable
	@static
	@example
	with this data..
	```js
	> var data = [
	    { name: "Pavel", nick: "Pasha" },
	    { name: "Richard", nick: "Dick" },
	    { name: "Trevor" },
	]
	```

	pluck all the nicknames
	```js
	> a.pluck(data, "nick")
	[ 'Pasha', 'Dick' ]
	```

	in the case no nickname exists, take the name instead:
	```js
	> a.pluck(data, [ "nick", "name" ])
	[ 'Pasha', 'Dick', 'Trevor' ]
	```

	the values being plucked can be at any depth:
	```js
	> var data = [
	    { leeds: { leeds: { leeds: "we" } } },
	    { leeds: { leeds: { leeds: "are" } } },
	    { leeds: { leeds: { leeds: "Leeds" } } }
	]

	> a.pluck(data, "leeds.leeds.leeds")
	[ 'we', 'are', 'Leeds' ]
	```
	*/
	function pluck (recordset, property) {
	  recordset = arrayify(recordset)
	  var properties = arrayify(property)

	  return recordset
	    .map(function (record) {
	      for (var i = 0; i < properties.length; i++) {
	        var propValue = objectGet(record, properties[i])
	        if (propValue) return propValue
	      }
	    })
	    .filter(function (record) {
	      return typeof record !== 'undefined'
	    })
	}

	/**
	return a copy of the input `recordset` containing objects having only the cherry-picked properties
	@param recordset {object[]} - the input
	@param property {string|string[]} - the properties to include in the result
	@return {object[]}
	@category chainable
	@static
	@example
	with this data..
	```js
	> data = [
	    { name: "Dana", age: 30 },
	    { name: "Yana", age: 20 },
	    { name: "Zhana", age: 10 }
	]
	```

	return only the `"name"` field..
	```js
	> a.pick(data, "name")
	[ { name: 'Dana' }, { name: 'Yana' }, { name: 'Zhana' } ]
	```

	return both the `"name"` and `"age"` fields
	```js
	> a.pick(data, [ "name", "age" ])
	[ { name: 'Dana', age: 30 },
	  { name: 'Yana', age: 20 },
	  { name: 'Zhana', age: 10 } ]
	```

	cherry-picks fields at any depth:
	```js
	> data = [
	    { person: { name: "Dana", age: 30 }},
	    { person: { name: "Yana", age: 20 }},
	    { person: { name: "Zhana", age: 10 }}
	]

	> a.pick(data, "person.name")
	[ { name: 'Dana' }, { name: 'Yana' }, { name: 'Zhana' } ]

	> a.pick(data, "person.age")
	[ { age: 30 }, { age: 20 }, { age: 10 } ]
	```
	*/
	function pick (recordset, property) {
	  recordset = arrayify(recordset)
	  var properties = arrayify(property)

	  return recordset
	    .filter(function (obj) {
	      return properties.some(function (prop) {
	        return objectGet(obj, prop) !== undefined
	      })
	    })
	    .map(function (obj) {
	      var output = {}
	      properties.forEach(function (prop) {
	        var lastProp = last(prop.split('.'))
	        var value = objectGet(obj, prop)
	        if (value) output[lastProp] = value
	      })
	      return output
	    })
	}

	/**
	Works in exactly the same way as {@link module:array-tools.where} but returns only the first item found.

	@param {object[]} - the array to search
	@param {object} - the search query
	@returns {*}
	@category not chainable
	@static
	@example
	> dudes = [
	    { name: 'Jim', age: 8 },
	    { name: 'Clive', age: 8 },
	    { name: 'Hater', age: 9 }
	]

	> a.findWhere(dudes, { age: 8 })
	{ name: 'Jim', age: 8 }
	*/
	function findWhere (recordset, query) {
	  return where(recordset, query)[0]
	}

	/**
	Returns an array containing the unique values from the input array.
	@param {Array} - input array
	@returns {Array}
	@category chainable
	@example
	> a.unique([ 1, 6, 6, 7, 1])
	[ 1, 6, 7 ]
	@static
	*/
	function unique (array) {
	  return array.reduce(function (prev, curr) {
	    if (prev.indexOf(curr) === -1) prev.push(curr)
	    return prev
	  }, [])
	}

	/**
	Splice items from the input array until the matching test fails. Returns an array containing the items removed.

	@param {Array} - the input array
	@param {number} - the position to begin splicing from
	@param {any} - the sequence of items passing this test will be removed
	@param ...elementN {*} - elements to add to the array in place
	@returns {Array}
	@category chainable
	@static
	@example
	> function under10(n){ return n < 10; }
	> numbers = [ 1, 2, 4, 6, 12 ]

	> a.spliceWhile(numbers, 0, under10)
	[ 1, 2, 4, 6 ]
	> numbers
	[ 12 ]

	> countries = [ "Egypt", "Ethiopia", "France", "Argentina" ]

	> a.spliceWhile(countries, 0, /^e/i)
	[ 'Egypt', 'Ethiopia' ]
	> countries
	[ 'France', 'Argentina' ]
	*/
	function spliceWhile (array, index, test) {
	  for (var i = 0; i < array.length; i++) {
	    if (!testValue(array[i], test)) break
	  }
	  var spliceArgs = [ index, i ]
	  spliceArgs = spliceArgs.concat(arrayify(arguments).slice(3))
	  return array.splice.apply(array, spliceArgs)
	}

	/**
	Removes items from `array` which satisfy the query. Modifies the input array, returns the extracted.

	@param {Array} - the input array, modified directly
	@param {any} - if an item in the input array passes this test it is removed
	@returns {Array} the extracted items.
	@category chainable
	@static
	@example
	> DJs = [
	    { name: "Trevor", sacked: true },
	    { name: "Mike", sacked: true },
	    { name: "Chris", sacked: false },
	    { name: "Alan", sacked: false }
	]

	> a.extract(DJs, { sacked: true })
	[ { name: 'Trevor', sacked: true },
	  { name: 'Mike', sacked: true } ]

	> DJs
	[ { name: 'Chris', sacked: false },
	  { name: 'Alan', sacked: false } ]

	*/
	function extract (array, query) {
	  var result = []
	  var toSplice = []
	  arrayify(array).forEach(function (item, index) {
	    if (testValue(item, query)) {
	      result.push(item)
	      toSplice.push(index)
	    }
	  })
	  for (var i = 0; i < toSplice.length; i++) {
	    array.splice(toSplice[i] - i, 1)
	  }
	  return result
	}

	/**
	Removes the specified value from the input array.

	@param {Array} - the input array
	@param {*} - the item to remove
	@category not chainable
	@return {*}
	@static
	@since 1.8.0
	@example
	> numbers = [ 1, 2, 3 ]
	> a.remove(numbers, 1)
	[ 1 ]

	> numbers
	[ 2, 3 ]
	*/
	function remove (arr, toRemove) {
	  return arr.splice(arr.indexOf(toRemove), 1)[0]
	}

	/**
	flatten an array of arrays into a single array.

	@static
	@since 1.4.0
	@param {Array} - the input array
	@returns {Array}
	@category chainable
	@example
	> numbers = [ 1, 2, [ 3, 4 ], 5 ]
	> a.flatten(numbers)
	[ 1, 2, 3, 4, 5 ]
	*/
	function flatten (array) {
	  return arrayify(array).reduce(function (prev, curr) {
	    return prev.concat(curr)
	  }, [])
	}

	/**
	Sort an array of objects by one or more fields
	@member sortBy
	@static
	@param {object[]} - input array
	@param {string|string[]} - column name(s) to sort by
	@param {object} - specific sort orders, per columns
	@returns {Array}
	@category chainable
	@since 1.5.0
	@example
	with this data
	```js
	> DJs = [
	    { name: "Trevor", slot: "twilight" },
	    { name: "Chris", slot: "twilight" },
	    { name: "Mike", slot: "afternoon" },
	    { name: "Rodney", slot: "morning" },
	    { name: "Chris", slot: "morning" },
	    { name: "Zane", slot: "evening" }
	]
	```

	sort by `slot` using the default sort order
	```js
	> a.sortBy(DJs, "slot")
	[ { name: 'Mike', slot: 'afternoon' },
	  { name: 'Zane', slot: 'evening' },
	  { name: 'Chris', slot: 'morning' },
	  { name: 'Rodney', slot: 'morning' },
	  { name: 'Chris', slot: 'twilight' },
	  { name: 'Trevor', slot: 'twilight' } ]
	```

	specify a custom sort order for `slot`
	```js
	> a.sortBy(DJs, "slot", { slot: [ "morning", "afternoon", "evening", "twilight" ]})
	[ { name: 'Rodney', slot: 'morning' },
	  { name: 'Chris', slot: 'morning' },
	  { name: 'Mike', slot: 'afternoon' },
	  { name: 'Zane', slot: 'evening' },
	  { name: 'Trevor', slot: 'twilight' },
	  { name: 'Chris', slot: 'twilight' } ]
	```

	sort by `slot` then `name`
	```js
	> a.sortBy(DJs, ["slot", "name"], { slot: [ "morning", "afternoon", "evening", "twilight" ]})
	[ { name: 'Chris', slot: 'morning' },
	  { name: 'Rodney', slot: 'morning' },
	  { name: 'Mike', slot: 'afternoon' },
	  { name: 'Zane', slot: 'evening' },
	  { name: 'Chris', slot: 'twilight' },
	  { name: 'Trevor', slot: 'twilight' } ]
	```
	*/

	/**
	Return the last item in an array.
	@param {Array} - the input array
	@category not chainable
	@return {*}
	@static
	@since 1.7.0
	*/
	function last (arr) {
	  return arr[arr.length - 1]
	}

	/**
	Searches the array for the exact value supplied (strict equality). To query for value existance using an expression or function, use {@link module:array-tools.exists}. If you pass an array of values, contains will return true if they _all_ exist. (note: `exists` returns true if _some_ of them exist).

	@param {Array} - the input array
	@param {*} - the value to look for
	@category not chainable
	@return {boolean}
	@static
	@since 1.8.0
	*/
	function contains (array, value) {
	  if (Array.isArray(array) && !Array.isArray(value)) {
	    return array.indexOf(value) > -1
	  } else if (Array.isArray(array) && Array.isArray(value)) {
	    return value.every(function (item) {
	      return contains(array, item)
	    })
	  } else {
	    return array === value
	  }
	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict'

	/**
	Gets a value for a property path.
	@module object-get
	@typicalname objectGet
	@example
	var objectGet = require("object-get")
	*/
	module.exports = objectGet

	/**
	Returns the value at the given property.
	@param {object} - the input object
	@param {string} - the property accessor expression
	@returns {*}
	@alias module:object-get
	*/
	function objectGet (object, expression) {
	  return expression.trim().split('.').reduce(function (prev, curr) {
	    return prev && prev[curr]
	  }, object)
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var arrayify = __webpack_require__(3);

	/**
	Sort an array of objects by any number of fields, in any order. 

	@module sort-array
	@typicalname sortBy
	@example
	var sortBy = require("sort-array");
	*/
	module.exports = sortBy;

	/**
	Sort an array of objects by one or more fields
	@param {object[]} - input array
	@param {string|string[]} - column name(s) to sort by
	@param {object} - specific sort orders, per columns
	@returns {Array}
	@alias module:sort-array
	@example
	with this data
	```js
	> DJs = [
	    { name: "Trevor", slot: "twilight" },
	    { name: "Chris", slot: "twilight" },
	    { name: "Mike", slot: "afternoon" },
	    { name: "Rodney", slot: "morning" },
	    { name: "Chris", slot: "morning" },
	    { name: "Zane", slot: "evening" }
	]
	```

	sort by `slot` using the default sort order (alphabetical)
	```js
	> a.sortBy(DJs, "slot")
	[ { name: 'Mike', slot: 'afternoon' },
	  { name: 'Zane', slot: 'evening' },
	  { name: 'Chris', slot: 'morning' },
	  { name: 'Rodney', slot: 'morning' },
	  { name: 'Chris', slot: 'twilight' },
	  { name: 'Trevor', slot: 'twilight' } ]
	```

	specify a custom sort order for `slot`
	```js
	> var slotOrder = [ "morning", "afternoon", "evening", "twilight" ];
	> a.sortBy(DJs, "slot", { slot: slotOrder })
	[ { name: 'Rodney', slot: 'morning' },
	  { name: 'Chris', slot: 'morning' },
	  { name: 'Mike', slot: 'afternoon' },
	  { name: 'Zane', slot: 'evening' },
	  { name: 'Trevor', slot: 'twilight' },
	  { name: 'Chris', slot: 'twilight' } ]
	```

	sort by `slot` then `name`
	```js
	> a.sortBy(DJs, ["slot", "name"], { slot: slotOrder })
	[ { name: 'Chris', slot: 'morning' },
	  { name: 'Rodney', slot: 'morning' },
	  { name: 'Mike', slot: 'afternoon' },
	  { name: 'Zane', slot: 'evening' },
	  { name: 'Chris', slot: 'twilight' },
	  { name: 'Trevor', slot: 'twilight' } ]
	```
	*/
	function sortBy(recordset, columns, customOrder){
	    return recordset.sort(sortByFunc(arrayify(columns), customOrder));
	}

	function sortByFunc(properties, customOrder){
	    var props = properties.slice(0);
	    var property = props.shift();
	    return function tryIt(a, b){
	        var result;
	        var x = a[property];
	        var y = b[property];

	        if (typeof x === "undefined" && typeof y !== "undefined"){
	            result = -1;
	        } else if (typeof x !== "undefined" && typeof y === "undefined"){
	            result = 1;
	        } else if (typeof x === "undefined" && typeof y === "undefined"){
	            result = 0;
	        } else if (customOrder && customOrder[property]){
	            result = customOrder[property].indexOf(x) - customOrder[property].indexOf(y);
	        } else {
	            result = x < y ? -1 : x > y ? 1 : 0;
	        }

	        if (result === 0){
	            if (props.length){
	                property = props.shift();
	                return tryIt(a, b);
	            } else {
	                return 0;
	            }
	        } else {
	            props = properties.slice(0);
	            property = props.shift();
	            return result;
	        }
	        return 0;
	    };
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var arrayify = __webpack_require__(3);
	var t = __webpack_require__(4);

	/**
	@module test-value
	@example
	var testValue = require("test-value");
	*/
	module.exports = testValue;

	/**
	@alias module:test-value
	@param {any} - a value to test
	@param {any} - the test query
	@returns {boolean}
	*/
	function testValue(value, test){
	    if (t.isPlainObject(test) && t.isObject(value)){
	        return Object.keys(test).every(function(prop){
	            var queryValue = test[prop];

	            /* get flags */
	            var isNegated = false;
	            var isContains = false;

	            if (prop.charAt(0) === "!"){
	                isNegated = true;
	            } else if (prop.charAt(0) === "+") {
	                isContains = true;
	            }

	            /* strip flag char */
	            prop = (isNegated || isContains) ? prop.slice(1) : prop;
	            var objectValue = value[prop];

	            if (isContains){
	                queryValue = arrayify(queryValue);
	                objectValue = arrayify(objectValue);
	            }

	            var result = testValue(objectValue, queryValue);
	            return isNegated ? !result : result;
	        });
	    } else if (Array.isArray(test)){
	        var tests = test;
	        if (!Array.isArray(value)) value = [ value ];
	        return value.some(function(val){
	            return tests.some(function(test){
	                return testValue(val, test);
	            });
	        });

	    /*
	    regexes queries will always return `false` for `null`, `undefined`, `NaN`.
	    This is to prevent a query like `/.+/` matching the string `undefined`.
	    */
	    } else if (test instanceof RegExp){
	        if ([ "boolean", "string", "number" ].indexOf(typeof value)  === -1){
	            return false;
	        } else {
	            return test.test(value);
	        }

	    } else if (typeof test === "function"){
	        return test(value);
	    } else {
	        return test === value;
	    }
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	var arrayify = __webpack_require__(3)
	var option = __webpack_require__(12)
	var Definition = __webpack_require__(13)
	var t = __webpack_require__(4)

	/**
	 * @class
	 * @alias module:definitions
	 */
	class Definitions extends Array {
	  constructor (definitions) {
	    super()
	    arrayify(definitions).forEach(def => this.push(new Definition(def)))
	    this.validate()
	  }

	  /**
	   * validate option definitions
	   * @returns {string}
	   */
	  validate (argv) {
	    var someHaveNoName = this.some(def => !def.name)
	    if (someHaveNoName) {
	      halt(
	        'NAME_MISSING',
	        'Invalid option definitions: the `name` property is required on each definition'
	      )
	    }

	    var someDontHaveFunctionType = this.some(def => def.type && typeof def.type !== 'function')
	    if (someDontHaveFunctionType) {
	      halt(
	        'INVALID_TYPE',
	        'Invalid option definitions: the `type` property must be a setter fuction (default: `Boolean`)'
	      )
	    }

	    var invalidOption

	    var numericAlias = this.some(def => {
	      invalidOption = def
	      return t.isDefined(def.alias) && t.isNumber(def.alias)
	    })
	    if (numericAlias) {
	      halt(
	        'INVALID_ALIAS',
	        'Invalid option definition: to avoid ambiguity an alias cannot be numeric [--' + invalidOption.name + ' alias is -' + invalidOption.alias + ']'
	      )
	    }

	    var multiCharacterAlias = this.some(def => {
	      invalidOption = def
	      return t.isDefined(def.alias) && def.alias.length !== 1
	    })
	    if (multiCharacterAlias) {
	      halt(
	        'INVALID_ALIAS',
	        'Invalid option definition: an alias must be a single character'
	      )
	    }

	    var hypenAlias = this.some(def => {
	      invalidOption = def
	      return def.alias === '-'
	    })
	    if (hypenAlias) {
	      halt(
	        'INVALID_ALIAS',
	        'Invalid option definition: an alias cannot be "-"'
	      )
	    }

	    var duplicateName = hasDuplicates(this.map(def => def.name))
	    if (duplicateName) {
	      halt(
	        'DUPLICATE_NAME',
	        'Two or more option definitions have the same name'
	      )
	    }

	    var duplicateAlias = hasDuplicates(this.map(def => def.alias))
	    if (duplicateAlias) {
	      halt(
	        'DUPLICATE_ALIAS',
	        'Two or more option definitions have the same alias'
	      )
	    }

	    var duplicateDefaultOption = hasDuplicates(this.map(def => def.defaultOption))
	    if (duplicateDefaultOption) {
	      halt(
	        'DUPLICATE_DEFAULT_OPTION',
	        'Only one option definition can be the defaultOption'
	      )
	    }
	  }

	  createOutput () {
	    var output = {}
	    this.forEach(def => {
	      if (t.isDefined(def.defaultValue)) output[def.name] = def.defaultValue
	      if (Array.isArray(output[def.name])) {
	        output[def.name]._initial = true
	      }
	    })
	    return output
	  }

	  get (arg) {
	    return option.short.test(arg)
	      ? this.find(def => def.alias === option.short.name(arg))
	      : this.find(def => def.name === option.long.name(arg))
	  }

	  getDefault () {
	    return this.find(def => def.defaultOption === true)
	  }

	  isGrouped () {
	    return this.some(def => def.group)
	  }

	  whereGrouped () {
	    return this.filter(containsValidGroup)
	  }
	  whereNotGrouped () {
	    return this.filter(def => !containsValidGroup(def))
	  }

	}

	function halt (name, message) {
	  var err = new Error(message)
	  err.name = name
	  throw err
	}

	function containsValidGroup (def) {
	  return arrayify(def.group).some(group => group)
	}

	function hasDuplicates (array) {
	  var items = {}
	  for (var i = 0; i < array.length; i++) {
	    var value = array[i]
	    if (items[value]) {
	      return true
	    } else {
	      if (t.isDefined(value)) items[value] = true
	    }
	  }
	}

	/**
	@module definitions
	@private
	*/
	module.exports = Definitions


/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict'

	/**
	 * A module for testing for and extracting names from options (e.g. `--one`, `-o`)
	 *
	 * @module option
	 * @private
	 */

	class Arg {
	  constructor (re) {
	    this.re = re
	  }

	  name (arg) {
	    return arg.match(this.re)[1]
	  }
	  test (arg) {
	    return this.re.test(arg)
	  }
	}

	var option = {
	  short: new Arg(/^-([^\d-])$/),
	  long: new Arg(/^--(\S+)/),
	  combined: new Arg(/^-([^\d-]{2,})$/),
	  isOption (arg) { return this.short.test(arg) || this.long.test(arg) },
	  optEquals: new Arg(/^(--\S+)=(.*)/)
	}

	module.exports = option


/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict'
	/**
	@module definition
	*/

	/**
	@class
	@classdesc Describes a command-line option.
	@alias module:definition
	@typicalname option
	*/
	class OptionDefinition {
	  constructor (definition) {
	    this.name = definition.name
	    this.type = definition.type
	    this.alias = definition.alias
	    this.multiple = definition.multiple
	    this.defaultOption = definition.defaultOption
	    this.defaultValue = definition.defaultValue
	    this.group = definition.group

	    /* pick up any remaining properties */
	    for (var prop in definition) {
	      if (!this[prop]) this[prop] = definition[prop]
	    }
	  }

	  getInitialValue () {
	    if (this.multiple) {
	      return []
	    } else if (this.isBoolean() || !this.type) {
	      return true
	    } else {
	      return null
	    }
	  }

	  isBoolean () {
	    return this.type === Boolean
	  }

	  /* Note: as a temporary workaround of a jsdoc bug, the jsdoc comments are written below within the main block of the class rather than alongside the members */

	  /**
	  * The only required definition property is `name`, so the simplest working example is
	  * ```js
	  * [
	  *   { name: "file" },
	  *   { name: "verbose" },
	  *   { name: "depth"}
	  * ]
	  * ```
	  *
	  * In this case, the value of each option will be either a Boolean or string.
	  *
	  * | #   | Command line args | .parse() output |
	  * | --- | -------------------- | ------------ |
	  * | 1   | `--file` | `{ file: true }` |
	  * | 2   | `--file lib.js --verbose` | `{ file: "lib.js", verbose: true }` |
	  * | 3   | `--verbose very` | `{ verbose: "very" }` |
	  * | 4   | `--depth 2` | `{ depth: "2" }` |
	  *
	  * Unicode option names and aliases are valid, for example:
	  * ```js
	  * [
	  *   { name: 'один' },
	  *   { name: '两' },
	  *   { name: 'три', alias: 'т' }
	  * ]
	  * ```
	  * @type {string}
	  * @member name
	  * @instance
	  */

	  /**
	  * The `type` value is a setter function (you receive the output from this), enabling you to be specific about the type and value received.
	  *
	  * You can use a class, if you like:
	  *
	  * ```js
	  * var fs = require('fs')
	  *
	  * function FileDetails(filename){
	  *   if (!(this instanceof FileDetails)) return new FileDetails(filename)
	  *   this.filename = filename
	  *   this.exists = fs.existsSync(filename)
	  * }
	  *
	  * var cli = commandLineArgs([
	  *   { name: 'file', type: FileDetails },
	  *   { name: 'depth', type: Number }
	  * ])
	  * ```
	  *
	  * | #   | Command line args| .parse() output |
	  * | --- | ----------------- | ------------ |
	  * | 1   | `--file asdf.txt` | `{ file: { filename: 'asdf.txt', exists: false } }` |
	  *
	  * The `--depth` option expects a `Number`. If no value was set, you will receive `null`.
	  *
	  * | #   | Command line args | .parse() output |
	  * | --- | ----------------- | ------------ |
	  * | 2   | `--depth` | `{ depth: null }` |
	  * | 3   | `--depth 2` | `{ depth: 2 }` |
	  *
	  * @type {function}
	  * @member type
	  * @instance
	  */

	  /**
	  * getopt-style short option names. Can be any single character (unicode included) except a digit or hypen.
	  *
	  * ```js
	  * [
	  *   { name: "hot", alias: "h", type: Boolean },
	  *   { name: "discount", alias: "d", type: Boolean },
	  *   { name: "courses", alias: "c" , type: Number }
	  * ]
	  * ```
	  *
	  * | #   | Command line | .parse() output |
	  * | --- | ------------ | ------------ |
	  * | 1   | `-hcd` | `{ hot: true, courses: null, discount: true }` |
	  * | 2   | `-hdc 3` | `{ hot: true, discount: true, courses: 3 }` |
	  *
	  * @type {string}
	  * @member alias
	  * @instance
	  */

	  /**
	  * Set this flag if the option takes a list of values. You will receive an array of values passed through the `type` function (if specified).
	  *
	  * ```js
	  * [
	  *   { name: "files", type: String, multiple: true }
	  * ]
	  * ```
	  *
	  * | #   | Command line | .parse() output |
	  * | --- | ------------ | ------------ |
	  * | 1   | `--files one.js two.js` | `{ files: [ 'one.js', 'two.js' ] }` |
	  * | 2   | `--files one.js --files two.js` | `{ files: [ 'one.js', 'two.js' ] }` |
	  * | 3   | `--files *` | `{ files: [ 'one.js', 'two.js' ] }` |
	  *
	  * @type {boolean}
	  * @member multiple
	  * @instance
	  */

	  /**
	  * Any unclaimed command-line args will be set on this option. This flag is typically set on the most commonly-used option to make for more concise usage (i.e. `$ myapp *.js` instead of `$ myapp --files *.js`).
	  *
	  * ```js
	  * [
	  *   { name: "files", type: String, multiple: true, defaultOption: true }
	  * ]
	  * ```
	  *
	  * | #   | Command line | .parse() output |
	  * | --- | ------------ | ------------ |
	  * | 1   | `--files one.js two.js` | `{ files: [ 'one.js', 'two.js' ] }` |
	  * | 2   | `one.js two.js` | `{ files: [ 'one.js', 'two.js' ] }` |
	  * | 3   | `*` | `{ files: [ 'one.js', 'two.js' ] }` |
	  *
	  * @type {boolean}
	  * @member defaultOption
	  * @instance
	  */

	  /**
	  * An initial value for the option.
	  *
	  * ```js
	  * [
	  *   { name: "files", type: String, multiple: true, defaultValue: [ "one.js" ] },
	  *   { name: "max", type: Number, defaultValue: 3 }
	  * ]
	  * ```
	  *
	  * | #   | Command line | .parse() output |
	  * | --- | ------------ | ------------ |
	  * | 1   |  | `{ files: [ 'one.js' ], max: 3 }` |
	  * | 2   | `--files two.js` | `{ files: [ 'two.js' ], max: 3 }` |
	  * | 3   | `--max 4` | `{ files: [ 'one.js' ], max: 4 }` |
	  *
	  * @type {*}
	  * @member defaultValue
	  * @instance
	  */

	  /**
	  * When your app has a large amount of options it makes sense to organise them in groups.
	  *
	  * There are two automatic groups: `_all` (contains all options) and `_none` (contains options without a `group` specified in their definition).
	  *
	  * ```js
	  * [
	  *   { name: "verbose", group: "standard" },
	  *   { name: "help", group: [ "standard", "main" ] },
	  *   { name: "compress", group: [ "server", "main" ] },
	  *   { name: "static", group: "server" },
	  *   { name: "debug" }
	  * ]
	  * ```
	  *
	  *<table>
	  *  <tr>
	  *    <th>#</th><th>Command Line</th><th>.parse() output</th>
	  *  </tr>
	  *  <tr>
	  *    <td>1</td><td><code>--verbose</code></td><td><pre><code>
	  *{
	  *  _all: { verbose: true },
	  *  standard: { verbose: true }
	  *}
	  *</code></pre></td>
	  *  </tr>
	  *  <tr>
	  *    <td>2</td><td><code>--debug</code></td><td><pre><code>
	  *{
	  *  _all: { debug: true },
	  *  _none: { debug: true }
	  *}
	  *</code></pre></td>
	  *  </tr>
	  *  <tr>
	  *    <td>3</td><td><code>--verbose --debug --compress</code></td><td><pre><code>
	  *{
	  *  _all: {
	  *    verbose: true,
	  *    debug: true,
	  *    compress: true
	  *  },
	  *  standard: { verbose: true },
	  *  server: { compress: true },
	  *  main: { compress: true },
	  *  _none: { debug: true }
	  *}
	  *</code></pre></td>
	  *  </tr>
	  *  <tr>
	  *    <td>4</td><td><code>--compress</code></td><td><pre><code>
	  *{
	  *  _all: { compress: true },
	  *  server: { compress: true },
	  *  main: { compress: true }
	  *}
	  *</code></pre></td>
	  *  </tr>
	  *</table>
	  *
	  * @type {string|string[]}
	  * @member group
	  * @instance
	  */

	}

	module.exports = OptionDefinition


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var detect = __webpack_require__(2)

	module.exports = detect.class() && detect.arrowFunction() && detect.templateStrings()
	  ? __webpack_require__(15)
	  : __webpack_require__(111)


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	var columnLayout = __webpack_require__(16)
	var o = __webpack_require__(6)
	var ansi = __webpack_require__(109)
	var os = __webpack_require__(95)
	var t = __webpack_require__(4)
	var UsageOptions = __webpack_require__(110)
	var arrayify = __webpack_require__(3)

	/**
	@module command-line-usage
	*/
	module.exports = getUsage

	class Lines extends Array {
	  add (content) {
	    arrayify(content).forEach(line => this.push(ansi.format(line)))
	  }

	  emptyLine () {
	    this.push('')
	  }
	}

	/**
	@param {optionDefinition[]} - an array of [option definition](https://github.com/75lb/command-line-args#exp_module_definition--OptionDefinition) objects. In addition to the regular definition properties, command-line-usage will look for:

	- `description` - a string describing the option.
	- `typeLabel` - a string to replace the default type string (e.g. `<string>`). It's often more useful to set a more descriptive type label, like `<ms>`, `<files>`, `<command>` etc.

	@param options {module:usage-options} - see [UsageOptions](#exp_module_usage-options--UsageOptions).
	@returns {string}
	@alias module:command-line-usage
	*/
	function getUsage (definitions, options) {
	  options = new UsageOptions(options)
	  definitions = definitions || []

	  var output = new Lines()
	  output.emptyLine()

	  /* filter out hidden definitions */
	  if (options.hide && options.hide.length) {
	    definitions = definitions.filter(definition => options.hide.indexOf(definition.name) === -1)
	  }

	  if (options.header) {
	    output.add(renderSection('', options.header))
	  }

	  if (options.title || options.description) {
	    output.add(renderSection(options.title, options.description))
	  }

	  if (options.synopsis) {
	    output.add(renderSection('Synopsis', options.synopsis))
	  }

	  if (definitions.length) {
	    if (options.groups) {
	      o.each(options.groups, (val, group) => {
	        var title
	        var description
	        if (t.isObject(val)) {
	          title = val.title
	          description = val.description
	        } else if (t.isString(val)) {
	          title = val
	        } else {
	          throw new Error('Unexpected group config structure')
	        }

	        output.add(renderSection(title, description))

	        let optionList = getUsage.optionList(definitions, group)
	        output.add(renderSection(null, optionList, true))
	      })
	    } else {
	      output.add(renderSection('Options', getUsage.optionList(definitions), true))
	    }
	  }

	  if (options.examples) {
	    output.add(renderSection('Examples', options.examples))
	  }

	  if (options.footer) {
	    output.add(renderSection('', options.footer))
	  }

	  return output.join(os.EOL)
	}

	function getOptionNames (definition, optionNameStyles) {
	  var names = []
	  var type = definition.type ? definition.type.name.toLowerCase() : ''
	  var multiple = definition.multiple ? '[]' : ''
	  if (type) type = type === 'boolean' ? '' : `[underline]{${type}${multiple}}`
	  type = ansi.format(definition.typeLabel || type)

	  if (definition.alias) names.push(ansi.format('-' + definition.alias, optionNameStyles))
	  names.push(ansi.format(`--${definition.name}`, optionNameStyles) + ' ' + type)
	  return names.join(', ')
	}

	function renderSection (title, content, skipIndent) {
	  var lines = new Lines()

	  if (title) {
	    lines.add(ansi.format(title, [ 'underline', 'bold' ]))
	    lines.emptyLine()
	  }

	  if (!content) {
	    return lines
	  } else {
	    if (t.isString(content)) {
	      lines.add(indentString(content))
	    } else if (Array.isArray(content) && content.every(t.isString)) {
	      lines.add(skipIndent ? content : indentArray(content))
	    } else if (Array.isArray(content) && content.every(t.isPlainObject)) {
	      lines.add(columnLayout.lines(content, {
	        padding: { left: '  ', right: ' ' }
	      }))
	    } else if (t.isPlainObject(content)) {
	      if (!content.options || !content.data) {
	        throw new Error('must have an "options" or "data" property\n' + JSON.stringify(content))
	      }
	      content.options = o.extend({
	        padding: { left: '  ', right: ' ' }
	      }, content.options)
	      lines.add(columnLayout.lines(
	        content.data.map(row => formatRow(row)),
	        content.options
	      ))
	    } else {
	      var message = `invalid input - 'content' must be a string, array of strings, or array of plain objects:\n\n${JSON.stringify(content)}`
	      throw new Error(message)
	    }

	    lines.emptyLine()
	    return lines
	  }
	}

	function indentString (string) {
	  return '  ' + string
	}
	function indentArray (array) {
	  return array.map(indentString)
	}
	function formatRow (row) {
	  o.each(row, (val, key) => {
	    row[key] = ansi.format(val)
	  })
	  return row
	}

	/**
	 * A helper for getting a column-format list of options and descriptions. Useful for inserting into a custom usage template.
	 *
	 * @param {optionDefinition[]} - the definitions to Display
	 * @param [group] {string} - if specified, will output the options in this group. The special group `'_none'` will return options without a group specified.
	 * @returns {string[]}
	 */
	getUsage.optionList = function (definitions, group) {
	  if (!definitions || (definitions && !definitions.length)) {
	    throw new Error('you must pass option definitions to getUsage.optionList()')
	  }
	  var columns = []

	  if (group === '_none') {
	    definitions = definitions.filter(def => !t.isDefined(def.group))
	  } else if (group) {
	    definitions = definitions.filter(def => arrayify(def.group).indexOf(group) > -1)
	  }

	  definitions
	    .forEach(def => {
	      columns.push({
	        option: getOptionNames(def, 'bold'),
	        description: ansi.format(def.description)
	      })
	    })

	  return columnLayout.lines(columns, {
	    padding: { left: '  ', right: ' ' },
	    columns: [
	      { name: 'option', nowrap: true },
	      { name: 'description', maxWidth: 80 }
	    ]
	  })
	}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var detect = __webpack_require__(2)

	module.exports = detect.class() && detect.arrowFunction() && detect.templateStrings()
	  ? __webpack_require__(17)
	  : __webpack_require__(102)


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	__webpack_require__(18)
	__webpack_require__(72)
	__webpack_require__(80)
	__webpack_require__(84);

	var Table = __webpack_require__(93)
	var Columns = __webpack_require__(97)

	/**
	@module column-layout
	*/
	module.exports = columnLayout

	/**
	Returns JSON data formatted in columns.

	@param {array} - input data
	@param [options] {object} - optional settings
	@param [options.viewWidth] {number} - maximum width of layout
	@param [options.nowrap] {boolean} - disable wrapping on all columns
	@param [options.break] {boolean} - enable word-breaking on all columns
	@param [options.columns] {module:column-layout~columnOption} - array of column options
	@param [options.padding] {object} - Padding values to set on each column. Per-column overrides can be set in the `options.columns` array.
	@param [options.padding.left] {string}
	@param [options.padding.right] {string}
	@returns {string}
	@alias module:column-layout
	@example
	> columnFormat = require("column-format")
	> jsonData = [{
	    col1: "Some text you wish to read in column layout",
	    col2: "And some more text in column two. "
	}]
	> columnFormat(jsonData, { viewWidth: 30 })
	' Some text you  And some more \n wish to read   text in       \n in column      column two.   \n layout                       \n'
	*/
	function columnLayout (data, options) {
	  var table = new Table(data, options)
	  return table.render()
	}

	/**
	 * Identical to {@link module:column-layout} with the exception of the rendered result being returned as an array of lines, rather that a single string.
	 * @returns {Array}
	 * @example
	 * > columnFormat = require("column-format")
	 * > jsonData = [{
	     col1: "Some text you wish to read in column layout",
	     col2: "And some more text in column two. "
	 * }]
	 * > columnFormat.lines(jsonData, { viewWidth: 30 })
	 * [ ' Some text you  And some more ',
	 * ' wish to read   text in       ',
	 * ' in column      column two.   ',
	 * ' layout                       ' ]
	 */
	columnLayout.lines = function (data, options) {
	  var table = new Table(data, options)
	  return table.renderLines()
	}

	columnLayout.table = function (data, options) {
	  return new Table(data, options)
	}


	/**
	 * @typedef module:column-layout~columnOption
	 * @property [width] {number} - column width
	 * @property [minWidth] {number} - column min width
	 * @property [maxWidth] {number} - column max width
	 * @property [nowrap] {boolean} - disable wrapping for this column
	 * @property [break] {boolean} - enable word-breaking for this columns
	 * @property [padding] {object} - padding options
	 * @property [padding.left] {string} - a string to pad the left of each cell (default: `" "`)
	 * @property [padding.right] {string} - a string to pad the right of each cell (default: `" "`)
	 */

	columnLayout.Columns = Columns


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(19);
	__webpack_require__(43);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(57);
	__webpack_require__(62);
	__webpack_require__(65);
	__webpack_require__(67);
	__webpack_require__(71);
	module.exports = __webpack_require__(27).Array;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(20)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(23)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(21)
	  , defined   = __webpack_require__(22);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(24)
	  , $export        = __webpack_require__(25)
	  , redefine       = __webpack_require__(33)
	  , hide           = __webpack_require__(28)
	  , has            = __webpack_require__(37)
	  , Iterators      = __webpack_require__(38)
	  , $iterCreate    = __webpack_require__(39)
	  , setToStringTag = __webpack_require__(40)
	  , getProto       = __webpack_require__(29).getProto
	  , ITERATOR       = __webpack_require__(41)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(26)
	  , core      = __webpack_require__(27)
	  , hide      = __webpack_require__(28)
	  , redefine  = __webpack_require__(33)
	  , ctx       = __webpack_require__(35)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target && !own)redefine(target, key, out);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 26 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 27 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(29)
	  , createDesc = __webpack_require__(30);
	module.exports = __webpack_require__(31) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(32)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// add fake Function#toString
	// for correct work wrapped methods / constructors with methods like LoDash isNative
	var global    = __webpack_require__(26)
	  , hide      = __webpack_require__(28)
	  , SRC       = __webpack_require__(34)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(27).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  if(typeof val == 'function'){
	    val.hasOwnProperty(SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	    val.hasOwnProperty('name') || hide(val, 'name', key);
	  }
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe)delete O[key];
	    hide(O, key, val);
	  }
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 34 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(36);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(29)
	  , descriptor     = __webpack_require__(30)
	  , setToStringTag = __webpack_require__(40)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(28)(IteratorPrototype, __webpack_require__(41)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(29).setDesc
	  , has = __webpack_require__(37)
	  , TAG = __webpack_require__(41)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(42)('wks')
	  , uid    = __webpack_require__(34)
	  , Symbol = __webpack_require__(26).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(26)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(35)
	  , $export     = __webpack_require__(25)
	  , toObject    = __webpack_require__(44)
	  , call        = __webpack_require__(45)
	  , isArrayIter = __webpack_require__(48)
	  , toLength    = __webpack_require__(49)
	  , getIterFn   = __webpack_require__(50);
	$export($export.S + $export.F * !__webpack_require__(53)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(22);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(46);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(47);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(38)
	  , ITERATOR   = __webpack_require__(41)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(21)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(51)
	  , ITERATOR  = __webpack_require__(41)('iterator')
	  , Iterators = __webpack_require__(38);
	module.exports = __webpack_require__(27).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(52)
	  , TAG = __webpack_require__(41)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(41)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(25);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(32)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , $$     = arguments
	      , $$len  = $$.length
	      , result = new (typeof this == 'function' ? this : Array)($$len);
	    while($$len > index)result[index] = $$[index++];
	    result.length = $$len;
	    return result;
	  }
	});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(56)('Array');

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(26)
	  , $           = __webpack_require__(29)
	  , DESCRIPTORS = __webpack_require__(31)
	  , SPECIES     = __webpack_require__(41)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(58)
	  , step             = __webpack_require__(59)
	  , Iterators        = __webpack_require__(38)
	  , toIObject        = __webpack_require__(60);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(23)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(41)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(28)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(61)
	  , defined = __webpack_require__(22);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(52);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(25);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(63)});

	__webpack_require__(58)('copyWithin');

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(44)
	  , toIndex  = __webpack_require__(64)
	  , toLength = __webpack_require__(49);

	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , $$    = arguments
	    , end   = $$.length > 2 ? $$[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(21)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(25);

	$export($export.P, 'Array', {fill: __webpack_require__(66)});

	__webpack_require__(58)('fill');

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(44)
	  , toIndex  = __webpack_require__(64)
	  , toLength = __webpack_require__(49);
	module.exports = [].fill || function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , $$     = arguments
	    , $$len  = $$.length
	    , index  = toIndex($$len > 1 ? $$[1] : undefined, length)
	    , end    = $$len > 2 ? $$[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(25)
	  , $find   = __webpack_require__(68)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(58)(KEY);

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(35)
	  , IObject  = __webpack_require__(61)
	  , toObject = __webpack_require__(44)
	  , toLength = __webpack_require__(49)
	  , asc      = __webpack_require__(69);
	module.exports = function(TYPE){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var isObject = __webpack_require__(47)
	  , isArray  = __webpack_require__(70)
	  , SPECIES  = __webpack_require__(41)('species');
	module.exports = function(original, length){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length);
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(52);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(25)
	  , $find   = __webpack_require__(68)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(58)(KEY);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(73);
	__webpack_require__(57);
	__webpack_require__(74);
	module.exports = __webpack_require__(27).WeakMap;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(51)
	  , test    = {};
	test[__webpack_require__(41)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(33)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(29)
	  , redefine     = __webpack_require__(33)
	  , weak         = __webpack_require__(75)
	  , isObject     = __webpack_require__(47)
	  , has          = __webpack_require__(37)
	  , frozenStore  = weak.frozenStore
	  , WEAK         = weak.WEAK
	  , isExtensible = Object.isExtensible || isObject
	  , tmp          = {};

	// 23.3 WeakMap Objects
	var $WeakMap = __webpack_require__(79)('WeakMap', function(get){
	  return function WeakMap(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      if(!isExtensible(key))return frozenStore(this).get(key);
	      if(has(key, WEAK))return key[WEAK][this._i];
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	}, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  $.each.call(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on leaky map
	      if(isObject(a) && !isExtensible(a)){
	        var result = frozenStore(this)[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide              = __webpack_require__(28)
	  , redefineAll       = __webpack_require__(76)
	  , anObject          = __webpack_require__(46)
	  , isObject          = __webpack_require__(47)
	  , strictNew         = __webpack_require__(77)
	  , forOf             = __webpack_require__(78)
	  , createArrayMethod = __webpack_require__(68)
	  , $has              = __webpack_require__(37)
	  , WEAK              = __webpack_require__(34)('weak')
	  , isExtensible      = Object.isExtensible || isObject
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for frozen keys
	var frozenStore = function(that){
	  return that._l || (that._l = new FrozenStore);
	};
	var FrozenStore = function(){
	  this.a = [];
	};
	var findFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	FrozenStore.prototype = {
	  get: function(key){
	    var entry = findFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this)['delete'](key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this).has(key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    if(!isExtensible(anObject(key))){
	      frozenStore(that).set(key, value);
	    } else {
	      $has(key, WEAK) || hide(key, WEAK, {});
	      key[WEAK][that._i] = value;
	    } return that;
	  },
	  frozenStore: frozenStore,
	  WEAK: WEAK
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(33);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(35)
	  , call        = __webpack_require__(45)
	  , isArrayIter = __webpack_require__(48)
	  , anObject    = __webpack_require__(46)
	  , toLength    = __webpack_require__(49)
	  , getIterFn   = __webpack_require__(50);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(26)
	  , $export        = __webpack_require__(25)
	  , redefine       = __webpack_require__(33)
	  , redefineAll    = __webpack_require__(76)
	  , forOf          = __webpack_require__(78)
	  , strictNew      = __webpack_require__(77)
	  , isObject       = __webpack_require__(47)
	  , fails          = __webpack_require__(32)
	  , $iterDetect    = __webpack_require__(53)
	  , setToStringTag = __webpack_require__(40);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO;
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        strictNew(target, C, NAME);
	        var that = new Base;
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    IS_WEAK || instance.forEach(function(val, key){
	      BUGGY_ZERO = 1 / key === -Infinity;
	    });
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(73);
	__webpack_require__(19);
	__webpack_require__(81);
	__webpack_require__(82);
	module.exports = __webpack_require__(27).Map;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(57);
	var global      = __webpack_require__(26)
	  , hide        = __webpack_require__(28)
	  , Iterators   = __webpack_require__(38)
	  , ITERATOR    = __webpack_require__(41)('iterator')
	  , NL          = global.NodeList
	  , HTC         = global.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype
	  , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
	if(NLProto && !NLProto[ITERATOR])hide(NLProto, ITERATOR, ArrayValues);
	if(HTCProto && !HTCProto[ITERATOR])hide(HTCProto, ITERATOR, ArrayValues);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(83);

	// 23.1 Map Objects
	__webpack_require__(79)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(29)
	  , hide         = __webpack_require__(28)
	  , redefineAll  = __webpack_require__(76)
	  , ctx          = __webpack_require__(35)
	  , strictNew    = __webpack_require__(77)
	  , defined      = __webpack_require__(22)
	  , forOf        = __webpack_require__(78)
	  , $iterDefine  = __webpack_require__(23)
	  , step         = __webpack_require__(59)
	  , ID           = __webpack_require__(34)('id')
	  , $has         = __webpack_require__(37)
	  , isObject     = __webpack_require__(47)
	  , setSpecies   = __webpack_require__(56)
	  , DESCRIPTORS  = __webpack_require__(31)
	  , isExtensible = Object.isExtensible || isObject
	  , SIZE         = DESCRIPTORS ? '_s' : 'size'
	  , id           = 0;

	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(85);
	__webpack_require__(86);
	__webpack_require__(89);
	__webpack_require__(90);
	__webpack_require__(92);
	module.exports = __webpack_require__(27).String;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(25)
	  , $at     = __webpack_require__(20)(true);

	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(25)
	  , $pad    = __webpack_require__(87);

	$export($export.P, 'String', {
	  padLeft: function padLeft(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-string-pad-left-right
	var toLength = __webpack_require__(49)
	  , repeat   = __webpack_require__(88)
	  , defined  = __webpack_require__(22);

	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength)return S;
	  if(fillStr == '')fillStr = ' ';
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(21)
	  , defined   = __webpack_require__(22);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(25)
	  , $pad    = __webpack_require__(87);

	$export($export.P, 'String', {
	  padRight: function padRight(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(91)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(25)
	  , defined = __webpack_require__(22)
	  , fails   = __webpack_require__(32)
	  , spaces  = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec){
	  var exp  = {};
	  exp[KEY] = exec(trim);
	  $export($export.P + $export.F * fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  }), 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(91)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	const wrap = __webpack_require__(94)
	const t = __webpack_require__(4)
	const os = __webpack_require__(95)
	const Rows = __webpack_require__(96)
	const ansi = __webpack_require__(99)
	const extend = __webpack_require__(101)

	const _options = new WeakMap()
	/**
	 * @class
	 * @classdesc Table containing the data
	 * @param
	 */
	class Table {
	  constructor (data, options) {
	    let ttyWidth = (process && (process.stdout.columns || process.stderr.columns)) || 0

	    /* Windows quirk workaround  */
	    if (ttyWidth && os.platform() === 'win32') ttyWidth--

	    let defaults = {
	      padding: {
	        left: ' ',
	        right: ' '
	      },
	      viewWidth: ttyWidth || 80,
	      columns: []
	    }

	    _options.set(this, extend(defaults, options))
	    this.load(data)
	  }

	  /**
	   * @chainable
	   */
	  load (data) {
	    this.columns = Rows.getColumns(data)
	    this.rows = new Rows(data, this.columns)
	    let options = _options.get(this)

	    /* load default column properties from options */
	    this.columns.viewWidth = options.viewWidth
	    this.columns.forEach(column => {
	      if (options.padding) column.padding = options.padding
	      if (options.nowrap) column.nowrap = options.nowrap
	      if (options.break) {
	        column.break = options.break
	        column.contentWrappable = true
	      }
	    })

	    /* load column properties from options.columns */
	    options.columns.forEach(optionColumn => {
	      let column = this.columns.get(optionColumn.name)
	      if (column) {
	        if (optionColumn.padding) {
	          column.padding.left = optionColumn.padding.left
	          column.padding.right = optionColumn.padding.right
	        }
	        if (optionColumn.width) column.width = optionColumn.width
	        if (optionColumn.maxWidth) column.maxWidth = optionColumn.maxWidth
	        if (optionColumn.minWidth) column.minWidth = optionColumn.minWidth
	        if (optionColumn.nowrap) column.nowrap = optionColumn.nowrap
	        if (optionColumn.break) {
	          column.break = optionColumn.break
	          column.contentWrappable = true
	        }
	      }
	    })

	    this.columns.autoSize()
	    return this
	  }

	  getWrapped () {
	    this.columns.autoSize()
	    return this.rows.map(row => {
	      let line = []
	      row.forEach((cell, column) => {
	        if (column.nowrap) {
	          line.push(cell.value.split(/\r\n?|\n/))
	        } else {
	          line.push(wrap.lines(cell.value, {
	            width: column.wrappedContentWidth,
	            ignore: ansi.regexp,
	            break: column.break
	          }))
	        }
	      })
	      return line
	    })
	  }

	  getLines () {
	    var wrappedLines = this.getWrapped()
	    var lines = []
	    wrappedLines.forEach(wrapped => {
	      let mostLines = getLongestArray(wrapped)
	      for (let i = 0; i < mostLines; i++) {
	        let line = []
	        wrapped.forEach(cell => {
	          line.push(cell[i] || '')
	        })
	        lines.push(line)
	      }
	    })
	    return lines
	  }

	  renderLines () {
	    var lines = this.getLines()
	    return lines.map(line => {
	      return line.reduce((prev, cell, index) => {
	        let column = this.columns[index]
	        return prev + padCell(cell, column.padding, column.generatedWidth)
	      }, '')
	    })
	  }

	  render () {
	    return this.renderLines().join(os.EOL) + os.EOL
	  }
	}

	/**
	 * Array of arrays in.. Returns the length of the longest one
	 * @returns {number}
	 */
	function getLongestArray (arrays) {
	  var lengths = arrays.map(array => array.length)
	  return Math.max.apply(null, lengths)
	}

	function padCell (cellValue, padding, width) {
	  var ansiLength = cellValue.length - ansi.remove(cellValue).length
	  cellValue = cellValue || ''
	  return (padding.left || '') +
	    cellValue.padRight(width - padding.length() + ansiLength) +
	    (padding.right || '')
	}

	/**
	@module table
	*/
	module.exports = Table


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	var arrayify = __webpack_require__(3)
	var os = __webpack_require__(95)
	var t = __webpack_require__(4)

	/**
	Word wrapping, with a few features.

	- multilingual - wraps any language using whitespace word separation.
	- force-break option
	- ignore pattern option (e.g. ansi escape sequences)
	- wraps hypenated words

	@module wordwrapjs
	@example
	Wrap some sick bars in a 20 character column.

	```js
	> wrap = require("wordwrapjs")

	> bars = "I'm rapping. I'm rapping. I'm rap rap rapping. I'm rap rap rap rap rappity rapping."
	> result = wrap(bars, { width: 20 })
	```

	`result` now looks like this:
	```
	I'm rapping. I'm
	rapping. I'm rap rap
	rapping. I'm rap rap
	rap rap rappity
	rapping.
	```

	By default, long words will not break. Unless you insist.
	```js
	> url = "https://github.com/75lb/wordwrapjs"

	> wrap.lines(url, { width: 18 })
	[ 'https://github.com/75lb/wordwrapjs' ]

	> wrap.lines(url, { width: 18, break: true })
	[ 'https://github.com', '/75lb/wordwrapjs' ]
	```
	*/
	module.exports = wrap

	var re = {
	  nonWhitespaceCharsOrNewLine: /[^\s-]+?-\b|\S+|\r\n?|\n/g,
	  singleNewLine: /^(\r\n?|\n)$/
	}


	/**
	@param {string} - the input text to wrap
	@param [options] {object} - optional config
	@param [options.width=30] {number} - the max column width in characters
	@param [options.ignore] {RegExp | RegExp[]} - one or more patterns to be ignored when sizing the newly wrapped lines. For example `ignore: /\u001b.*?m/g` will ignore unprintable ansi escape sequences.
	@param [options.break] {boolean} - if true, words exceeding the specified `width` will be forcefully broken
	@param [options.eol=os.EOL] {string} - the desired new line character to use, defaults to [os.EOL](https://nodejs.org/api/os.html#os_os_eol).
	@return {string}
	@alias module:wordwrapjs
	*/
	function wrap (text, options) {
	  options = defaultOptions(options)
	  text = validateInput(text)

	  var lines = wrap.lines(text, options)
	  return lines.join(options.eol)
	}

	/**
	returns the wrapped output as an array of lines, rather than a single string
	@param {string} - the input text to wrap
	@param [options] {object} - same options as {@link module:wordwrapjs|wrap}
	@return {Array}
	@example
	> bars = "I'm rapping. I'm rapping. I'm rap rap rapping. I'm rap rap rap rap rappity rapping."
	> wrap.lines(bars)
	[ "I'm rapping. I'm rapping. I'm",
	  "rap rap rapping. I'm rap rap",
	  "rap rap rappity rapping." ]
	*/
	wrap.lines = function (text, options) {
	  options = defaultOptions(options)
	  text = validateInput(text)

	  var words = wrap.getWords(text)

	  var lineLength = 0
	  var lines = []
	  var line = ''

	  if (options.break) {
	    var broken = []
	    words.forEach(function (word) {
	      var wordLength = options.ignore
	        ? replaceIgnored(word, options.ignore).length
	        : word.length

	      if (wordLength > options.width) {
	        var letters = word.split('')
	        var section
	        while ((section = letters.splice(0, options.width)).length) {
	          broken.push(section.join(''))
	        }
	      } else {
	        broken.push(word)
	      }
	    })
	    words = broken
	  }

	  /* for each word, either extend the current `line` or create a new one */
	  words.forEach(function (word) {
	    if (re.singleNewLine.test(word)) {
	      lines.push(line || '')
	      line = ''
	      lineLength = 0
	    } else {
	      var wordLength = options.ignore
	        ? replaceIgnored(word, options.ignore).length
	        : word.length

	      var offset
	      if (lineLength > options.width) {
	        offset = 0
	      } else {
	        if (/-$/.test(line)) {
	          offset = 0
	        } else {
	          offset = line ? 1 : 0
	        }
	      }

	      lineLength += wordLength + offset

	      if (lineLength > options.width) {
	        /* Can't fit word on line, cache line and create new one */
	        if (line) lines.push(line)
	        line = word
	        lineLength = wordLength
	      } else {
	        if (/-$/.test(line)) {
	          line += word
	        } else {
	          line += (line ? ' ' : '') + word
	        }
	      }
	    }
	  })

	  if (line) lines.push(line)

	  return lines
	}

	/**
	 * Returns true if the input text is wrappable
	 * @param {string} - input text
	 * @return {boolean}
	 */
	wrap.isWrappable = function(text) {
	  if (t.isDefined(text)) {
	    text = String(text)
	    var matches = text.match(re.nonWhitespaceCharsOrNewLine)
	    return matches ? matches.length > 1 : false
	  }
	}

	/**
	 * Splits the input text returning an array of words
	 * @param {string} - input text
	 * @returns {string[]}
	 */
	wrap.getWords = function(text) {
	  return text.match(re.nonWhitespaceCharsOrNewLine) || []
	}

	function replaceIgnored (string, ignore) {
	  arrayify(ignore).forEach(function (pattern) {
	    string = string.replace(pattern, '')
	  })
	  return string
	}

	function defaultOptions (options) {
	  options = options || {}
	  options.width = options.width || 30
	  options.eol = options.eol || os.EOL
	  return options
	}

	function validateInput (input) {
	  if (t.isString(input)) {
	    return input
	  } else if (!t.isDefined(input)) {
	    return ''
	  } else {
	    return String(input)
	  }
	}


/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = require("os");

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	const Columns = __webpack_require__(97)
	const ansi = __webpack_require__(99)
	const arrayify = __webpack_require__(3)
	const wrap = __webpack_require__(94)
	const Cell = __webpack_require__(100)

	/**
	 * @class Rows
	 * @extends Array
	 */
	class Rows extends Array {
	  constructor (rows, columns) {
	    super()
	    this.load(rows, columns)
	  }

	  load (rows, columns) {
	    arrayify(rows).forEach(row => this.push(new Map(objectToIterable(row, columns))))
	  }

	  /**
	   * returns all distinct columns from input
	   * @param  {object[]}
	   * @return {module:columns}
	   */
	  static getColumns (rows) {
	    var columns = new Columns()
	    arrayify(rows).forEach(row => {
	      for (let columnName in row) {
	        let column = columns.get(columnName)
	        if (!column) {
	          column = columns.add({ name: columnName, contentWidth: 0, minContentWidth: 0 })
	        }
	        let cell = new Cell(row[columnName], column)
	        let cellValue = cell.value
	        if (ansi.has(cellValue)) {
	          cellValue = ansi.remove(cellValue)
	        }

	        if (cellValue.length > column.contentWidth) column.contentWidth = cellValue.length

	        let longestWord = getLongestWord(cellValue)
	        if (longestWord > column.minContentWidth) {
	          column.minContentWidth = longestWord
	        }
	        if (!column.contentWrappable) column.contentWrappable = wrap.isWrappable(cellValue)
	      }
	    })
	    return columns
	  }
	}

	function getLongestWord (line) {
	  const words = wrap.getWords(line)
	  return words.reduce((max, word) => {
	    return Math.max(word.length, max)
	  }, 0)
	}

	function objectToIterable (row, columns) {
	  return columns.map(column => {
	    return [ column, new Cell(row[column.name], column) ]
	  })
	}

	/**
	 * @module rows
	 */
	module.exports = Rows


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	var t = __webpack_require__(4)
	var Padding = __webpack_require__(98)
	var arrayify = __webpack_require__(3)

	var _viewWidth = new WeakMap()

	class Columns extends Array {
	  constructor (columns) {
	    super()
	    this.load(columns)
	  }

	  /**
	   * sum of all generatedWidth fields
	   * @return {number}
	   */
	  totalWidth () {
	    return this.length
	      ? this.map(col => col.generatedWidth).reduce((a, b) => a + b)
	      : 0
	  }

	  totalFixedWidth () {
	    return this.getFixed()
	      .map(col => col.generatedWidth)
	      .reduce((a, b) => a + b, 0)
	  }

	  get (columnName) {
	    return this.find(column => column.name === columnName)
	  }

	  getResizable () {
	    return this.filter(column => column.isResizable())
	  }

	  getFixed () {
	    return this.filter(column => column.isFixed())
	  }

	  load (columns) {
	    arrayify(columns).forEach(this.add.bind(this))
	  }

	  add (column) {
	    var col = column instanceof Column ? column : new Column(column)
	    this.push(col)
	    return col
	  }

	  set viewWidth (val) {
	    _viewWidth.set(this, val)
	  }

	  /**
	   * sets `generatedWidth` for each column
	   * @chainable
	   */
	  autoSize () {
	    var viewWidth = _viewWidth.get(this)

	    /* size */
	    this.forEach(column => {
	      column.generateWidth()
	      column.generateMinWidth()
	    })

	    /* adjust if user set a min or maxWidth */
	    this.forEach(column => {
	      if (t.isDefined(column.maxWidth) && column.generatedWidth > column.maxWidth) {
	        column.generatedWidth = column.maxWidth
	      }

	      if (t.isDefined(column.minWidth) && column.generatedWidth < column.minWidth) {
	        column.generatedWidth = column.minWidth
	      }
	    })

	    var width = {
	      total: this.totalWidth(),
	      view: viewWidth,
	      diff: this.totalWidth() - viewWidth,
	      totalFixed: this.totalFixedWidth(),
	      totalResizable: Math.max(viewWidth - this.totalFixedWidth(), 0)
	    }

	    /* adjust if short of space */
	    if (width.diff > 0) {
	      /* share the available space between resizeable columns */
	      let resizableColumns = this.getResizable()
	      resizableColumns.forEach(column => {
	        column.generatedWidth = Math.floor(width.totalResizable / resizableColumns.length)
	      })

	      /* at this point, the generatedWidth should never end up bigger than the contentWidth */
	      var grownColumns = this.filter(column => column.generatedWidth > column.contentWidth)
	      var shrunkenColumns = this.filter(column => column.generatedWidth < column.contentWidth)
	      var salvagedSpace = 0
	      grownColumns.forEach(column => {
	        var currentGeneratedWidth = column.generatedWidth
	        column.generateWidth()
	        salvagedSpace += currentGeneratedWidth - column.generatedWidth
	      })
	      shrunkenColumns.forEach(column => {
	        column.generatedWidth += Math.floor(salvagedSpace / shrunkenColumns.length)
	      })

	      /* if, after autosizing, we still don't fit within viewWidth then give up */
	    }

	    return this
	  }
	}

	var _padding = new WeakMap()

	// setting any column property which is a factor of the width should trigger autoSize()
	/**
	 * @class
	 * @classdesc Represents a table column
	 */
	class Column {
	  constructor (column) {

	    /**
	     * @type {string}
	     */
	    if (t.isDefined(column.name)) this.name = column.name
	    /**
	     * @type {number}
	     */
	    if (t.isDefined(column.width)) this.width = column.width
	    if (t.isDefined(column.maxWidth)) this.maxWidth = column.maxWidth
	    if (t.isDefined(column.minWidth)) this.minWidth = column.minWidth
	    if (t.isDefined(column.nowrap)) this.nowrap = column.nowrap
	    if (t.isDefined(column.break)) this.break = column.break
	    if (t.isDefined(column.contentWrappable)) this.contentWrappable = column.contentWrappable
	    if (t.isDefined(column.contentWidth)) this.contentWidth = column.contentWidth
	    if (t.isDefined(column.minContentWidth)) this.minContentWidth = column.minContentWidth
	    this.padding = column.padding || { left: ' ', right: ' ' }
	    this.generatedWidth = null
	  }

	  set padding (padding) {
	    _padding.set(this, new Padding(padding))

	  }
	  get padding () {
	    return _padding.get(this)
	  }

	  get wrappedContentWidth () {
	    return Math.max(this.generatedWidth - this.padding.length(), 0)
	  }

	  isResizable () {
	    return !this.isFixed()
	  }

	  isFixed () {
	    return t.isDefined(this.width) || this.nowrap || !this.contentWrappable
	  }

	  generateWidth () {
	    this.generatedWidth = this.width || (this.contentWidth + this.padding.length())
	  }

	  generateMinWidth () {
	    this.minWidth = this.minContentWidth + this.padding.length()
	  }
	}

	/**
	 * @module columns
	 */
	module.exports = Columns


/***/ },
/* 98 */
/***/ function(module, exports) {

	'use strict'

	class Padding {
	  constructor (padding) {
	    this.left = padding.left
	    this.right = padding.right
	  }
	  length () {
	    return this.left.length + this.right.length
	  }
	}

	/**
	@module padding
	*/
	module.exports = Padding


/***/ },
/* 99 */
/***/ function(module, exports) {

	'use strict'

	var ansiEscapeSequence = /\u001b.*?m/g

	/**
	@module ansi
	*/
	exports.remove = remove
	exports.has = has
	exports.regexp = ansiEscapeSequence

	function remove (input) {
	  return input.replace(ansiEscapeSequence, '')
	}

	function has (input) {
	  return ansiEscapeSequence.test(input)
	}


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	const t = __webpack_require__(4)
	const ansi = __webpack_require__(99)

	const _value = new WeakMap()
	const _column = new WeakMap()

	class Cell {
	  constructor (value, column) {
	    this.value = value
	    _column.set(this, column)
	  }

	  set value (val) {
	    _value.set(this, val)
	  }

	  get value () {
	    let cellValue = _value.get(this)
	    if (t.isFunction(cellValue)) cellValue = cellValue.call(_column.get(this))
	    if (cellValue === undefined) {
	      cellValue = ''
	    } else {
	      cellValue = String(cellValue)
	    }
	    return cellValue
	  }
	}

	module.exports = Cell


/***/ },
/* 101 */
/***/ function(module, exports) {

	/*!
	 * @description Recursive object extending
	 * @author Viacheslav Lotsmanov <lotsmanov89@gmail.com>
	 * @license MIT
	 *
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2013-2015 Viacheslav Lotsmanov
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy of
	 * this software and associated documentation files (the "Software"), to deal in
	 * the Software without restriction, including without limitation the rights to
	 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
	 * the Software, and to permit persons to whom the Software is furnished to do so,
	 * subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
	 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
	 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
	 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	 */

	'use strict';

	function isSpecificValue(val) {
		return (
			val instanceof Buffer
			|| val instanceof Date
			|| val instanceof RegExp
		) ? true : false;
	}

	function cloneSpecificValue(val) {
		if (val instanceof Buffer) {
			var x = new Buffer(val.length);
			val.copy(x);
			return x;
		} else if (val instanceof Date) {
			return new Date(val.getTime());
		} else if (val instanceof RegExp) {
			return new RegExp(val);
		} else {
			throw new Error('Unexpected situation');
		}
	}

	/**
	 * Recursive cloning array.
	 */
	function deepCloneArray(arr) {
		var clone = [];
		arr.forEach(function (item, index) {
			if (typeof item === 'object' && item !== null) {
				if (Array.isArray(item)) {
					clone[index] = deepCloneArray(item);
				} else if (isSpecificValue(item)) {
					clone[index] = cloneSpecificValue(item);
				} else {
					clone[index] = deepExtend({}, item);
				}
			} else {
				clone[index] = item;
			}
		});
		return clone;
	}

	/**
	 * Extening object that entered in first argument.
	 *
	 * Returns extended object or false if have no target object or incorrect type.
	 *
	 * If you wish to clone source object (without modify it), just use empty new
	 * object as first argument, like this:
	 *   deepExtend({}, yourObj_1, [yourObj_N]);
	 */
	var deepExtend = module.exports = function (/*obj_1, [obj_2], [obj_N]*/) {
		if (arguments.length < 1 || typeof arguments[0] !== 'object') {
			return false;
		}

		if (arguments.length < 2) {
			return arguments[0];
		}

		var target = arguments[0];

		// convert arguments to array and cut off target object
		var args = Array.prototype.slice.call(arguments, 1);

		var val, src, clone;

		args.forEach(function (obj) {
			// skip argument if it is array or isn't object
			if (typeof obj !== 'object' || Array.isArray(obj)) {
				return;
			}

			Object.keys(obj).forEach(function (key) {
				src = target[key]; // source value
				val = obj[key]; // new value

				// recursion prevention
				if (val === target) {
					return;

				/**
				 * if new value isn't object then just overwrite by new value
				 * instead of extending.
				 */
				} else if (typeof val !== 'object' || val === null) {
					target[key] = val;
					return;

				// just clone arrays (and recursive clone objects inside)
				} else if (Array.isArray(val)) {
					target[key] = deepCloneArray(val);
					return;

				// custom cloning and overwrite for specific objects
				} else if (isSpecificValue(val)) {
					target[key] = cloneSpecificValue(val);
					return;

				// overwrite by new value if source isn't object or array
				} else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
					target[key] = deepExtend({}, val);
					return;

				// source value and new value is objects both, extending...
				} else {
					target[key] = deepExtend(src, val);
					return;
				}
			});
		});

		return target;
	}


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(18);
	__webpack_require__(72);
	__webpack_require__(80);
	__webpack_require__(84);

	var Table = __webpack_require__(103);
	var Columns = __webpack_require__(105);

	module.exports = columnLayout;

	function columnLayout(data, options) {
	  var table = new Table(data, options);
	  return table.render();
	}

	columnLayout.lines = function (data, options) {
	  var table = new Table(data, options);
	  return table.renderLines();
	};

	columnLayout.table = function (data, options) {
	  return new Table(data, options);
	};

	columnLayout.Columns = Columns;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var wrap = __webpack_require__(94);
	var t = __webpack_require__(4);
	var os = __webpack_require__(95);
	var Rows = __webpack_require__(104);
	var ansi = __webpack_require__(107);
	var extend = __webpack_require__(101);

	var _options = new WeakMap();

	var Table = (function () {
	  function Table(data, options) {
	    _classCallCheck(this, Table);

	    var ttyWidth = process && (process.stdout.columns || process.stderr.columns) || 0;

	    if (ttyWidth && os.platform() === 'win32') ttyWidth--;

	    var defaults = {
	      padding: {
	        left: ' ',
	        right: ' '
	      },
	      viewWidth: ttyWidth || 80,
	      columns: []
	    };

	    _options.set(this, extend(defaults, options));
	    this.load(data);
	  }

	  _createClass(Table, [{
	    key: 'load',
	    value: function load(data) {
	      var _this = this;

	      this.columns = Rows.getColumns(data);
	      this.rows = new Rows(data, this.columns);
	      var options = _options.get(this);

	      this.columns.viewWidth = options.viewWidth;
	      this.columns.forEach(function (column) {
	        if (options.padding) column.padding = options.padding;
	        if (options.nowrap) column.nowrap = options.nowrap;
	        if (options['break']) {
	          column['break'] = options['break'];
	          column.contentWrappable = true;
	        }
	      });

	      options.columns.forEach(function (optionColumn) {
	        var column = _this.columns.get(optionColumn.name);
	        if (column) {
	          if (optionColumn.padding) {
	            column.padding.left = optionColumn.padding.left;
	            column.padding.right = optionColumn.padding.right;
	          }
	          if (optionColumn.width) column.width = optionColumn.width;
	          if (optionColumn.maxWidth) column.maxWidth = optionColumn.maxWidth;
	          if (optionColumn.minWidth) column.minWidth = optionColumn.minWidth;
	          if (optionColumn.nowrap) column.nowrap = optionColumn.nowrap;
	          if (optionColumn['break']) {
	            column['break'] = optionColumn['break'];
	            column.contentWrappable = true;
	          }
	        }
	      });

	      this.columns.autoSize();
	      return this;
	    }
	  }, {
	    key: 'getWrapped',
	    value: function getWrapped() {
	      this.columns.autoSize();
	      return this.rows.map(function (row) {
	        var line = [];
	        row.forEach(function (cell, column) {
	          if (column.nowrap) {
	            line.push(cell.value.split(/\r\n?|\n/));
	          } else {
	            line.push(wrap.lines(cell.value, {
	              width: column.wrappedContentWidth,
	              ignore: ansi.regexp,
	              'break': column['break']
	            }));
	          }
	        });
	        return line;
	      });
	    }
	  }, {
	    key: 'getLines',
	    value: function getLines() {
	      var wrappedLines = this.getWrapped();
	      var lines = [];
	      wrappedLines.forEach(function (wrapped) {
	        var mostLines = getLongestArray(wrapped);

	        var _loop = function (i) {
	          var line = [];
	          wrapped.forEach(function (cell) {
	            line.push(cell[i] || '');
	          });
	          lines.push(line);
	        };

	        for (var i = 0; i < mostLines; i++) {
	          _loop(i);
	        }
	      });
	      return lines;
	    }
	  }, {
	    key: 'renderLines',
	    value: function renderLines() {
	      var _this2 = this;

	      var lines = this.getLines();
	      return lines.map(function (line) {
	        return line.reduce(function (prev, cell, index) {
	          var column = _this2.columns[index];
	          return prev + padCell(cell, column.padding, column.generatedWidth);
	        }, '');
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.renderLines().join(os.EOL) + os.EOL;
	    }
	  }]);

	  return Table;
	})();

	function getLongestArray(arrays) {
	  var lengths = arrays.map(function (array) {
	    return array.length;
	  });
	  return Math.max.apply(null, lengths);
	}

	function padCell(cellValue, padding, width) {
	  var ansiLength = cellValue.length - ansi.remove(cellValue).length;
	  cellValue = cellValue || '';
	  return (padding.left || '') + cellValue.padRight(width - padding.length() + ansiLength) + (padding.right || '');
	}

	module.exports = Table;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Columns = __webpack_require__(105);
	var ansi = __webpack_require__(107);
	var arrayify = __webpack_require__(3);
	var wrap = __webpack_require__(94);
	var Cell = __webpack_require__(108);

	var Rows = (function (_Array) {
	  _inherits(Rows, _Array);

	  function Rows(rows, columns) {
	    _classCallCheck(this, Rows);

	    _get(Object.getPrototypeOf(Rows.prototype), 'constructor', this).call(this);
	    this.load(rows, columns);
	  }

	  _createClass(Rows, [{
	    key: 'load',
	    value: function load(rows, columns) {
	      var _this = this;

	      arrayify(rows).forEach(function (row) {
	        return _this.push(new Map(objectToIterable(row, columns)));
	      });
	    }
	  }], [{
	    key: 'getColumns',
	    value: function getColumns(rows) {
	      var columns = new Columns();
	      arrayify(rows).forEach(function (row) {
	        for (var columnName in row) {
	          var column = columns.get(columnName);
	          if (!column) {
	            column = columns.add({ name: columnName, contentWidth: 0, minContentWidth: 0 });
	          }
	          var cell = new Cell(row[columnName], column);
	          var cellValue = cell.value;
	          if (ansi.has(cellValue)) {
	            cellValue = ansi.remove(cellValue);
	          }

	          if (cellValue.length > column.contentWidth) column.contentWidth = cellValue.length;

	          var longestWord = getLongestWord(cellValue);
	          if (longestWord > column.minContentWidth) {
	            column.minContentWidth = longestWord;
	          }
	          if (!column.contentWrappable) column.contentWrappable = wrap.isWrappable(cellValue);
	        }
	      });
	      return columns;
	    }
	  }]);

	  return Rows;
	})(Array);

	function getLongestWord(line) {
	  var words = wrap.getWords(line);
	  return words.reduce(function (max, word) {
	    return Math.max(word.length, max);
	  }, 0);
	}

	function objectToIterable(row, columns) {
	  return columns.map(function (column) {
	    return [column, new Cell(row[column.name], column)];
	  });
	}

	module.exports = Rows;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var t = __webpack_require__(4);
	var Padding = __webpack_require__(106);
	var arrayify = __webpack_require__(3);

	var _viewWidth = new WeakMap();

	var Columns = (function (_Array) {
	  _inherits(Columns, _Array);

	  function Columns(columns) {
	    _classCallCheck(this, Columns);

	    _get(Object.getPrototypeOf(Columns.prototype), 'constructor', this).call(this);
	    this.load(columns);
	  }

	  _createClass(Columns, [{
	    key: 'totalWidth',
	    value: function totalWidth() {
	      return this.length ? this.map(function (col) {
	        return col.generatedWidth;
	      }).reduce(function (a, b) {
	        return a + b;
	      }) : 0;
	    }
	  }, {
	    key: 'totalFixedWidth',
	    value: function totalFixedWidth() {
	      return this.getFixed().map(function (col) {
	        return col.generatedWidth;
	      }).reduce(function (a, b) {
	        return a + b;
	      }, 0);
	    }
	  }, {
	    key: 'get',
	    value: function get(columnName) {
	      return this.find(function (column) {
	        return column.name === columnName;
	      });
	    }
	  }, {
	    key: 'getResizable',
	    value: function getResizable() {
	      return this.filter(function (column) {
	        return column.isResizable();
	      });
	    }
	  }, {
	    key: 'getFixed',
	    value: function getFixed() {
	      return this.filter(function (column) {
	        return column.isFixed();
	      });
	    }
	  }, {
	    key: 'load',
	    value: function load(columns) {
	      arrayify(columns).forEach(this.add.bind(this));
	    }
	  }, {
	    key: 'add',
	    value: function add(column) {
	      var col = column instanceof Column ? column : new Column(column);
	      this.push(col);
	      return col;
	    }
	  }, {
	    key: 'autoSize',
	    value: function autoSize() {
	      var _this = this;

	      var viewWidth = _viewWidth.get(this);

	      this.forEach(function (column) {
	        column.generateWidth();
	        column.generateMinWidth();
	      });

	      this.forEach(function (column) {
	        if (t.isDefined(column.maxWidth) && column.generatedWidth > column.maxWidth) {
	          column.generatedWidth = column.maxWidth;
	        }

	        if (t.isDefined(column.minWidth) && column.generatedWidth < column.minWidth) {
	          column.generatedWidth = column.minWidth;
	        }
	      });

	      var width = {
	        total: this.totalWidth(),
	        view: viewWidth,
	        diff: this.totalWidth() - viewWidth,
	        totalFixed: this.totalFixedWidth(),
	        totalResizable: Math.max(viewWidth - this.totalFixedWidth(), 0)
	      };

	      if (width.diff > 0) {
	        var grownColumns;
	        var shrunkenColumns;
	        var salvagedSpace;

	        (function () {
	          var resizableColumns = _this.getResizable();
	          resizableColumns.forEach(function (column) {
	            column.generatedWidth = Math.floor(width.totalResizable / resizableColumns.length);
	          });

	          grownColumns = _this.filter(function (column) {
	            return column.generatedWidth > column.contentWidth;
	          });
	          shrunkenColumns = _this.filter(function (column) {
	            return column.generatedWidth < column.contentWidth;
	          });
	          salvagedSpace = 0;

	          grownColumns.forEach(function (column) {
	            var currentGeneratedWidth = column.generatedWidth;
	            column.generateWidth();
	            salvagedSpace += currentGeneratedWidth - column.generatedWidth;
	          });
	          shrunkenColumns.forEach(function (column) {
	            column.generatedWidth += Math.floor(salvagedSpace / shrunkenColumns.length);
	          });
	        })();
	      }

	      return this;
	    }
	  }, {
	    key: 'viewWidth',
	    set: function set(val) {
	      _viewWidth.set(this, val);
	    }
	  }]);

	  return Columns;
	})(Array);

	var _padding = new WeakMap();

	var Column = (function () {
	  function Column(column) {
	    _classCallCheck(this, Column);

	    if (t.isDefined(column.name)) this.name = column.name;

	    if (t.isDefined(column.width)) this.width = column.width;
	    if (t.isDefined(column.maxWidth)) this.maxWidth = column.maxWidth;
	    if (t.isDefined(column.minWidth)) this.minWidth = column.minWidth;
	    if (t.isDefined(column.nowrap)) this.nowrap = column.nowrap;
	    if (t.isDefined(column['break'])) this['break'] = column['break'];
	    if (t.isDefined(column.contentWrappable)) this.contentWrappable = column.contentWrappable;
	    if (t.isDefined(column.contentWidth)) this.contentWidth = column.contentWidth;
	    if (t.isDefined(column.minContentWidth)) this.minContentWidth = column.minContentWidth;
	    this.padding = column.padding || { left: ' ', right: ' ' };
	    this.generatedWidth = null;
	  }

	  _createClass(Column, [{
	    key: 'isResizable',
	    value: function isResizable() {
	      return !this.isFixed();
	    }
	  }, {
	    key: 'isFixed',
	    value: function isFixed() {
	      return t.isDefined(this.width) || this.nowrap || !this.contentWrappable;
	    }
	  }, {
	    key: 'generateWidth',
	    value: function generateWidth() {
	      this.generatedWidth = this.width || this.contentWidth + this.padding.length();
	    }
	  }, {
	    key: 'generateMinWidth',
	    value: function generateMinWidth() {
	      this.minWidth = this.minContentWidth + this.padding.length();
	    }
	  }, {
	    key: 'padding',
	    set: function set(padding) {
	      _padding.set(this, new Padding(padding));
	    },
	    get: function get() {
	      return _padding.get(this);
	    }
	  }, {
	    key: 'wrappedContentWidth',
	    get: function get() {
	      return Math.max(this.generatedWidth - this.padding.length(), 0);
	    }
	  }]);

	  return Column;
	})();

	module.exports = Columns;

/***/ },
/* 106 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Padding = (function () {
	  function Padding(padding) {
	    _classCallCheck(this, Padding);

	    this.left = padding.left;
	    this.right = padding.right;
	  }

	  _createClass(Padding, [{
	    key: 'length',
	    value: function length() {
	      return this.left.length + this.right.length;
	    }
	  }]);

	  return Padding;
	})();

	module.exports = Padding;

/***/ },
/* 107 */
/***/ function(module, exports) {

	'use strict';

	var ansiEscapeSequence = /\u001b.*?m/g;

	exports.remove = remove;
	exports.has = has;
	exports.regexp = ansiEscapeSequence;

	function remove(input) {
	  return input.replace(ansiEscapeSequence, '');
	}

	function has(input) {
	  return ansiEscapeSequence.test(input);
	}

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var t = __webpack_require__(4);
	var ansi = __webpack_require__(107);

	var _value = new WeakMap();
	var _column = new WeakMap();

	var Cell = (function () {
	  function Cell(value, column) {
	    _classCallCheck(this, Cell);

	    this.value = value;
	    _column.set(this, column);
	  }

	  _createClass(Cell, [{
	    key: 'value',
	    set: function set(val) {
	      _value.set(this, val);
	    },
	    get: function get() {
	      var cellValue = _value.get(this);
	      if (t.isFunction(cellValue)) cellValue = cellValue.call(_column.get(this));
	      if (cellValue === undefined) {
	        cellValue = '';
	      } else {
	        cellValue = String(cellValue);
	      }
	      return cellValue;
	    }
	  }]);

	  return Cell;
	})();

	module.exports = Cell;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var arrayify = __webpack_require__(3);

	/* Control Sequence Initiator */
	var csi = "\x1b[";

	/**
	@exports ansi-escape-sequences
	@typicalname ansi
	@example
	var ansi = require("ansi-escape-sequences");
	*/
	var ansi = {};

	/**
	Various formatting styles (aka Select Graphic Rendition codes).
	@enum {string}
	@example
	console.log(ansi.style.red + "this is red" + ansi.style.reset);
	*/
	ansi.style = {
	    reset: "\x1b[0m",
	    bold: "\x1b[1m",
	    italic: "\x1b[3m",
	    underline: "\x1b[4m",
	    fontDefault: "\x1b[10m",
	    font2: "\x1b[11m",
	    font3: "\x1b[12m",
	    font4: "\x1b[13m",
	    font5: "\x1b[14m",
	    font6: "\x1b[15m",
	    imageNegative: "\x1b[7m",
	    imagePositive: "\x1b[27m",
	    black: "\x1b[30m",
	    red: "\x1b[31m",
	    green: "\x1b[32m",
	    yellow: "\x1b[33m",
	    blue: "\x1b[34m",
	    magenta: "\x1b[35m",
	    cyan: "\x1b[36m",
	    white: "\x1b[37m",
	    "bg-black": "\x1b[40m",
	    "bg-red": "\x1b[41m",
	    "bg-green": "\x1b[42m",
	    "bg-yellow": "\x1b[43m",
	    "bg-blue": "\x1b[44m",
	    "bg-magenta": "\x1b[45m",
	    "bg-cyan": "\x1b[46m",
	    "bg-white": "\x1b[47m"
	};

	/**
	style enum - used by `ansi.styles()`.
	@enum {number}
	@private
	*/
	var eStyles = {
	    reset: 0,
	    bold: 1,
	    italic: 3,
	    underline: 4,
	    imageNegative: 7,
	    fontDefault: 10,
	    font2: 11,
	    font3: 12,
	    font4: 13,
	    font5: 14,
	    font6: 15,
	    imagePositive: 27,
	    black: 30,
	    red: 31,
	    green: 32,
	    yellow: 33,
	    blue: 34,
	    magenta: 35,
	    cyan: 36,
	    white: 37,
	    "bg-black": 40,
	    "bg-red": 41,
	    "bg-green": 42,
	    "bg-yellow": 43,
	    "bg-blue": 44,
	    "bg-magenta": 45,
	    "bg-cyan": 46,
	    "bg-white": 47
	};

	/**
	Returns an ansi sequence setting one or more effects
	@param {string | string[]} - a style, or list or styles
	@returns {string}
	@example
	> ansi.styles("green")
	'\u001b[32m'

	> ansi.styles([ "green", "underline" ])
	'\u001b[32;4m'
	*/
	ansi.styles = function(effectArray){
	    effectArray = arrayify(effectArray);
	    return csi + effectArray.map(function(effect){ return eStyles[effect]; }).join(";") + "m";
	};

	/**
	A convenience function, applying the provided styles to the input string and then resetting. 

	Inline styling can be applied using the syntax `[style-list]{text to format}`, where `style-list` is a space-separated list of styles from {@link module:ansi-escape-sequences.style ansi.style}. For example `[bold white bg-red]{bold white text on a red background}`.

	@param {string} - the string to format
	@param [styleArray] {string[]} - a list of styles to add to the input string
	@returns {string}
	@example
	> ansi.format("what?", "green")
	'\u001b[32mwhat?\u001b[0m'

	> ansi.format("what?", ["green", "bold"])
	'\u001b[32;1mwhat?\u001b[0m'

	> ansi.format("[green bold]{what?}")
	'\u001b[32;1mwhat?\u001b[0m'
	*/
	ansi.format = function(str, styleArray){
	    var re = /\[([\w\s-]+)\]{([^]*?)}/;
	    var matches;
	    if (!str) return "";
	    
	    while (matches = str.match(re)){
	        var inlineStyles = matches[1].split(/\s+/);
	        var inlineString = matches[2];
	        str = str.replace(matches[0], ansi.format(inlineString, inlineStyles));
	    }

	    return (styleArray && styleArray.length) 
	        ? ansi.styles(styleArray) + str + ansi.style.reset
	        : str;
	};

	/**
	cursor-related sequences
	*/
	ansi.cursor = {
	    /**
	    Moves the cursor `lines` cells up. If the cursor is already at the edge of the screen, this has no effect
	    @param [lines=1] {number}
	    @return {string}
	    */
	    up: function(lines){ return csi + (lines || 1) + "A"; },

	    /**
	    Moves the cursor `lines` cells down. If the cursor is already at the edge of the screen, this has no effect
	    @param [lines=1] {number}
	    @return {string}
	    */
	    down: function(lines){ return csi + (lines || 1) + "B"; },

	    /**
	    Moves the cursor `lines` cells forward. If the cursor is already at the edge of the screen, this has no effect
	    @param [lines=1] {number}
	    @return {string}
	    */
	    forward: function(lines){ return csi + (lines || 1) + "C"; },

	    /**
	    Moves the cursor `lines` cells back. If the cursor is already at the edge of the screen, this has no effect
	    @param [lines=1] {number}
	    @return {string}
	    */
	    back: function(lines){ return csi + (lines || 1) + "D"; },

	    /**
	    Moves cursor to beginning of the line n lines down.
	    @param [lines=1] {number}
	    @return {string}
	    */
	    nextLine: function(lines){ return csi + (lines || 1) + "E"; },

	    /**
	    Moves cursor to beginning of the line n lines up.
	    @param [lines=1] {number}
	    @return {string}
	    */
	    previousLine: function(lines){ return csi + (lines || 1) + "F"; },

	    /**
	    Moves the cursor to column n.
	    @param n {number} - column number
	    @return {string}
	    */
	    horizontalAbsolute: function(n){ return csi + n + "G"; },

	    /**
	    Moves the cursor to row n, column m. The values are 1-based, and default to 1 (top left corner) if omitted.
	    @param n {number} - row number
	    @param m {number} - column number
	    @return {string}
	    */
	    position: function(n, m){ return csi + (n || 1) + ";" + (m || 1) + "H"; },
	    
	    /**
	    Hides the cursor
	    */
	    hide: csi + "?25l",

	    /**
	    Shows the cursor
	    */
	    show: csi + "?25h"
	};

	/**
	erase sequences
	*/
	ansi.erase = {
	    /**
	    Clears part of the screen. If n is 0 (or missing), clear from cursor to end of screen. If n is 1, clear from cursor to beginning of the screen. If n is 2, clear entire screen.
	    @param n {number}
	    @return {string}
	    */
	    display: function(n){ return csi + (n || 0) + "J"; },
	    
	    /**
	    Erases part of the line. If n is zero (or missing), clear from cursor to the end of the line. If n is one, clear from cursor to beginning of the line. If n is two, clear entire line. Cursor position does not change.
	    @param n {number}
	    @return {string}
	    */
	    inLine: function(n){ return csi + (n || 0) + "K"; }
	};

	module.exports = ansi;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	var arrayify = __webpack_require__(3)

	/**
	@module usage-options
	*/
	module.exports = UsageOptions

	/**
	 * @class
	 * @classDesc The class describes all valid options for the `getUsage` function. Inline formatting can be used within any text string supplied using valid [ansi-escape-sequences formatting syntax](https://github.com/75lb/ansi-escape-sequences#module_ansi-escape-sequences.format).
	 * @alias module:usage-options
	 * @typicalname options
	 */
	function UsageOptions (options) {
	  options = options || {}

	  /**
	   * Use this field to display a banner or header above the main body.
	   * @type {module:usage-options~textBlock}
	   */
	  this.header = options.header

	  /**
	  * The title line at the top of the usage, typically the name of the app. By default it is underlined but this formatting can be overridden by passing a {@link module:usage-options~textObject}.
	  *
	  * @type {string}
	  * @example
	  * { title: "my-app" }
	  */
	  this.title = options.title

	  /**
	   * A description to go underneath the title. For example, some words about what the app is for.
	   * @type {module:usage-options~textBlock}
	   */
	  this.description = options.description

	  /**
	  * An array of strings highlighting the main usage forms of the app.
	  * @type {module:usage-options~textBlock}
	  */
	  this.synopsis = options.synopsis || (options.usage && options.usage.forms) || options.forms

	  /**
	  * Specify which groups to display in the output by supplying an object of key/value pairs, where the key is the name of the group to include and the value is a string or textObject. If the value is a string it is used as the group title. Alternatively supply an object containing a `title` and `description` string.
	  * @type {object}
	  * @example
	  * {
	  *     main: {
	  *         title: "Main options",
	  *         description: "This group contains the most important options."
	  *     },
	  *     misc: "Miscellaneous"
	  * }
	  */
	  this.groups = options.groups

	  /**
	  Examples
	  @type {module:usage-options~textBlock}
	  */
	  this.examples = options.examples

	  /**
	  * Displayed at the foot of the usage output.
	  * @type {module:usage-options~textBlock}
	  * @example
	  * {
	  *     footer: "Project home: [underline]{https://github.com/me/my-app}"
	  * }
	  */
	  this.footer = options.footer

	  /**
	  * If you want to hide certain options from the output, specify their names here. This is sometimes used to hide the `defaultOption`.
	  * @type {string|string[]}
	  * @example
	  * {
	  *     hide: "files"
	  * }
	  */
	  this.hide = arrayify(options.hide)
	}

	/**
	 * A text block can be a string:
	 *
	 * ```js
	 * {
	 *   description: 'This is a single-line description.'
	 * }
	 * ```
	 * .. or multiple strings:
	 * ```js
	 * {
	 *   description: [
	 *     'This is a multi-line description.',
	 *     'A new string in the array represents a new line.'
	 *   ]
	 * }
	 * ```
	 * .. or an array of objects. In which case, it will be formatted by [column-layout](https://github.com/75lb/column-layout):
	 * ```js
	 * {
	 *   description: {
	 *     column1: 'This will go in column 1.',
	 *     column2: 'Second column text.'
	 *   }
	 * }
	 * ```
	 * If you want set specific column-layout options, pass an object with two properties: `options` and `data`.
	 * ```js
	 * {
	 *   description: {
	 *     options: {
	 *       columns: [
	 *         { name: 'two', width: 40, nowrap: true }
	 *       ]
	 *     },
	 *     data: {
	 *       column1: 'This will go in column 1.',
	 *       column2: 'Second column text.'
	 *     }
	 *   }
	 * }
	 * ```
	 * @typedef textBlock
	 * @type {string | string[] | object[] | {{ options: string, data: array }} }
	 */


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var columnLayout = __webpack_require__(16);
	var o = __webpack_require__(6);
	var ansi = __webpack_require__(109);
	var os = __webpack_require__(95);
	var t = __webpack_require__(4);
	var UsageOptions = __webpack_require__(112);
	var arrayify = __webpack_require__(3);

	module.exports = getUsage;

	var Lines = (function (_Array) {
	  _inherits(Lines, _Array);

	  function Lines() {
	    _classCallCheck(this, Lines);

	    _get(Object.getPrototypeOf(Lines.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Lines, [{
	    key: 'add',
	    value: function add(content) {
	      var _this = this;

	      arrayify(content).forEach(function (line) {
	        return _this.push(ansi.format(line));
	      });
	    }
	  }, {
	    key: 'emptyLine',
	    value: function emptyLine() {
	      this.push('');
	    }
	  }]);

	  return Lines;
	})(Array);

	function getUsage(definitions, options) {
	  options = new UsageOptions(options);
	  definitions = definitions || [];

	  var output = new Lines();
	  output.emptyLine();

	  if (options.hide && options.hide.length) {
	    definitions = definitions.filter(function (definition) {
	      return options.hide.indexOf(definition.name) === -1;
	    });
	  }

	  if (options.header) {
	    output.add(renderSection('', options.header));
	  }

	  if (options.title || options.description) {
	    output.add(renderSection(options.title, options.description));
	  }

	  if (options.synopsis) {
	    output.add(renderSection('Synopsis', options.synopsis));
	  }

	  if (definitions.length) {
	    if (options.groups) {
	      o.each(options.groups, function (val, group) {
	        var title;
	        var description;
	        if (t.isObject(val)) {
	          title = val.title;
	          description = val.description;
	        } else if (t.isString(val)) {
	          title = val;
	        } else {
	          throw new Error('Unexpected group config structure');
	        }

	        output.add(renderSection(title, description));

	        var optionList = getUsage.optionList(definitions, group);
	        output.add(renderSection(null, optionList, true));
	      });
	    } else {
	      output.add(renderSection('Options', getUsage.optionList(definitions), true));
	    }
	  }

	  if (options.examples) {
	    output.add(renderSection('Examples', options.examples));
	  }

	  if (options.footer) {
	    output.add(renderSection('', options.footer));
	  }

	  return output.join(os.EOL);
	}

	function getOptionNames(definition, optionNameStyles) {
	  var names = [];
	  var type = definition.type ? definition.type.name.toLowerCase() : '';
	  var multiple = definition.multiple ? '[]' : '';
	  if (type) type = type === 'boolean' ? '' : '[underline]{' + type + multiple + '}';
	  type = ansi.format(definition.typeLabel || type);

	  if (definition.alias) names.push(ansi.format('-' + definition.alias, optionNameStyles));
	  names.push(ansi.format('--' + definition.name, optionNameStyles) + ' ' + type);
	  return names.join(', ');
	}

	function renderSection(title, content, skipIndent) {
	  var lines = new Lines();

	  if (title) {
	    lines.add(ansi.format(title, ['underline', 'bold']));
	    lines.emptyLine();
	  }

	  if (!content) {
	    return lines;
	  } else {
	    if (t.isString(content)) {
	      lines.add(indentString(content));
	    } else if (Array.isArray(content) && content.every(t.isString)) {
	      lines.add(skipIndent ? content : indentArray(content));
	    } else if (Array.isArray(content) && content.every(t.isPlainObject)) {
	      lines.add(columnLayout.lines(content, {
	        padding: { left: '  ', right: ' ' }
	      }));
	    } else if (t.isPlainObject(content)) {
	      if (!content.options || !content.data) {
	        throw new Error('must have an "options" or "data" property\n' + JSON.stringify(content));
	      }
	      content.options = o.extend({
	        padding: { left: '  ', right: ' ' }
	      }, content.options);
	      lines.add(columnLayout.lines(content.data.map(function (row) {
	        return formatRow(row);
	      }), content.options));
	    } else {
	      var message = 'invalid input - \'content\' must be a string, array of strings, or array of plain objects:\n\n' + JSON.stringify(content);
	      throw new Error(message);
	    }

	    lines.emptyLine();
	    return lines;
	  }
	}

	function indentString(string) {
	  return '  ' + string;
	}
	function indentArray(array) {
	  return array.map(indentString);
	}
	function formatRow(row) {
	  o.each(row, function (val, key) {
	    row[key] = ansi.format(val);
	  });
	  return row;
	}

	getUsage.optionList = function (definitions, group) {
	  if (!definitions || definitions && !definitions.length) {
	    throw new Error('you must pass option definitions to getUsage.optionList()');
	  }
	  var columns = [];

	  if (group === '_none') {
	    definitions = definitions.filter(function (def) {
	      return !t.isDefined(def.group);
	    });
	  } else if (group) {
	    definitions = definitions.filter(function (def) {
	      return arrayify(def.group).indexOf(group) > -1;
	    });
	  }

	  definitions.forEach(function (def) {
	    columns.push({
	      option: getOptionNames(def, 'bold'),
	      description: def.description
	    });
	  });

	  return columnLayout.lines(columns, {
	    padding: { left: '  ', right: ' ' },
	    columns: [{ name: 'option', nowrap: true }, { name: 'description', maxWidth: 80 }]
	  });
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var arrayify = __webpack_require__(3);

	module.exports = UsageOptions;

	function UsageOptions(options) {
	  options = options || {};

	  this.header = options.header;

	  this.title = options.title;

	  this.description = options.description;

	  this.synopsis = options.synopsis || options.usage && options.usage.forms || options.forms;

	  this.groups = options.groups;

	  this.examples = options.examples;

	  this.footer = options.footer;

	  this.hide = arrayify(options.hide);
	}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	var arrayify = __webpack_require__(3)
	var option = __webpack_require__(12)
	var findReplace = __webpack_require__(114)

	/**
	 * Handles parsing different argv notations
	 *
	 * @module argv
	 * @private
	 */

	class Argv extends Array {
	  constructor (argv) {
	    super()

	    if (argv) {
	      argv = arrayify(argv)
	    } else {
	      /* if no argv supplied, assume we are parsing process.argv */
	      argv = process.argv.slice(0)
	      argv.splice(0, 2)
	    }

	    this.load(argv)
	  }

	  load (array) {
	    arrayify(array).forEach(item => this.push(item))
	  }

	  clear () {
	    this.length = 0
	  }

	  /* expand --option=name style args */
	  expandOptionEqualsNotation () {
	    var optEquals = option.optEquals
	    if (this.some(optEquals.test.bind(optEquals))) {
	      var expandedArgs = []
	      this.forEach(arg => {
	        var matches = arg.match(optEquals.re)
	        if (matches) {
	          expandedArgs.push(matches[1], matches[2])
	        } else {
	          expandedArgs.push(arg)
	        }
	      })
	      this.clear()
	      this.load(expandedArgs)
	    }
	  }

	  /* expand getopt-style combined options */
	  expandGetoptNotation () {
	    var combinedArg = option.combined
	    var hasGetopt = this.some(combinedArg.test.bind(combinedArg))
	    if (hasGetopt) {
	      findReplace(this, combinedArg.re, arg => {
	        arg = arg.slice(1)
	        return arg.split('').map(letter => '-' + letter)
	      })
	    }
	  }

	  validate (definitions) {
	    var invalidOption

	    var optionWithoutDefinition = this
	      .filter(arg => option.isOption(arg))
	      .some(arg => {
	        if (definitions.get(arg) === undefined) {
	          invalidOption = arg
	          return true
	        }
	      })
	    if (optionWithoutDefinition) {
	      halt(
	        'UNKNOWN_OPTION',
	        'Unknown option: ' + invalidOption
	      )
	    }
	  }
	}

	function halt (name, message) {
	  var err = new Error(message)
	  err.name = name
	  throw err
	}

	module.exports = Argv


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var t = __webpack_require__(4);
	var arrayify = __webpack_require__(3);
	var testValue = __webpack_require__(115);

	/**
	Find and replace items in an array.

	@module find-replace
	@example
	> findReplace = require("find-replace");

	> findReplace([ 1, 2, 3], 2, "two")
	[ 1, 'two', 3 ]

	> findReplace([ 1, 2, 3], 2, [ "two", "zwei" ])
	[ 1, [ 'two', 'zwei' ], 3 ]

	> findReplace([ 1, 2, 3], 2, "two", "zwei")
	[ 1, 'two', 'zwei', 3 ]
	*/
	module.exports = findReplace;

	/**
	@param {array} - the input array
	@param {valueTest} - a query to match the value you're looking for
	@param [...replaceWith] {any} - optional replacement items
	@returns {array}
	@alias module:find-replace
	*/
	function findReplace(array, valueTest){
	    var found = [];
	    var replaceWiths = arrayify(arguments);
	    replaceWiths.splice(0, 2);
	    
	    arrayify(array).forEach(function(value, index){
	        var expanded = [];
	        replaceWiths.forEach(function(replaceWith){
	            if (typeof replaceWith === "function"){
	                expanded = expanded.concat(replaceWith(value));
	            } else {
	                expanded.push(replaceWith);
	            }
	        });
	        
	        if (testValue(value, valueTest)){
	            found.push({ 
	                index: index, 
	                replaceWithValue: expanded
	            });
	        }
	    });

	    found.reverse().forEach(function(item){
	        var spliceArgs = [ item.index, 1 ].concat(item.replaceWithValue);
	        array.splice.apply(array, spliceArgs);
	    });
	    
	    return array;
	}


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var arrayify = __webpack_require__(3);
	var t = __webpack_require__(4);

	/**
	@module test-value
	@example
	var testValue = require("test-value");
	*/
	module.exports = testValue;

	/**
	@alias module:test-value
	@param {any} - a value to test
	@param {any} - the test query
	@returns {boolean}
	*/
	function testValue(value, test){
	    if (t.isPlainObject(test) && t.isObject(value)){
	        return Object.keys(test).every(function(prop){
	            var queryValue = test[prop];

	            /* get flags */
	            var isNegated = false;
	            var isContains = false;

	            if (prop.charAt(0) === "!"){
	                isNegated = true;
	            } else if (prop.charAt(0) === "+") {
	                isContains = true;
	            }

	            /* strip flag char */
	            prop = (isNegated || isContains) ? prop.slice(1) : prop;
	            var objectValue = value[prop];

	            if (isContains){
	                queryValue = arrayify(queryValue);
	                objectValue = arrayify(objectValue);
	            }

	            var result = testValue(objectValue, queryValue);
	            return isNegated ? !result : result;
	        });
	    } else if (Array.isArray(test)){
	        var tests = test;
	        if (!Array.isArray(value)) value = [ value ];
	        return value.some(function(val){
	            return tests.some(function(test){
	                return testValue(val, test);
	            });
	        });

	    /*
	    regexes queries will always return `false` for `null`, `undefined`, `NaN`.
	    This is to prevent a query like `/.+/` matching the string `undefined`.
	    */
	    } else if (test instanceof RegExp){
	        if ([ "boolean", "string", "number" ].indexOf(typeof value)  === -1){
	            return false;
	        } else {
	            return test.test(value);
	        }

	    } else if (typeof test === "function"){
	        return test(value);
	    } else {
	        return test === value;
	    }
	}


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var arrayify = __webpack_require__(3);
	var o = __webpack_require__(6);
	var Definitions = __webpack_require__(117);
	var option = __webpack_require__(118);
	var _getUsage = __webpack_require__(14);
	var t = __webpack_require__(4);
	var Argv = __webpack_require__(120);

	module.exports = commandLineArgs;

	var CommandLineArgs = (function () {
	  function CommandLineArgs(definitions) {
	    _classCallCheck(this, CommandLineArgs);

	    this.definitions = new Definitions(definitions);
	  }

	  _createClass(CommandLineArgs, [{
	    key: 'parse',
	    value: function parse(argv) {
	      var _this = this;

	      argv = new Argv(argv);
	      argv.expandOptionEqualsNotation();
	      argv.expandGetoptNotation();
	      argv.validate(this.definitions);

	      var output = this.definitions.createOutput();
	      var def;

	      argv.forEach(function (item) {
	        if (option.isOption(item)) {
	          def = _this.definitions.get(item);
	          if (!t.isDefined(output[def.name])) outputSet(output, def.name, def.getInitialValue());
	          if (def.isBoolean()) {
	            outputSet(output, def.name, true);
	            def = null;
	          }
	        } else {
	          var value = item;
	          if (!def) {
	            def = _this.definitions.getDefault();
	            if (!def) return;
	            if (!t.isDefined(output[def.name])) outputSet(output, def.name, def.getInitialValue());
	          }

	          var outputValue = def.type ? def.type(value) : value;
	          outputSet(output, def.name, outputValue);

	          if (!def.multiple) def = null;
	        }
	      });

	      o.each(output, function (value, key) {
	        if (Array.isArray(value) && value._initial) delete value._initial;
	      });

	      if (this.definitions.isGrouped()) {
	        var grouped = {
	          _all: output
	        };

	        this.definitions.whereGrouped().forEach(function (def) {
	          arrayify(def.group).forEach(function (groupName) {
	            grouped[groupName] = grouped[groupName] || {};
	            if (t.isDefined(output[def.name])) {
	              grouped[groupName][def.name] = output[def.name];
	            }
	          });
	        });

	        this.definitions.whereNotGrouped().forEach(function (def) {
	          if (t.isDefined(output[def.name])) {
	            if (!grouped._none) grouped._none = {};
	            grouped._none[def.name] = output[def.name];
	          }
	        });
	        return grouped;
	      } else {
	        return output;
	      }
	    }
	  }, {
	    key: 'getUsage',
	    value: function getUsage(options) {
	      return _getUsage(this.definitions, options);
	    }
	  }]);

	  return CommandLineArgs;
	})();

	function outputSet(output, property, value) {
	  if (output[property] && output[property]._initial) {
	    output[property] = [];
	    delete output[property]._initial;
	  }
	  if (Array.isArray(output[property])) {
	    output[property].push(value);
	  } else {
	    output[property] = value;
	  }
	}

	function commandLineArgs(definitions) {
	  return new CommandLineArgs(definitions);
	}

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var arrayify = __webpack_require__(3);
	var option = __webpack_require__(118);
	var Definition = __webpack_require__(119);
	var t = __webpack_require__(4);

	var Definitions = (function (_Array) {
	  _inherits(Definitions, _Array);

	  function Definitions(definitions) {
	    var _this = this;

	    _classCallCheck(this, Definitions);

	    _get(Object.getPrototypeOf(Definitions.prototype), 'constructor', this).call(this);
	    arrayify(definitions).forEach(function (def) {
	      return _this.push(new Definition(def));
	    });
	    this.validate();
	  }

	  _createClass(Definitions, [{
	    key: 'validate',
	    value: function validate(argv) {
	      var someHaveNoName = this.some(function (def) {
	        return !def.name;
	      });
	      if (someHaveNoName) {
	        halt('NAME_MISSING', 'Invalid option definitions: the `name` property is required on each definition');
	      }

	      var someDontHaveFunctionType = this.some(function (def) {
	        return def.type && typeof def.type !== 'function';
	      });
	      if (someDontHaveFunctionType) {
	        halt('INVALID_TYPE', 'Invalid option definitions: the `type` property must be a setter fuction (default: `Boolean`)');
	      }

	      var invalidOption;

	      var numericAlias = this.some(function (def) {
	        invalidOption = def;
	        return t.isDefined(def.alias) && t.isNumber(def.alias);
	      });
	      if (numericAlias) {
	        halt('INVALID_ALIAS', 'Invalid option definition: to avoid ambiguity an alias cannot be numeric [--' + invalidOption.name + ' alias is -' + invalidOption.alias + ']');
	      }

	      var multiCharacterAlias = this.some(function (def) {
	        invalidOption = def;
	        return t.isDefined(def.alias) && def.alias.length !== 1;
	      });
	      if (multiCharacterAlias) {
	        halt('INVALID_ALIAS', 'Invalid option definition: an alias must be a single character');
	      }

	      var hypenAlias = this.some(function (def) {
	        invalidOption = def;
	        return def.alias === '-';
	      });
	      if (hypenAlias) {
	        halt('INVALID_ALIAS', 'Invalid option definition: an alias cannot be "-"');
	      }

	      var duplicateName = hasDuplicates(this.map(function (def) {
	        return def.name;
	      }));
	      if (duplicateName) {
	        halt('DUPLICATE_NAME', 'Two or more option definitions have the same name');
	      }

	      var duplicateAlias = hasDuplicates(this.map(function (def) {
	        return def.alias;
	      }));
	      if (duplicateAlias) {
	        halt('DUPLICATE_ALIAS', 'Two or more option definitions have the same alias');
	      }

	      var duplicateDefaultOption = hasDuplicates(this.map(function (def) {
	        return def.defaultOption;
	      }));
	      if (duplicateDefaultOption) {
	        halt('DUPLICATE_DEFAULT_OPTION', 'Only one option definition can be the defaultOption');
	      }
	    }
	  }, {
	    key: 'createOutput',
	    value: function createOutput() {
	      var output = {};
	      this.forEach(function (def) {
	        if (t.isDefined(def.defaultValue)) output[def.name] = def.defaultValue;
	        if (Array.isArray(output[def.name])) {
	          output[def.name]._initial = true;
	        }
	      });
	      return output;
	    }
	  }, {
	    key: 'get',
	    value: function get(arg) {
	      return option.short.test(arg) ? this.find(function (def) {
	        return def.alias === option.short.name(arg);
	      }) : this.find(function (def) {
	        return def.name === option.long.name(arg);
	      });
	    }
	  }, {
	    key: 'getDefault',
	    value: function getDefault() {
	      return this.find(function (def) {
	        return def.defaultOption === true;
	      });
	    }
	  }, {
	    key: 'isGrouped',
	    value: function isGrouped() {
	      return this.some(function (def) {
	        return def.group;
	      });
	    }
	  }, {
	    key: 'whereGrouped',
	    value: function whereGrouped() {
	      return this.filter(containsValidGroup);
	    }
	  }, {
	    key: 'whereNotGrouped',
	    value: function whereNotGrouped() {
	      return this.filter(function (def) {
	        return !containsValidGroup(def);
	      });
	    }
	  }]);

	  return Definitions;
	})(Array);

	function halt(name, message) {
	  var err = new Error(message);
	  err.name = name;
	  throw err;
	}

	function containsValidGroup(def) {
	  return arrayify(def.group).some(function (group) {
	    return group;
	  });
	}

	function hasDuplicates(array) {
	  var items = {};
	  for (var i = 0; i < array.length; i++) {
	    var value = array[i];
	    if (items[value]) {
	      return true;
	    } else {
	      if (t.isDefined(value)) items[value] = true;
	    }
	  }
	}

	module.exports = Definitions;

/***/ },
/* 118 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Arg = (function () {
	  function Arg(re) {
	    _classCallCheck(this, Arg);

	    this.re = re;
	  }

	  _createClass(Arg, [{
	    key: 'name',
	    value: function name(arg) {
	      return arg.match(this.re)[1];
	    }
	  }, {
	    key: 'test',
	    value: function test(arg) {
	      return this.re.test(arg);
	    }
	  }]);

	  return Arg;
	})();

	var option = {
	  short: new Arg(/^-([^\d-])$/),
	  long: new Arg(/^--(\S+)/),
	  combined: new Arg(/^-([^\d-]{2,})$/),
	  isOption: function isOption(arg) {
	    return this.short.test(arg) || this.long.test(arg);
	  },
	  optEquals: new Arg(/^(--\S+)=(.*)/)
	};

	module.exports = option;

/***/ },
/* 119 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var OptionDefinition = (function () {
	  function OptionDefinition(definition) {
	    _classCallCheck(this, OptionDefinition);

	    this.name = definition.name;
	    this.type = definition.type;
	    this.alias = definition.alias;
	    this.multiple = definition.multiple;
	    this.defaultOption = definition.defaultOption;
	    this.defaultValue = definition.defaultValue;
	    this.group = definition.group;

	    for (var prop in definition) {
	      if (!this[prop]) this[prop] = definition[prop];
	    }
	  }

	  _createClass(OptionDefinition, [{
	    key: 'getInitialValue',
	    value: function getInitialValue() {
	      if (this.multiple) {
	        return [];
	      } else if (this.isBoolean() || !this.type) {
	        return true;
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: 'isBoolean',
	    value: function isBoolean() {
	      return this.type === Boolean;
	    }
	  }]);

	  return OptionDefinition;
	})();

	module.exports = OptionDefinition;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var arrayify = __webpack_require__(3);
	var option = __webpack_require__(118);
	var findReplace = __webpack_require__(114);

	var Argv = (function (_Array) {
	  _inherits(Argv, _Array);

	  function Argv(argv) {
	    _classCallCheck(this, Argv);

	    _get(Object.getPrototypeOf(Argv.prototype), 'constructor', this).call(this);

	    if (argv) {
	      argv = arrayify(argv);
	    } else {
	      argv = process.argv.slice(0);
	      argv.splice(0, 2);
	    }

	    this.load(argv);
	  }

	  _createClass(Argv, [{
	    key: 'load',
	    value: function load(array) {
	      var _this = this;

	      arrayify(array).forEach(function (item) {
	        return _this.push(item);
	      });
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.length = 0;
	    }
	  }, {
	    key: 'expandOptionEqualsNotation',
	    value: function expandOptionEqualsNotation() {
	      var optEquals = option.optEquals;
	      if (this.some(optEquals.test.bind(optEquals))) {
	        var expandedArgs = [];
	        this.forEach(function (arg) {
	          var matches = arg.match(optEquals.re);
	          if (matches) {
	            expandedArgs.push(matches[1], matches[2]);
	          } else {
	            expandedArgs.push(arg);
	          }
	        });
	        this.clear();
	        this.load(expandedArgs);
	      }
	    }
	  }, {
	    key: 'expandGetoptNotation',
	    value: function expandGetoptNotation() {
	      var combinedArg = option.combined;
	      var hasGetopt = this.some(combinedArg.test.bind(combinedArg));
	      if (hasGetopt) {
	        findReplace(this, combinedArg.re, function (arg) {
	          arg = arg.slice(1);
	          return arg.split('').map(function (letter) {
	            return '-' + letter;
	          });
	        });
	      }
	    }
	  }, {
	    key: 'validate',
	    value: function validate(definitions) {
	      var invalidOption;

	      var optionWithoutDefinition = this.filter(function (arg) {
	        return option.isOption(arg);
	      }).some(function (arg) {
	        if (definitions.get(arg) === undefined) {
	          invalidOption = arg;
	          return true;
	        }
	      });
	      if (optionWithoutDefinition) {
	        halt('UNKNOWN_OPTION', 'Unknown option: ' + invalidOption);
	      }
	    }
	  }]);

	  return Argv;
	})(Array);

	function halt(name, message) {
	  var err = new Error(message);
	  err.name = name;
	  throw err;
	}

	module.exports = Argv;

/***/ },
/* 121 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var addWordIntoTransitionTable = function addWordIntoTransitionTable(transitionTable, word) {
	  var res = Object.assign({}, transitionTable);
	  for (var i = 0; i < word.length; i++) {
	    var character = word[i];
	    var nextChar = word[i + 1] || '$';
	    var transitionArray = res[character] || [];
	    transitionArray.push(nextChar);
	    res[character] = transitionArray;
	  }
	  return res;
	};

	var updateTransitionTable = function updateTransitionTable(database, words) {
	  var res = Object.assign({}, database);
	  for (var i = 0; i < words.length; i++) {
	    res.transitionTable = addWordIntoTransitionTable(res.transitionTable, words[i]);
	  }
	  return res;
	};

	var getNextCharacter = function getNextCharacter(transitionTable, currentCharacter) {
	  var randomGeneratorFunction = arguments.length <= 2 || arguments[2] === undefined ? Math.random : arguments[2];

	  var transitionArray = transitionTable[currentCharacter] || ['$'];
	  return transitionArray[randomGeneratorFunction() * transitionArray.length | 0];
	};

	var generateRandomWord = function generateRandomWord(transitionTable, firstCharacter) {
	  var randomGeneratorFunction = arguments.length <= 2 || arguments[2] === undefined ? Math.random : arguments[2];

	  var res = firstCharacter;
	  var nextChar = getNextCharacter(transitionTable, firstCharacter, randomGeneratorFunction);
	  while (nextChar !== '$') {
	    res += nextChar;
	    nextChar = getNextCharacter(transitionTable, nextChar, randomGeneratorFunction);
	  }
	  return res;
	};

	exports['default'] = { addWordIntoTransitionTable: addWordIntoTransitionTable, updateTransitionTable: updateTransitionTable, getNextCharacter: getNextCharacter, generateRandomWord: generateRandomWord };
	module.exports = exports['default'];

/***/ }
/******/ ]);