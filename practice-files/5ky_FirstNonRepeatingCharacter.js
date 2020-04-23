/* Task
Write a function named first_non_repeating_letter that takes a string input, 
and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', 
since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, 
but the function should return the correct case for the initial letter. For example, 
the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty 
string ("") or None -- see sample tests.

*/


// My solution

function firstNonRepeatingLetter(s) {
  const letters = s.toLowerCase().split('');
 
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    if(letters.indexOf(letter) === letters.lastIndexOf(letter)) {
      return s[i];
    }
  }
  
  return '';
}

// Best practice

function firstNonRepeatingLetter(s) {
  for(var i in s) {
    if(s.match(new RegExp(s[i],"gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}

// Takeaways

// not RegExp used explicitly withoug slashes!  