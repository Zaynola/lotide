const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`👍👍👍Assertion Passed: ${actual}  ===  ${expected}`)
    } else {
        console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`)
    }
};

const countLetters = function (letters) {
    const result = {};
    for (const letter of letters) {
        if (result[letter]) {
            result[letter] += 1;
        } else {
            result[letter] = 1;
        }
    }
    return result;
}

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
const result1 = countLetters("LHL");
console.log(result1);

const result2 = countLetters("OLA");
console.log(result2);