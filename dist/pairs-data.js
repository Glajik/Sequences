'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.toString = exports.isEmpty = exports.tail = exports.head = exports.l = exports.cons = undefined;

var _pairs = require('./pairs');

var cons = exports.cons = function cons(value, list) {
	return (0, _pairs.cons)(value, list);
};

var l = exports.l = function l() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	if (args.length === 0) return null;
	var list = args.reduceRight(function (acc, el) {
		return cons(el, acc);
	}, null);
	return list;
};

var head = exports.head = function head(list) {
	return (0, _pairs.car)(list);
};

var tail = exports.tail = function tail(list) {
	return (0, _pairs.cdr)(list);
};

var isEmpty = exports.isEmpty = function isEmpty(list) {
	return list === null;
};

var toString = exports.toString = function toString(list) {
	var recc = function recc(myList) {
		if (isEmpty(myList)) return '';else {
			var comma = isEmpty(tail(myList)) ? '' : ', ';
			return head(myList) + comma + recc(tail(myList));
		}
	};
	return '(' + recc(list) + ')';
};