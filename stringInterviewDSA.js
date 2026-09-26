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


