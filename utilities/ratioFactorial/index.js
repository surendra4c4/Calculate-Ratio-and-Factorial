const ratioOfTwoNumbers = require("../ratio/index");
const factorialNumber = require("../factorial/index");

const ratioAndFactorial = (num1, num2, num3) => {
  let ratio = ratioOfTwoNumbers(num1, num2);
  let factorial = factorialNumber(num3);
  return {
    ratio: ratio,
    factorial: factorial,
  };
};

module.exports = ratioAndFactorial;
