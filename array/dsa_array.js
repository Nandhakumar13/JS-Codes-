// Array fundamentals and iteration
//  Find the largest element in an array.

function findMax(arr) {
  let max = -Infinity;

  for (const elem of arr) {
    if (max < elem) {
      max = elem;
    }
  }

  return max;
}

// console.log("=== find largest element present in the array", findMax([4,6,7,2,6,-2,0,1,9,13]));

function findMin(arr) {
  let min = Infinity;

  for (const elem of arr) {
    if (min > elem) {
      min = elem;
    }
  }

  return min;
}

// method 02
function findMin02(arr) {
  if (arr.length == 0) return "Empty array";

  return arr.reduce((min, curr) => {
    return min > curr ? curr : min;
  }, Infinity);
}

// 3. Find the second largest element.

function secondLargest(arr) {
  let fMax = arr[0];
  let sMax = null;

  for (const elem of arr) {
    if (elem > fMax) {
      sMax = fMax;
      fMax = elem;
    } else if (elem < fMax && sMax < elem) {
      sMax = elem;
    }
  }
  return sMax;
}

// console.log("=== find second largest element present in the array", secondLargest([5, 5,5,4]));

// 4 second smallest element

function secondSmallest(arr) {
  if (arr.length == 0) return "Empty Array";

  let fMin = arr[0];
  let sMin = Infinity;

  for (let elem of arr) {
    if (elem < fMin) {
      sMin = fMin;
      fMin = elem;
    } else if (elem > fMin && elem < sMin) {
      sMin = elem;
    }
  }

  return sMin;
}

// console.log("=== find second smallest element present in the array", secondSmallest([-10, -5, -20, -2]));

// 5. Reverse an array.

function reverseArr(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

function reverseArr02(arr) {
  let res = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }
  return res;
}

function reverseArr03(arr) {
  return arr.reverse();
}
// console.log("Reverse array", reverseArr([1,2,4,5,6]));
// console.log("Reverse array", reverseArr02([1,2,4,5,6]));
// console.log("Reverse array", reverseArr03([1,2,4,5,6]));

// let a = 10;
// let b = 10;

// a ^= b;
// b ^= a;
// a ^= b;

// console.log(a, b);

// swap two elements

// a = a + b;
// b = a - b;
// a = a - b;

// 6. Calculate the sum of array elements.

function sumOfArr(arr) {
  let sum = 0;
  for (const elem of arr) {
    sum += elem;
  }

  return sum;
}

function sumArr02(arr) {
  return arr.reduce((acc, elem) => {
    return acc + elem;
  }, 0);
}

// console.log("=== Sum of elements in array", sumOfArr([1,2,3,4]));
// console.log("=== Sum of elements in array", sumArr02([1,2,3,4]));

// 7. Calculate the average of array elements

function aveArr(arr) {
  let n = arr.length;
  if (n == 0) return "Empty array";

  let sum = 0;
  for (const elem of arr) {
    sum += elem;
  }
  return sum / n;
}

function aveArr02(arr) {
  let n = arr.length;
  if (n == 0) return "Empty array";
  let sum = arr.reduce((acc, elem) => acc + elem, 0);
  return sum / n;
}

// console.log("Average of array element", aveArr([1,2,3,4]))
// console.log("Average of array element", aveArr([10, 20, 30, 40, 50]))
// console.log("Average of array element", aveArr02([10, 20, 30, 40, 50]))

// 8. Count even and odd numbers.

function countEvenOddnum(arr) {
  let resObj = { odd: 0, even: 0 };
  // console.log(resObj.odd);

  for (let elem of arr) {
    if (elem % 2 == 0) {
      resObj.even += 1;
    } else {
      resObj.odd += 1;
    }
  }

  return resObj;
}

function countEvenOddnum02(arr) {
  return arr.reduce(
    (acc, elem) => {
      if (elem % 2 == 0) acc.even += 1;
      else acc.odd += 1;
      return acc;
    },
    { odd: 0, even: 0 },
  );
}

// console.log("Count odd and even numbers in the given array", countEvenOddnum([1, 2, 3, 4, 5, 6]));
// console.log("Count odd and even numbers in the given array", countEvenOddnum02([1, 2, 3, 4, 5, 6]));

// 9. Find the second largest element (revisit with edge cases)

