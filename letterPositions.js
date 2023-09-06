
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


const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`👍👍👍Assertion Passed: ${actual}  ===  ${expected}`)
    } else {
        console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`)
    }
};



const letterPositions = function (word) {
    const results = {};
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (letter === " ") continue;
        if (results[letter]) {
            results[letter].push(i);
        }
        else {
            results[letter] = [i];
        }

    }
    // logic to update results here
    return results;
};


const result1 = letterPositions("lighthouse in the house");
console.log(result1);

// assertArrayEqual(letterPositions("hello").e, [1]);