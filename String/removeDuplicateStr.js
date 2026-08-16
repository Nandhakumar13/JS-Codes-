// method 01
function removeDuplicate(str) {
  let obj = {};
  let res = "";

  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1;
    if (obj[char] <= 1) res += char;
    console.log(obj[char] + " " + char);
  }
  return res;
}

// console.log(
//   "remove duplicate from the given string",
//   removeDuplicate("nataraj"),
// );

// method 02

function removeDuplicateSet(str) {
  let set = new Set();
  let res = "";

  for (let char of str) {
    if (!set.has(char)) {
      set.add(char);
      res += char;
    }
  }
  return res;
}

// console.log(
//   "remove duplicate from the given string method 02",
//   removeDuplicateSet("nataraj"),
// );



// 03 build in method

function removeDuplicateBuildIn(str){
    // let res = Array.from(new Set(str)).join('');
    let res = [...new Set(str)].join('');
   return res
    
}

// console.log(
//   "remove duplicate from the given string method 03",
//   removeDuplicateBuildIn("nataraj"),
// );


// method 04 :: index of 04

function removeDuplicate(str){
    let res = str.split("").filter((char,i,str) => str.indexOf(char) === i ).join('');
    return res;

   
}

// console.log("Index of method", removeDuplicate("nandha"));