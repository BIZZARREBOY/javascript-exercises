const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((prev, current) => prev + current, 0);
};

const multiply = function(array) {
  return array.reduce((prev, current) => prev * current, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
	if(a === 0) return 1;
  let factorial = 1;
  for (let i = 1; i <= a; i++) {//i = 2; 2 <= 2
    factorial *= i;//factorial = 1 * 2 = 2
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
