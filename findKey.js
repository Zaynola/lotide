const findKey = function (object, callback) {
    for (const key in object) {
        if (callback(object[key])) {
            return key;
        }
    }
    return undefined;
};

const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`👍👍👍Assertion Passed: ${actual}  ===  ${expected}`)
    } else {
        console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`)
    }
};

const testObject1 = {
    "a": 1,
    "b": 2,
    "c": 3
  };
  assertEqual(findKey(testObject1, x => x === 2), "b");
  assertEqual(findKey(testObject1, x => x > 1), "b");
  assertEqual(findKey(testObject1, x => x > 3), undefined)