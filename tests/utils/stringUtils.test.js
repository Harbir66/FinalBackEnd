const stringUtil = require('../../src/utils/stringUtils');

describe('stringUtils', () => {
  describe('stringToArray', () => {
    it('should return an array of strings when given an input of stringified array', () => {
      const input = '["one","two","three"]';
      const output = stringUtil.stringToArray(input);
      expect(output).toEqual(['one', 'two', 'three']);
    });
  });
});
