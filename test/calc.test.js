const expect = require('chai').expect;
const {calc} = require('../src/calc');

describe("Calc", () => {
    it("Should return 30 by adding 10 to 20", () => {
        expect(calc(10, 20, "add")).to.equal(30);
    });
    it("Should return 27 by multiplying 3 by 9", () => {
      expect(calc(3, 9, "mult")).to.equal(27);
  });
})