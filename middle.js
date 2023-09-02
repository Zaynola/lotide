
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

assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]);