/* 
    This is an actual interview algorithm given to a Coding Dojo alum

    Find Consecutive Sums

    You are given arr, a list of positive integers 0-255
    You are given k, a integer between 1-255

    Find all the consecutive groups of integers that add up to the value k
*/

// inputs:
k = 16
arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

output = [
    [2, 5, 3, 6],
    [3, 6, 7], //  3, 6, 7 appear consecutively, so they are included in the solution
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0]
]

// create new arrays
// if no matches, return empty array

// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take ~10 mins to write the pseudocode here:
// create an empty array to push into (let results = [])
// declare a sum value to add to (let sum = 0)

// create an outer for loop to iterate from the first index
// create an inner while loop



// create the function and decide what params it needs and what it will return here:
function findConsecSums(arr, k){
  let results = [];
  let sum = 0;
  let idx = 0;
  for(let i = 0;  i < arr.length; i++){
    sum += arr[i];
    //set sum to be the initial val
    while (sum > k){
      //while sum is hreater than the target, sum is shifted from index val of last iteration
        sum -= arr[idx];
        idx++;
    }
    if(sum === k){
      results.push(arr.slice(idx,i+1));
      let j = i + 1;
      while (arr[j]== 0 && j < arr.length){
        results.push(arr.slice(idx,j+1));
        j++;
      }
      sum -= arr[idx];
      idx++;
    }
  }
  return results
}
console.log(findConsecSums(arr, k))