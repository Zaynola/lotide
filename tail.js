const assertEqual = require('./assertEqual');
//  const assertEqual = function (actual, expected) {
//      if (actual === expected) {
//          console.log(`👍👍👍Assertion Passed: ${actual}  ===  ${expected}`)
//      } else {
//          console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`)
//      }
//  };
const tail = function (array) {
    if (array.length === 0) {
        return undefined
    } else {
        return array.slice(1)
    }
}
module.exports = tail;

// const result = tail([1, 2, 3]) // [2, 3]

//  assertEqual(result.length, 2)
//  assertEqual(result[0], 2)
// assertEqual(result[1], 3)
