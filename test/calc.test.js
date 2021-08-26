const expect = require('chai').expect;
const {calc} = require('../src/calc');

describe("Calc", () => {
  
    it("Should return 'Error!' if operator name isn't mult / add / div", () => {
      expect(calc(69, "tsouintsouin")).to.equal("Error!");
    });
    it("Should return 'Error!' if num1 isn't a number or a float", () => {
      expect(calc("pouet", 69, "add")).to.equal("Error!");
    });
    it("Should return 'Error!' if num2 isn't a number or a float", () => {
      expect(calc(69, "pouet", "add")).to.equal("Error!");
    });
    it("Handles the lack of parameter", () => {
      expect(calc(2, "add")).to.equal('Error!');
    });
    it("Addition | Integer : should return 9 by adding 3 to 6", () => {
      expect(calc(3, 6, "add")).to.equal(9);
    });
    it("Addition | Negative integer : should return -3 by adding -6 to 3", () => {
      expect(calc(-6, 3, "add")).to.equal(-3);
    });
    it("Addition | Decimal : should return 0.9 by adding 0.3 to 0.6", () => {
        expect(calc(0.3, 0.6, "add")).to.equal(0.9);
    });
    it("Multiplication | Integer : should return 27 by multiplying 3 by 9", () => {
      expect(calc(3, 9, "mult")).to.equal(27);
    });
    it("Multiplication | Negative integer : should return -27 by multiplying 3 by -9", () => {
      expect(calc(3, -9, "mult")).to.equal(-27);
    });
    it("Multiplication | Decimal : Should return 0.27 by multiplying 0.3 by 0.9", () => {
      expect(calc(0.3, 0.9, "mult")).to.equal(0.27);
    });
    it("Division by 0 | Should return 'Error!' if divider is 0", () => {
      expect(calc(0.27, 0, "div")).to.equal("Error!");
    });
    it("Division | Integer : Should return 3 by dividing 27 by 9", () => {
      expect(calc(27, 9, "div")).to.equal(3);
    });
    it("Division | Negative Integer : Should return -3 by dividing 27 by -9", () => {
      expect(calc(27, -9, "div")).to.equal(-3);
    });
    it("Division | Decimal : Should return 0.3 by dividing 0.27 by 0.9", () => {
      expect(calc(0.27, 0.9, "div")).to.equal(0.3);
    });
})