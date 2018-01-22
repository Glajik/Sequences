'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = exports.get = exports.length = exports.concat = exports.reverse = exports.has = undefined;

var _pairsData = require('./pairs-data');

var has = exports.has = function has(list, value) {
  // terminate condition
  if ((0, _pairsData.isEmpty)(list)) return false;
  // recursive call
  if ((0, _pairsData.head)(list) === value) return true;else return has((0, _pairsData.tail)(list), value);

  return null;
}; // eslint-disable-next-line
var reverse = exports.reverse = function reverse(list) {
  // itterative function
  var iter = function iter(list, newlist) {
    if ((0, _pairsData.isEmpty)(list)) return newlist;
    return iter((0, _pairsData.tail)(list), (0, _pairsData.cons)((0, _pairsData.head)(list), newlist));
  };
  // itterative call
  if (!(0, _pairsData.isEmpty)(list)) return iter(list, (0, _pairsData.l)());else return (0, _pairsData.l)();
};

var concat = exports.concat = function concat(list1, list2) {
  if ((0, _pairsData.isEmpty)(list1)) return list2;
  if ((0, _pairsData.isEmpty)(list2)) return list1;
  if ((0, _pairsData.isEmpty)(list1) && (0, _pairsData.isEmpty)(list2)) return (0, _pairsData.l)();
  if ((0, _pairsData.isEmpty)((0, _pairsData.tail)(list1))) return (0, _pairsData.cons)((0, _pairsData.head)(list1), list2);else return (0, _pairsData.cons)((0, _pairsData.head)(list1), concat((0, _pairsData.tail)(list1), list2));
};

var length = exports.length = function length(list) {
  if ((0, _pairsData.isEmpty)(list)) {
    return 0;
  } else {
    return 1 + length((0, _pairsData.tail)(list));
  }
};

var get = exports.get = function get(index, list) {
  if ((0, _pairsData.isEmpty)(list)) return undefined;

  var iter = function iter(myList, acc) {
    if ((0, _pairsData.isEmpty)(myList)) return undefined;
    if (acc === index) return (0, _pairsData.head)(myList);
    return iter((0, _pairsData.tail)(myList), acc + 1);
  };

  return iter(list, 0);
};

var random = exports.random = function random(list) {
  var count = length(list);
  if (count === 0) return undefined;
  if (count === 1) return (0, _pairsData.head)(list);
  var index = Math.round(Math.random() * (count - 1));
  return get(index, list);;
};