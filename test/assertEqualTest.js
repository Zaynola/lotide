const assertEqual = require('../assertEqual')
assertEqual(1, 1); //should return true
assertEqual("Lighthouse Labs", "Bootcamp");  //should return false
assertEqual("Lighthouse", "Lighthouse");  // should return true
assertEqual(2, 4);   // should return false

const head = require('../head')
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

const tail = require('../tail')
const result = tail([1, 2, 3])
assertEqual(result.length, 2)
assertEqual(result[0], 2)
assertEqual(result[1], 3)

