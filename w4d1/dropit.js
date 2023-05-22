/*
    Input: arr, callback
    Output: arr (with elements removed)
    Remove every element in the array, starting from idx 0,
    until the callback function returns true when passed the
    iterated element.
    Return an empty array if the callback never returns true
*/
//            v
const arr1 = [1, 4, 3, 6, 9, 3];

const callback1 = (elem) => {
    return elem > 5;
};
const expected1 = [6, 9, 3];


const arr2 = [1, 4, 3, 6, 9, 3];
const callback2 = (elem) => elem > 2;
const expected2 = [4, 3, 6, 9, 3];


const arr3 = [1, 4, 3, 6, 9, 3];
const callback3 = (elem) => false;
const expected3 = [];

//PSEUDOCODE:
//use for loop to iterate the given array
//check if 
function dropIt(arr, callback) { 
  //create an empty array
  let newArr = [];
  //iterate through the array using the for loop
  for(let i = 0; i < arr.length; i++){
    //check each value until it returns true
    if(callback(arr[i])){
      //use splice to remove the false values
      newArr = arr.slice(i)
      //break out of for loop
      break;
    }
  }
  return newArr
}
console.log(dropIt(arr1, callback1));
console.log(dropIt(arr2, callback2));
console.log(dropIt(arr3, callback3));
