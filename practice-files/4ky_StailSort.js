/*

TASK

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

*/

// My solution

snail = function(array) {
  const arrayCopy = array.slice();
  
  let crawlingPath = [];
  
  
  crawl(array);
  
  return crawlingPath;
  
  function crawl(array) {
    if (array.length === 0) return;
    
    // Crawl right
    crawlingPath = crawlingPath.concat(array.shift(0));
    
    // Crawl down
    if (array.length) {
      for (let row = 0; row < array.length; row++) {
        crawlingPath.push(array[row].pop());
      }
    }
    
    // Crawl left
    if (array.length) {
      crawlingPath = crawlingPath.concat(array.pop().reverse());
   }
    
    // Crawl up
    if (array.length > 1) {
      for (let row = array.length - 1; row >= 0 ; row --) {
        crawlingPath.push(array[row].shift());
      }
    }
    
    crawl(array);
  }
}

// Best solution

snail = function(array) {
  var result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items.
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  return result;
}
