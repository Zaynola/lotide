// console.assert(1 === .11);

// const sum = function (a, b) {
// return a + b;
// }

// console.assert(sum(1, 2) === 3);
// console.assert(sum(1, 20) === 3);

// const sumBuggy = function (a, b) {
// return a * b;
// }
// console.assert(sumBuggy(1, 2) === 3);
const eqArrays = function (array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
};

const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`👍👍👍Assertion Passed: ${actual}  ===  ${expected}`)
    } else {
        console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`)
    }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(1, 1);
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("Lighthouse", "Lighthouse");
// assertEqual(2, 4);