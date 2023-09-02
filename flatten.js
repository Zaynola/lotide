const flatten = function (array) {
    return array.flat();
};
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

const assertArrayEqual = function (actual, expected) {
    if (eqArrays(actual, expected)) {
        console.log(`👍👍👍assert array Passed: ${actual}  ===  ${expected}`)
    } else {
        console.log(`👎👎👎assert array Failed: ${actual} !== ${expected}`)
    }
};

const flattenedArray = flatten([1, 2, [3, 4], 5, [6]]);
console.log(flattenedArray);