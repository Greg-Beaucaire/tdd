const expect = require('chai').expect;
const {calc} = require('../src/calc');

describe("Calc", () => {
    it("Should return 0.9 by adding 0.3 to 0.6", () => {
        expect(calc(0.3, 0.6, "add")).to.equal(0.9);
    });
    it("Should return 0.27 by multiplying 0.3 by 0.9", () => {
      expect(calc(0.3, 0.9, "mult")).to.equal(0.27);
    });
    it("Should return 'Can't divide by 0' if divider is 0", () => {
      expect(calc(0.27, 0, "div")).to.equal("Can't divide by 0");
    });
    it("Should return 0.3 by dividing 0.27 by 0.9", () => {
      expect(calc(0.27, 0.9, "div")).to.equal(0.3);
    });
    it("Should return 'Error in the operator name!' if operator name isn't mult / add / div", () => {
      expect(calc(69, 420, "tsouintsouin")).to.equal("Error in the operator name!");
    });
    it("handles empty answers", () => {
      expect(calc()).to.contain('Error!');
    });
})