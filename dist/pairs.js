"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-unused-vars */
var cons = exports.cons = function cons(x, y) {
  return function (f) {
    return f(x, y);
  };
};

// BEGIN (write your solution here)
var car = exports.car = function car(pair) {
  return pair(function (x, y) {
    return x;
  });
};
var cdr = exports.cdr = function cdr(pair) {
  return pair(function (x, y) {
    return y;
  });
};
// END