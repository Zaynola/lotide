const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArrayEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArray')


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArrayEqual: assertArraysEqual,
  assertEqual: assertEqual,
  eqArrays: eqArray
};