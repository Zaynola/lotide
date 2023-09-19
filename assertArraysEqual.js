const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArray');
// const eqArrays = function (array1, array2) {
//     if (array1.length !== array2.length) {
//         return false;
//     }
//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i]) {
//             return false;
//         }
//     }
//     return true;
// };

const assertArrayEqual = function (actual, expected) {
     if (eqArrays(actual, expected)) {
         console.log(`👍👍👍assert array Passed: ${actual}  ===  ${expected}`)
     } else {
         console.log(`👎👎👎assert array Failed: ${actual} !== ${expected}`)
    }
 };
 module.exports = assertArrayEqual;
//assertArrayEqual([1, 2, 3], [1, 2, 3]);