function secondLargestElem(arr) {
  if (arr.length < 2) return null;
  let fMax = arr[0];
  let sMax = null;

  for (const elem of arr) {
    if (elem > fMax) {
      sMax = fMax;
      fMax = elem;
    } else if (elem < fMax && (elem > sMax || sMax === null)) {
      sMax = elem;
    }
  }

  return sMax;
}

// console.log("=== find second larget element in the array", secondLargestElem([10, 5, 20, 8, 20, 15]));

// 9. Count positive, negative and zero elements.

function countPosNeg(arr) {
  let obj = { positive: 0, negative: 0, zero: 0 };

  for (const elem of arr) {
    if (elem < 0) obj.negative += 1;
    else if (elem > 0) obj.positive += 1;
    else obj.zero += 1;
  }
  return obj;
}

function countPosNeg02(arr) {
  return arr.reduce(
    (acc, elem) => {
      if (typeof elem === 'number' || Number.isFinite(elem)) {
        if (elem < 0) acc.negative += 1;
        else if (elem > 0) acc.positive += 1;
        else acc.zero += 1;
      }

      return acc;
    },
    { positive: 0, negative: 0, zero: 0 },
  );
}

// console.log(
//   "Count positive, negative, zero",
//   countPosNeg([10, -5, 0, 20, -8, 0, 15, -3]),
// );
// console.log(
//   "Count positive, negative, zero",
//   countPosNeg02([10, -5, 0, 20, -8, 0, 15, -3]),
// );


// 10: Check whether an array is sorted.

function isSorted(arr){
    let n = arr.length;

    if(n <= 1) return true;

    for(let i = 1; i < n; i++){
        if(arr[i] < arr[i-1]){
            return false;
        }
    }
    return true
}

// console.log("Is array sorted in non-decreasing order", isSorted([1, 2, 3, 4, 5]))
// console.log("Is array sorted in non-decreasing order", isSorted([5, 4, 3, 2, 1]))


// 11. Remove duplicates from a sorted array.

function removeDuplicate(arr){
    let n = arr.length;
    let resArr = [];
    for(let i = 0; i<n;i++){
        if(resArr.indexOf(arr[i]) == -1 ){
            resArr.push(arr[i])
        }
    }

    return resArr;
}

function removeDuplicate02(arr){
    let resArr = [];
    for(const elem of arr){
        // console.log(resArr.length, resArr[resArr.length - 1] , elem,resArr[resArr.length - 1] !== elem);
        if(resArr.length === 0 || resArr[resArr.length - 1] !== elem){
            resArr.push(elem);
        }
    }

    return resArr;
}

function removeDuplicate03(arr){
    let n = arr.length;
    let i = 0;
    for(let j = 0; j < n; j++){
        if(arr[j] !== arr[j+1]){
            [arr[i],arr[j]] = [arr[j], arr[i]] ;
            i++;
        }
    }
    return arr.slice(0,i);
}


function removeDuplicate04(arr){
    let i = 0;
    let n = arr.length;

    for(let j = 1; j < n; j++){
        if(arr[j] !== arr[i]){
            i++;
            arr[i] = arr[j];
        }
    }

    // return `${i+1}, ${arr.slice(0,i+1)}`;
    return arr.slice(0, i+1);
}

// console.log("===  remove duplicates from the sorted array", removeDuplicate([1, 1, 2, 2, 3, 4, 4, 5]));
// console.log("===  remove duplicates from the sorted array", removeDuplicate02([1, 1, 2, 2, 3, 4, 4, 5]));
// console.log("===  remove duplicates from the sorted array", removeDuplicate03([1, 1, 2, 2, 3, 4, 4, 5]));
// console.log("===  remove duplicates from the sorted array", removeDuplicate04([1, 1, 2, 2, 3, 4, 4, 5]));


// Problem 12 — Find the frequency of each element.

function findFreq(arr){
    let map = new Map();

    for(const elem of arr){
        map.set(elem,(map.get(elem) || 0) + 1);
    }

    return map;
}

// console.log("Frequency of element in the array", findFreq([1,2,3,2,3,5,7,1]));


// 13. Find the index of a given element.

function findIndex(arr,k){
    if (arr.length == 0) return -1;

    for(const elem of arr){
        if(elem == k ) return arr.indexOf(k);
    }
    return -1;
}

