// const assertEqual = function (actual, expected) {
const assertEqual = require('./assertEqual');
//     if (actual === expected) {
//         console.log(`👍👍👍Assertion Passed: ${actual}  ===  ${expected}`)
//     } else {
//         console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`)
//     }
//};
const head = function (array) {
    if (array.length === 0) {
        return undefined
    } else {
        return (array[0]);
    }
};
//assertEqual(head([5, 6, 7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("Lighthouse", "Lighthouse");
// assertEqual(2, 4);


module.exports = head;