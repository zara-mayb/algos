// findObjectsFilter({searchFor}, [itemsArr])

// given a {search for} object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const items = [
  { firstName: "Bob", lastName: "Robert", age: 31 },
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "White", age: 31 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
];

// db.ninjas.find({firstName: "Bob", age: 31})
const searchFor1 = {
  firstName: "Bob",
  age: 31
};
// return a new list of objects containing the same key pair values
const output1 = [
  { firstName: "Bob", lastName: "Robert", age: 31 },
  { firstName: "Bob", lastName: "White", age: 31 },
];

const searchFor2 = {
  lastName: "Smith",
};
const output2 = [
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
];

function findObjectsFilter(searchObj, items) {
  //create var for new array
  // PSEUDOCODE!!!!
  //loop over list
    //check each object if its equal to the searchfor1 object
    //push the object into new array
}


function findObjectsFilter(searchObj, items){
  //create var for new array
  let arr = [];
  //iterate through items for each object
  for(let i = 0; i < items.length; i++){
    let flag = true;
    for(let key in searchObj){
      if(items[i][key] != searchObj[key]){
        flag = false;
        break;
      }
    }
    if(flag == true){
      arr.push(items[i])
    }
  }
  return arr
}
console.log (findObjectsFilter(searchFor1, items));
console.log (findObjectsFilter(searchFor2, items));