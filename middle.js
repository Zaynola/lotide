

// const assertArrayEqual = function (actual, expected) {
//     if (eqArrays(actual, expected)) {
//         console.log(`👍👍👍assert array Passed: ${actual}  ===  ${expected}`)
//     } else {
//         console.log(`👎👎👎assert array Failed: ${actual} !== ${expected}`)
//     }
// };

const middle = function (array) {
    const length = array.length;
    if (length < 3) {
        return [];
    }
    if (length % 2 === 1) {
        return [array[Math.floor(length / 2)]];
    } else {
        return [array[length / 2 - 1], array[length / 2]];
    }
};
module.exports = middle
