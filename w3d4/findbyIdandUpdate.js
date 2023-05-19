/* 
  findByIdAndUpdate(id, updateObject, arr)
  Given an id, an object that has keys with corresponding updated values, and an array of objects
  Find the object by "id" key that matches the given id value and then update that object's
  keys with the provided new values.
  Return the updated object, or null if no object was found

  check 
  someObj.hasOwnProperty("key")
  obj[key] === undefined
  Object.keys(someObj) // returns [an array of "keys"]
*/

const students = [
  {
      id: 1,
      name: "student1",
      isLateToday: false,
      lateCount: 15,
      redBeltStatus: false
  },
  {
      id: 2,
      name: "student2",
      isLateToday: false,
      lateCount: 1,
      redBeltStatus: false
  },
  {
      id: 3,
      name: "student3",
      isLateToday: false,
      lateCount: 0,
      redBeltStatus: false
  }
];

// Ninja.findByIdAndUpdate(req.params._id, {})
function findByIdAndUpdate(id, updatedVals, collection) {
  for (var i = 0; i < collection.length; i++) {
    // find by id, if object not found then return null
    if (collection[i].id === id) {
      // find by key
      for (let key in updatedVals) {
        if (collection[i].hasOwnProperty(key)) {
          // set new key value pair
          collection[i][key] = updatedVals[key];
        }
      }
      return collection[i];
    }
  }
  return null;
}



console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students));
console.log(findByIdAndUpdate(5, {}, students));

/*--- TEST the following: ---
Input: 3, { redBeltStatus: true }, students
Output: {
id: 3,
name: "student3",
isLateToday: false,
lateCount: 0,
redBeltStatus: true
}
*/

/*
Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
Output: {
id: 1,
name: "student1",
isLateToday: true,
lateCount: 16,
redBeltStatus: false
}
*/

// Input: 5, {}, students
// Output: null