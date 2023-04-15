const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let total = 0;
	for (let i = 0; i < arr.length ; i++){
    total += arr[i];
  }
  return total;
};

const multiply = function(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	let i = a;
  let result = 1;
  if (a===0) return 1;
  while (i>0){
    result *= i;
    i--;
  }
  return result;
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
