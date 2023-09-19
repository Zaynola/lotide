const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`👍👍👍Assertion Passed: ${actual}  ===  ${expected}`)
    } else {
        console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`)
    }
};

// assertEqual(1, 1); //should return true
// assertEqual("Lighthouse Labs", "Bootcamp");  //should return false
// assertEqual("Lighthouse", "Lighthouse");  // should return true
// assertEqual(2, 4);   // should return false

module.exports = assertEqual;