function CalculatorService() {
  const SUM = "+";
  const SUBTRACTION = "-"
  const SPLIT = "/"
  const MULTIPLICATION = "*"

  function compute(number1, number2, operation) {
    let result;

    switch (operation) {
      case SUM:
        result = number1 + number2;
        break;
      case SUBTRACTION:
        result = number1 - number2;
        break;
      case SPLIT:
        result = number1 / number2
        break;
      case MULTIPLICATION:
        result = number1 * number2
        break;
      default:
        result = 0
    }

    return result;
  }

  function concatNumbers(actualNumber, concatNumber) {
    if (actualNumber === '0' || actualNumber === null) {
      actualNumber = '';
    }

    if (actualNumber === '.' && actualNumber === null) {
      return '0.';
    }

    if (actualNumber === '.' && actualNumber.indexOf('.') > -1) {
      return actualNumber
    }

    return actualNumber + concatNumber
  }
  return [compute, concatNumbers, SUM, SUBTRACTION, SPLIT, MULTIPLICATION];
}

export default CalculatorService;
