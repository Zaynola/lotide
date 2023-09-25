// const assertArrayEqual = require('../assertArraysEqual')
// const middle = require('../middle')
// assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]);


const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
    it("returns 2 for [1, 2, 3]", () => {
        const result = middle([1, 2, 3]);
        assert.deepEqual(result, [2]);
    });
});