function findIndex02(arr,k){
    // if(arr.length === 0) return -1;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === k) return i;
    }
    return -1;
}

// console.log("Find the index of given element in the array", findIndex([10, 20, 30, 40],30));
// console.log("Find the index of given element in the array", findIndex02([10, 20, 30, 40],30));
// console.log("Find the index of given element in the array", findIndex02([10, 20, 30, 40],50));
// console.log("Find the index of given element in the array", findIndex02([],50));


// 14. Linear search in an array.

function linearSearch(arr,k){
    let n = arr.length;

    for(let i =0; i < n; i++){
        if(arr[i] == k) return true
    }

    return false;
}


// console.log("Linear Search on array elements", linearSearch([1, 2, 3, 4, 5],3))
// console.log("Linear Search on array elements", linearSearch([1, 2, 3, 4, 5],9))

// 15. Find the missing number from 1 to N.

function findTheMissingNumber(arr){
    let n = arr.length;
    let o = n+1;
    let sum =  o * (o + 1) / 2;
    let loopSum = 0;

    for(let i = 0; i < n; i++){
        loopSum += arr[i];
    }

    return sum - loopSum;
}

function findMissingNumber02(arr){
    let n = arr.length + 1;
    let XORAll = 0;
    let XORArray = 0;

    for(let i = 1; i<=n;i++){
        XORAll ^= i;
    }
    for(const elem of arr){
        XORArray ^= elem;
    }

    return XORAll ^ XORArray;
}

// console.log("find missing number from an array 1 to N", findTheMissingNumber([1,3,4,5,6]));
// console.log("find missing number from an array 1 to N", findMissingNumber02([1,3,4,5,6]));


// 16. Move all zeroes to the end.

    function moveZero(arr){
        if(arr.length === 0) return 'Empty Array';
        let i = 0;
        let n = arr.length;

        for(let j =0 ;j < n; j++){
            if(arr[j] !== 0){
                [arr[i],arr[j]] = [arr[j],arr[i]];
                i++;
            }
        }
        return arr; 
    }

// console.log("Move zeros to the end of the array", moveZero([1,2,0,0,2,0,5,2,7,9]));


// 17. Move all negative numbers to one side.

