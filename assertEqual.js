const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`👍👍👍Assertion Passed: ${actual}  ===  ${expected}`)
    } else {
        console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`)
    }
};

assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse", "Lighthouse");
assertEqual(2, 4);