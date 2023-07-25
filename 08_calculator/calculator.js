const add = function(a, b) {
	
  return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(a) {
	let answ = 0;

  for (let n = 0; n < a.length; n++)
  {
    answ += a[n];
  }



  return answ;
};

const multiply = function(arrays) {
  let ans = 1;
  for (let n = 0; n < arrays.length; n++)
  {
    ans *= arrays[n];
  }
  return ans;
};

const power = function(numm, pwr) {
	let answer = 1;
  for (let k = 1; k <= pwr; k++)
    {
      answer *= numm;
    }
      return answer;
};

const factorial = function(y) {
  let counter = 1;
  if (y == 0)
  {
    return 1;
  }

  for (let d = y; d > 0; d--)
  {
    counter *= d;
  }
  return counter;
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
