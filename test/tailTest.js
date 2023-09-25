//  const tail = require('../tail')
//  const assertEqual = require('../assertEqual')
//  const result = tail([1, 2, 3])
//  assertEqual(result.length, 2)
//  assertEqual(result[0], 2)
//  assertEqual(result[1], 3)

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
    it("returns an array with length 2 for [1, 2, 3]" , () => {
        const result = tail([1, 2, 3]);
        assert.isArray(result);
        assert.lengthOf(result, 2);
    });
    it("returns [2, 3] for [1, 2, 3]", () => {
        const result = tail([1, 2, 3]);
        assert.deepEqual(result, [2, 3]);
    });
});