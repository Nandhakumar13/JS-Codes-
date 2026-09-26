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
let s1 = "A man, a plan, a canal: Panama";
let s2 = "race a car";
console.log("check valid palindrom", validPalindrome(s1));
console.log("check valid palindrom", validPalindrome(s2));