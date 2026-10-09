// 🔹 Arrays

// 1️⃣ Reverse an array
function reverseArray(arr){
    if(arr.length == 1) return arr;
    let i = 0;
    let j = arr.length - 1;

    while( i < j){
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
    return arr;
}

// console.log("reverse an array ", reverseArray([1,2,3,4,5]));
// 2️⃣ Find maximum number?
function findMaxNumber(arr){
    let max = -Infinity;

    for(let num of arr){
        if(num > max){
            max = num;
        }
    }

    return max;
}

// console.log("Maximum number in the given array ", findMaxNumber([2,4,7,41,3,6,9]));

// 3️⃣ Calculate array sum
function sumArray(arr){
    let sum = 0;
    for(let num of arr){
        sum+= num
    }
    return sum;
}

// console.log("Sum of an array ", sumArray([1,2,3,4,5]));

// 4️⃣ Remove duplicates
function removeDuplicates(arr){
    let set = [...new Set(arr)];
    return set;
}

function removeDuplicates02(arr){
    let resArr = [];

    for(let i = 0; i< arr.length;i++){
        if(arr.indexOf(arr[i]) == i){
            resArr.push(arr[i]);
        }
    }
    return resArr;
}

// console.log("Remove duplicates from an array ", removeDuplicates([1,2,1,3,4,3,5,6]));
// console.log("Remove duplicates from an array method 02", removeDuplicates02([1,2,1,3,4,3,5,6]));

// 5️⃣ Custom sorting algorithm

function sortArray(arr){
    if(arr.length <= 1) return arr;
    let med = Math.floor(arr.length /2);
    let leftArr = sortArray(arr.slice(0,med));
    let rightArr = sortArray(arr.slice(med));
    return mergeArray(leftArr,rightArr);
}

function mergeArray(leftArr,rightArr){
    let resArr = [];
    let n = leftArr.length;

    let i = 0;
    let j = 0;
   

    while(i < leftArr.length && j < rightArr.length){
        if(leftArr[i] <= rightArr[j]){
            resArr.push(leftArr[i++]);
        }else{
            resArr.push(rightArr[j++]);
        }
    }
    while(i < leftArr.length){
        resArr.push(leftArr[i++]);
    }

    while(j < rightArr.length){
        resArr.push(rightArr[j++]);
    }
    // let j = leftArr.length -1;

    return resArr;


}

// console.log(" custom sorting of array ", sortArray([2,6,8,2,4,5,7,0]));

// 6️⃣ Find intersection of two arrays
// 7️⃣ Rotate array

function rotateArrLeft(arr,k){
    let n = arr.length;
    k = k % n;

    reverse(arr,0,k-1);
    reverse(arr,k,n-1);
    reverse(arr,0,n-1);
    return arr;
}

function rotateArrRight(arr,k){
    let n = arr.length;
    k = k % n;

    reverse(arr,0,n-1);
    reverse(arr,0,k-1);
    reverse(arr,k,n-1);
    return arr;
}

function reverse(arr,left,right){
    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}

console.log("rotate array by left", rotateArrLeft([1,2,3,4,5,6], 2));
console.log("rotate array right", rotateArrRight([1,2,3,4,5,6], 2));


// 8️⃣ Largest contiguous subarray sum

function largestContigousSubarraySum(arr){
    let currSum = arr[0];
    let maxSum = arr[0];

    for(let i = 0; i < arr.length; i++){
        currSum = Math.max(currSum,currSum+arr[i]);
        maxSum = Math.max(currSum, maxSum);
    }

    return maxSum;
}

// 9️⃣ Check array palindrome
// 🔟 Shuffle an array