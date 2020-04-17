// Task

// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

// My solution
function validBraces(braces){
  const bracesStatus = {
    round: 0,
    square: 0,
    curly: 0,
  }
  
  for (let char of braces) {
    if (char === '(') bracesStatus.round += 1;
    if (char === '[') bracesStatus.square += 1;
    if (char === '{') bracesStatus.curly += 1;
    
    if (char === ')') bracesStatus.round -= 1;
    if (char === ']') bracesStatus.square -= 1;
    if (char === '}') bracesStatus.curly -= 1;    
  }
  
  
  return Object.values(bracesStatus)
    .reduce( (sum, value) => sum + value) === 0 ?
    true :
    false;
}
