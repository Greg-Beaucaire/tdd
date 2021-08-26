const expect = require('chai').expect;
const {calc} = require('../src/calc');

describe("Calc", () => {
    it("Should return 30 by adding 10 to 20", () => {
        expect(calc(10, 20, "add")).to.equal(30);
    });
    it("Should return 27 by multiplying 3 by 9", () => {
      expect(calc(3, 9, "mult")).to.equal(27);
    });
    it("Should return 3 by dividing 27 by 9", () => {
      expect(calc(27, 9, "div")).to.equal(3);
    });
    it("Should return 'Error in the operator name!' if operator name isn't mult / add / div", () => {
      expect(calc(69, 420, "tsouintsouin")).to.equal("Error in the operator name!");
    });
})