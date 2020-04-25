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
  const snailArray = [...array];
  
  const crawlingPath = [];

  crawl(snailArray);
  
  return crawlingPath;

  function crawl(array) {
    // default case
    if(array[0].length === 0) return;
    
    // if there is first row remaining
    if(array[0].length > 1) {
      crawlingPath.concat(array[0].splice(0, array[0].length - 1));
      
    // if thereis only one way - down
    } else if (array[0].length === 1) {
      for (let row = 0; row < array.length - 1; row++) {
        
      }
    }
  }
}