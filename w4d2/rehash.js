/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                           v                     
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

// isNaN
// parseInt()
// someObj.hasOwnProperty("key")

// 1. DRIVER 🚗
// 2. PRESENTER 👨‍🏫
// 3. NAVIGATOR 🧭

function rehash(str) {
  var dictionary = {};
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    //this is checking Letter
    if (isNaN(str[i]) === true) {
      if (!dictionary.hasOwnProperty(str[i])) {
        dictionary[str[i]] = 0;
      }
      for (let j = i + 1; j < str.length; j++) {
        //this one will check every number
        if (isNaN(str[j]) === false) {
          num += str[j];
        }
        if (isNaN(str[j]) || j == str.length - 1) {
          console.log("THIS IS I", str[i]);
          dictionary[str[i]] += parseInt(num);
          num = 0;
          break;
        }
      }
    }
  }
  // get an array of the dictionary's keys and sort it alphabetically
  let keys = Object.keys(dictionary);
  keys.sort();
  // setup our final answer variable
  let stringifiedAnswer = "";
  for (key of keys) {
    // loop through all our keys and push a formatted answer to our stringified variable
    stringifiedAnswer += `${key}${dictionary[key]}`;
  }
  // return the stringified answer
  console.log(stringifiedAnswer);
  return stringifiedAnswer;
}

rehash(str1);
// console.log(rehash(str1) === expected1, "<-- should be \"true\"");