

const add = function(...nums) {
  let sum = 0;
	nums.forEach(num => {
    sum += num;
  });

  return sum; 
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  let sum = 0;
	nums.forEach(num => {
    sum += num;
  });
  return sum;
};

const multiply = function(nums) {
  const product = nums.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  });

  return product;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }  
  let product = 1;

  for (let i = num; i > 0; i--) {
    product *= i;
  }

  return product;
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
