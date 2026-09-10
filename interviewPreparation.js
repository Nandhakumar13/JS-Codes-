// two sum method

function twoSum(arr,k){
    let map = new Map();
    let res = [];

    for(let i = 0; i < arr.length; i++){
        let diff = k - arr[i];
        if(map.has(diff)){
            // res.push([map.get(diff), i]);
            res.push([diff, arr[i]]);
        }
        map.set(arr[i],i);
    }

    return res;
}

// console.log("=== two sum method", twoSum([1,2,4,3,5,8], 7));


// move zeros

function moveZeros(arr){
    let j = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            [arr[j],arr[i]] = [arr[i],arr[j]];
            j++;
        }
    }

    return arr;
}

// shift all method

function shiftFill(arr){
    let pos = 0;
    for(let i = 0;i < arr.length; i++){
        if(arr[i] !== 0){
            arr[pos] = arr[i];
            pos++;
        }
    }

    while(pos < arr.length){
        arr[pos] = 0;
        pos++; 
    }

    return arr;
}

// console.log("moveZeros to right ", moveZeros([1,2,0,7,8,0,0,2]));
// console.log("moveZeros to right ", shiftFill([1,2,0,7,8,0,0,2]));


// max sum subarray

function maxSumSubArray(arr){
    let maxSum = arr[0];
    let currSum = arr[0];

    for(let right = 1; right < arr.length; right++){
        currSum = Math.max(currSum, currSum+arr[right]);
        maxSum = Math.max(currSum,maxSum);
    }

    return maxSum;
}

// return maxsumsubarray

function maxSumSubArrayPrint(arr){
    let start =0;
    let end = 0;
    let tempStart = 0;

    let currMax = arr[0];
    let maxSum = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > currMax + arr[i]){
            currMax = arr[i];
            tempStart = i;
        }else{
            currMax += arr[i];
        }
        if(currMax > maxSum){
            maxSum = currMax;
            start = tempStart;
            end = i;
        }


    }

    return maxSum +" :: "+ arr.slice(start, end+1);
}

// console.log("max sum subarray is", maxSumSubArrayPrint([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


// duplicate detection 

function duplicate(arr){
    let res = [];
    let n = arr.length;

    for(let i = 0; i < n; i++){
        if(arr.indexOf(arr[i]) == i){
            res.push(arr[i]);
        }
    }

    return res;
}

// console.log("=== remove duplicates from the array", duplicate([1,2,4,6,2,4,3]));


// frequency counting 


function freqCount(arr){

    let map = new Map();

    for(let num of arr){
        map.set(num, (map.get(num) | 0)+1);
    }

    return map;
}

// console.log("frequency counting ", freqCount([1,2,4,2,1,3,5,3,6]));


// valid palindrom

function validPalindrome(str){

    let left = 0;
    

    let modStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g,'');
    let right = modStr.length - 1;

    while(left < right){
        if(modStr[left] != modStr[right]){
            return false
        }
        left++;
        right--;
    }

    return true;
}

// console.log("valid palidrome or not ", validPalindrome("helleh"));


// remove duplicate from sorted array

function removeDuplicateSortedArr(arr){
    let j= 0;

    for(let i = 0; i< arr.length; i++){
        if(arr[i] !== arr[j]){
            j++;
            arr[j] = arr[i];
        }
    }

    return arr.slice(0, j+1);
}

// console.log("remove duplicate from the sorted array ",removeDuplicateSortedArr([1,1,2,3,4,6,6,7]));

function mergeSortArr(arr1,arr2){
    let m= arr1.length;
    let n= arr2.length;

    let i = m - 1;
    let j= n- 1;
    let k =m+n-1;
    
    while(j >= 0){
        if(i >= 0 && arr1[i] > arr2[j]){
            arr1[k] = arr1[i];
            i--;
        }
        else{
            arr1[k] = arr2[j];
            j--
        }
        k--;
    }

    return arr1;
}

// console.log("Merge sorted array is", mergeSortArr([1,2,4,8], [3,4,6,9]));

// valid parenthesis

function validParenthesis(str){
    let map = {
        '}':'{',
        ')':'(',
        ']':'['
    }

    let stack = [];

    for(let i = 0; i < str.length; i++){
        if(str[i] == '{'|| str[i] == '[' || str[i] == '('){
            stack.push(str[i]);
        }
        else{
            if(stack.length == 0 || stack.pop() !== map[str[i]]){
                return false;
            }
        }
    }

    return stack.length == 0;
}

// console.log("valid parenthesis ", validParenthesis("{{}}[{}]"));


// find the error index if there

function validateParentheis(str){
    let map = {
        '}':'{',
        ')':'(',
        ']':'['
    }

    let stack = [];

    for(let i = 0; i < str.length; i++){
        if(str[i] == '{'|| str[i] == '[' || str[i] == '('){
            stack.push({ch : str[i], index:i});
        }
        else{
            if(stack.length === 0){
                return {isValid:false,errorIndex:i }
            }
            let top  = stack.pop();
            if(top.ch !== map[str[i]]){
                return {isValid:false,errorIndex:i }
            }
        }
    }
    if(stack.length > 0){
        return {isValid:false, errorIndex : stack[stack.length - 1].index}
    }

    return {isValid:true, errorIndex:-1}
}

// console.log("valid parenthesis ", validateParentheis("{{}}[{}]{"));


// valid anagram 

function validAnagram(str1,str2){
    if(str1.length !== str2.length) return false;

    let charArr = new Array(26).fill(0);

    for(char of str1){
        charArr[char.charCodeAt(0) - 97]++;
    }

    for(char of str2){
        let index = char.charCodeAt(0) - 97;
        if(charArr[index] == 0) return false;
        charArr[index]--;
    }

    return true;
}

// method 2 :: HashMap approach

function validateAnagram(str1,str2){

    let map = new Map();

    for(let char of str1){
        map.set(char, (map.get(char) | 0) + 1);
    }

    for(let char of str2){
        if(!map.has(char) || map.get(char) === 0){
            return false;
        }
        map.set(char, map.get(char)-1);
    }

    return true;
}

// console.log("valid anagram ", validateAnagram("str", "rtr"));


// longest substring without repeating characters

function maxNonRepeatSubString(str){
    let left = 0;
    let set = new Set();
    let maxLength = 0;
    let startIndex = 0;

    for(let right = 0; right < str.length;right++){
        
        while(set.has(str[right])){
            set.delete(str[left]);
            left++;
        }
        set.add(str[right]);

        if(maxLength < right-left+1){
            maxLength = right - left + 1;
            startIndex = left;
        }
        
    }

    return "Max length of non repetative sub string is "+maxLength+" no repeatative subString :: " + str.slice(startIndex, startIndex+maxLength);
}

console.log(maxNonRepeatSubString("abcabcdb"));


