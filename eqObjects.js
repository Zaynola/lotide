const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`👍👍👍Assertion Passed: ${actual}  ===  ${expected}`)
    } else {
        console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`)
    }
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


const eqObjects = function (object1, object2) {
    const key1 = Object.keys(object1);
    const key2 = Object.keys(object2);
    if (key1.length === key2.length) {
        return true;
    }
    for (const key of key1) {
        const val1 = object1[key];
        const val2 = object2[key];
        if (Array.isArray(val1) && Array.isArray(val2)) {
            if (eqArrays(val1, val2)) {
                return true;
            }
        }
        else if (val1 === val2) {
            return true;
        }
    }
    return false;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject);
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
