import React from "react";
import ReactDOM from "react-dom";
import CalculatorService from "./Calculator.service";

describe("Test of ServiceCalculator", () => {
  const [compute, concatNumbers, SUM, SUBTRACTION, SPLIT, MULTIPLICATION] = CalculatorService();

  it("the sum of 1 + 4 = 5", () => {
    let sum = compute(1, 4, SUM);
    expect(sum).toEqual(5);
  });

  it('the subtraction of 1 - 4 = -3', () => {
    let subtraction = compute(1, 4, SUBTRACTION)
    expect(subtraction).toEqual(-3)
  })

  it("the split of 1 / 4 = 0.25", () => {
    let split = compute(1, 4, SPLIT)
    expect(split).toEqual(0.25)
  })

  it("the multiplication of 1 * 4 = 4", () => {
    let multiplication = compute(1, 4, MULTIPLICATION)
    expect(multiplication).toEqual(4)
  })

  it("must return 0 for invalid operations", () => {
    let invalidOperation = compute(1, 4, '%')
    expect(invalidOperation).toEqual(0)
  })
});