function moveNegElem(arr){
    let n = arr.length;
    let i = 0;

    for(let j = 0; j < n; j++){
        if(arr[j] >= 0){
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }

    return arr;
}

// console.log("move neg elements from an array to the end", moveNegElem([-1,3,5,-4,-2,0,1]));


// 18. Rotate an array by one position.

function rotateArrByOnePosition(arr,k){
    let n = arr.length;
   if (n <= 1) return arr;

k = k % n;

if (k === 0) return arr;

   console.log(rotateArr(arr,0,n-1)) ;
    console.log(rotateArr(arr,0,k-1))
    console.log(rotateArr(arr,k,n-1))
    // console.log(rotateArr(arr,n,k-1));

    return arr;
}

function rotateArr(arr,l,r){
    while(l < r){
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++;
        r--;
    }
    return arr;
}

// console.log("Rotate array by one position", rotateArrByOnePosition([1, 2, 3, 4, 5],2));

// 20. Merge two sorted arrays.

function mergeSortedArr(arr1,arr2){
    let m = arr1.length;
    let n = arr2.length;

    let k = m+n -1;

    let i = m - 1;
    let j = n-1;

    while(i >= 0 && j >= 0){
        if(arr1[i] > arr2[j]){
            arr1[k] = arr1[i];
            i--;
        }else{
            arr1[k]= arr2[j];   
            j--;
        }
        k--
    }
    return arr1;
}


function mergeSortArray02(arr1, arr2){
    let i = 0;
    let j = 0;
    let res = [];

    while(i < arr1.length  && j < arr2.length){
        if(arr1[i] < arr2[j]){
            res.push(arr1[i]);
            i++;
        }else{
            res.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        res.push(arr1[i++]);
    }

    while( j < arr2.length){
        res.push(arr2[j++]);
    }

    return res;
}


// console.log("Merge sorted array", mergeSortedArr([1,3,5,7], [2,4,6,8]));
// console.log("Merge sorted array", mergeSortArray02([1,3,5,7], [2,4,6,8]));
// function mergeSortArr(arr){
//     if(arr.length <= 1) return arr;

//     let med = Math.floor(arr.length / 2);
//     let left = mergeSortArr(arr.slice(0,med));
//     let right = mergeSortArr(arr.slice(med));

//     return mergeArray(left,right);
// }

// function mergeArray(left,right){
//     let resArr = [];
//     let i = 0;
//     let j = 0;
//     while(left.length > i && right.length >j){
//         if(left[i] <= right[j]){
//             resArr.push(left[i]);
//             i++;
//         }else{
//             resArr.push(right[j]);
//             j++;
//         }
//     }

//     return resArr.concat(left.slice(i).concat(right.slice(j)));
// }


// console.log("Merge sort array", mergeSortArr([1, 3, 5, 7,2, 4, 6, 8]));
// console.log("Merger two sorted array", mergeArray([1, 3, 5, 7],[2, 4, 6, 8]));


// 21. Two Sum.

function twoSum(arr,k){
    let map = new Map();
    let res = [];
    for(let i = 0; i < arr.length; i++){
        let diff = k - arr[i];
        
        if(map.has(diff)){
            res.push([map.get(diff), i]);
        }

        map.set(arr[i],i);
    }

    console.log(map);
    return res;
}

// console.log("two sum problem", twoSum([3,2,4,5,6,9],9));


// sum of digits 

function sumDigits(num){
    let arr = num.toString().split('').map(elem => Number(elem));
    console.log("arr is", arr);
    
    return sumCal(arr,0);
}

function sumCal(arr,index,sum = 0){
    if(arr.length == index){
        // console.log(sum);
        return sum;
    } 
    sum += arr[index];
    return sumCal(arr, index+1,sum);
}

// console.log("sum of digits", sumDigits(192));


// 22. Find duplicate elements in an array.

function findDuplicateElem(arr){
    let hashMap = new Map();

    for(const elem of arr){
        hashMap.set(elem, (hashMap.get(elem) || 0)+1);
    }
    let res = [];
    for(const [key,value] of hashMap){
        if(value > 1){
            res.push(key);
        }
    }

    return res;
}

function findDuplicateElem02(arr){
    let seen = new Set();
    let duplicates = new Set();

    for(const elem of arr){
        if(seen.has(elem)){
            duplicates.add(elem);
        }else{
            seen.add(elem);
        }
    }

    return [...duplicates];
}
// console.log("find duplicate elements present in the given array", findDuplicateElem([1, 1, 1, 2, 2, 3]) );
// console.log("find duplicate elements present in the given array", findDuplicateElem02([1, 1, 1, 2, 2, 3]) );

function firstRepeatingElem(arr){
    let hashMap =  new Map();

    for(const elem of arr){
        hashMap.set(elem, (hashMap.get(elem) || 0 ) + 1);
    }

    for(const [key,value] of hashMap){
        if(value > 1) return key;
    }

    return -1;
}

function firstRepeatingElem02(arr){
    let seen = new Set();
    
    for(const elem of arr){
        if(seen.has(elem)){
            return elem;
        }
        seen.add(elem);
    }
}

// console.log("Find first repeating element", firstRepeatingElem([10, 5, 3, 4, 3, 5, 6]));
// console.log("Find first repeating element", firstRepeatingElem02([10, 5, 3, 4, 3, 5, 6]));


// 24. Find the first non-repeating element.

function firstNonRepeatingElem(arr){
    let hashMap = new Map();

    for(const elem of arr){
        hashMap.set(elem, (hashMap.get(elem) || 0) + 1);
    }

    for(const[key,value] of hashMap){
        if(value == 1) return key;
    }

    return -1;
}

// console.log("first non repeating element",firstNonRepeatingElem([10, 5, 3, 4, 3, 5, 6]));


// Problem 25: Find All Unique Elements in an Array
function findAllUniqueElem(arr){
    let hashMap = new Map();
    let res = [];

    for(const elem of arr){
        hashMap.set(elem,( hashMap.get(elem) || 0) + 1);
    }

    for(const elem of arr){
        if(hashMap.get(elem) == 1 ){
            res.push(elem);
        }
    }

    return res;
}

console.log("find all unique element", findAllUniqueElem([1, 2, 3, 2, 4, 5, 1]));