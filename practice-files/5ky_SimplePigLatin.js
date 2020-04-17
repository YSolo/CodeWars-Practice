// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// * My first solution

function pigIt(str){
  const words = str.split(" ");
  
  const convertToPigLatin = word => {
    if (word === '!' || word === '?') return word;
  
    const letters = word.split('');
    const firstLetter = letters.shift();
    
    return `${letters.join('')}${firstLetter}ay`;
  }
  
  return words.map(convertToPigLatin).join(' ');
}


// * Best practice

function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

// * Takeaway

// Learn about regular expressions.