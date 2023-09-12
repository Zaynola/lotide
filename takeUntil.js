const takeUntil = function (array, callback) {
    const result = [];

    for (let item of array) {
        if (callback(item)) {
            return result;
        }
        result.push(item);
    }

    return result;
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
        console.log(`👍👍👍assert array Passed: ${actual}  ===  ${expected}`);
    } else {
        console.log(`👎👎👎assert array Failed: ${actual} !== ${expected}`);
    }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const result1 = takeUntil(data1, x => x < 0);
assertArrayEqual(result1, [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArrayEqual(results2, ["I've", "been", "to", "Hollywood"]);

const data3 = [1, 2, 5, "hello", 2, 4, 5];
const result3 = takeUntil(data2, x => typeof x === 'string');
assertArrayEqual(result3, [1, 2, 5]);

const data4 = [1.2, 2.5, 5.7, 0.9, 2.3];
const result4 = takeUntil(data3, x => x < 1);
assertArrayEqual(result3, [1.2, 2.5, 5.7]);