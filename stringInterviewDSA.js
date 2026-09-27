// reverse string

function reverseString(str){
    let revStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        revStr+= str[i];
    }

    return revStr;
}

// method 02 
function reverseString02(str){
    let left = 0;
    let right = str.length - 1;
    let strArr = str.split('');

    while(left < right){
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
        left++;
        right--;
    }
    return strArr.join('');
}


// console.log("reverse string method 02", reverseString02("muruga"));


// prob::02 valid palindrome

function validPalindrome(str){
    let modStr = str.toLowerCase().replace(/[^(a-z0-9)]/g,'');
 
    let left  = 0;
    let right = modStr.length - 1;
    while(left < right){
        if(modStr[left] !== modStr[right]){
            return false
        }
        left++;
        right--;
    }
    return true;

}
// let s1 = "A man, a plan, a canal: Panama";
// let s2 = "race a car";
// console.log("check valid palindrom", validPalindrome(s1));
// console.log("check valid palindrom", validPalindrome(s2));

// Problem #3 — Valid Anagram

function validAnagram(s1,s2){
    if(s1.length !== s2.length) return false;

    let  charArr = new Array(26).fill(0);

    for(const char of s1){
        charArr[char.charCodeAt(0) - 97]++;
    }

    for(const char of s2){
        let idx = char.charCodeAt(0) - 97;

        if(charArr[idx] == 0) return false;
        charArr[idx]--;
    }

    return true;
}
// s = "rat"
// t = "car"
// console.log("Valid anagram", validAnagram(s,t));

// Problem #4 — First Unique Character in a String

function firstUniqueChar(str){
    let hashMap = new Map();

    for(const char of str){
        hashMap.set(char, (hashMap.get(char) || 0)+1);
    }

    for(let i = 0; i<str.length; i++){
        if(hashMap.get(str[i]) == 1) return i;
    }

    return -1;
}

s = "aabb";

// console.log("first unique char", firstUniqueChar(s));

//Given an array containing numbers and characters, the task was to:

// → Remove the non-numeric characters
// → Remove duplicate numbers
// → Sort the remaining numbers
// → Display only the required numeric values

let arr = [1,2,'a','j','a','t','o','i','x','l','1',4,8,2,7];

function task(arr){
// → Remove the non-numeric characters
let resArr = [];
for(let char of arr){
    if( !isNaN(char)){
            resArr.push(char);
    }
}

console.log("removed non numeric values", resArr);

// === → Remove duplicate numbers

let set = new Set();
let resArr1 = [];

for(let i = 0;i < resArr.length;i++){
    if(!set.has(resArr[i])){
        resArr1.push(resArr[i]);
    }
    set.add(resArr[i]);
}
console.log("removed duplicate numbers",resArr1);

// === → Sort the remaining numbers
let sortArr = [];

let max = Math.max(...resArr1);
let min = Math.min(...resArr1);
let range = max - min + 1;
let countArr = new Array(range).fill(0);

for(let num of resArr1){
    countArr[num - min]++;
}

let idx = 0;
for(let i=0; i < range;i++){
    while(countArr[i] > 0){
        resArr1[idx] = i+min;
        idx++;
        countArr[i]--;
    }
}

console.log("sorted array", resArr1);

}

console.log(task(arr));