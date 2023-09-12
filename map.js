const words = ["ground", "control", "to", "major", "tom"];
const map = function (array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
      }
    return results;
}

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

const words1 = ["ground", "control", "to", "major", "tom"];
const result1 = map(words1, word => word.length);
assertArrayEqual(result1, [6, 7, 2, 5, 3]);

const words2 = ["ground", "control", "to", "major", "tom"];
const result2 = map(words2, word => word.toUpperCase());
assertArrayEqual(result2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

const words3 = ["ground", "control", "to", "major", "tom"];
const result3 = map(words3, word => word.split('').reverse().join(''));
assertArrayEqual(result3, ["dnuorg", "lortnoc", "ot", "rojam", "mot"]);
