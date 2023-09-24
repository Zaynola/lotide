const assertEqual = require('../assertEqual')
assertEqual(1, 1); //should return true
assertEqual("Lighthouse Labs", "Bootcamp");  //should return false
assertEqual("Lighthouse", "Lighthouse");  // should return true
assertEqual(2, 4);   // should return false
