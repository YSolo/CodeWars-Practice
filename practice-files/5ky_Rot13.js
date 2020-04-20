// ROT13 is a simple letter substitution cipher that replaces 
// a letter with the letter 13 letters after it in the alphabet. 
// ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string 
// ciphered with Rot13. If there are numbers or special characters 
// included in the string, they should be returned as they are. 
// Only letters from the latin/english alphabet should be shifted, 
// like in the original Rot13 "implementation".

// My solution

function rot13(message){
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');    

  let encodedMessage = '';
  
  for (char of message) {
    if ( !alphabet.includes(char.toUpperCase()) ) {
      encodedMessage += char; 
      continue;
    };  
    
    const charIndex = alphabet.indexOf(char.toUpperCase());
    const newCharIndex = (charIndex < 13) ? alphabet.length + (charIndex - 13)  : charIndex - 13;
    const newChar = alphabet.includes(char) ?  alphabet[newCharIndex] : alphabet[newCharIndex].toLowerCase();
    
    encodedMessage += newChar;
  }
  
  return encodedMessage;
}

// Best solution

function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

// Takeaways

// Back to regexp