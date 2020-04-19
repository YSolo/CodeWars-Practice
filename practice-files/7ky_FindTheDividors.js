// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

// My solution

function divisors(integer) {
  if (integer < 2) new Error('nope, must be 2 or more');
  
  const divisors = [];
  for (let divisor = 2; divisor < integer; divisor ++) {
    if( (integer / divisor) % 1 === 0 ) {
      divisors.push(divisor);
    };
  }
  return divisors.length > 0 ? divisors : `${integer} is prime`;
};


// Best solution

function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};