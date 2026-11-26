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
      if (typeof elem === "number" || Number.isFinite(elem)) {
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

function isSorted(arr) {
  let n = arr.length;

  if (n <= 1) return true;

  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

// console.log("Is array sorted in non-decreasing order", isSorted([1, 2, 3, 4, 5]))
// console.log("Is array sorted in non-decreasing order", isSorted([5, 4, 3, 2, 1]))

// 11. Remove duplicates from a sorted array.

function removeDuplicate(arr) {
  let n = arr.length;
  let resArr = [];
  for (let i = 0; i < n; i++) {
    if (resArr.indexOf(arr[i]) == -1) {
      resArr.push(arr[i]);
    }
  }

  return resArr;
}

function removeDuplicate02(arr) {
  let resArr = [];
  for (const elem of arr) {
    // console.log(resArr.length, resArr[resArr.length - 1] , elem,resArr[resArr.length - 1] !== elem);
    if (resArr.length === 0 || resArr[resArr.length - 1] !== elem) {
      resArr.push(elem);
    }
  }

  return resArr;
}

function removeDuplicate03(arr) {
  let n = arr.length;
  let i = 0;
  for (let j = 0; j < n; j++) {
    if (arr[j] !== arr[j + 1]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  return arr.slice(0, i);
}

function removeDuplicate04(arr) {
  let i = 0;
  let n = arr.length;

  for (let j = 1; j < n; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }

  // return `${i+1}, ${arr.slice(0,i+1)}`;
  return arr.slice(0, i + 1);
}

// console.log("===  remove duplicates from the sorted array", removeDuplicate([1, 1, 2, 2, 3, 4, 4, 5]));
// console.log("===  remove duplicates from the sorted array", removeDuplicate02([1, 1, 2, 2, 3, 4, 4, 5]));
// console.log("===  remove duplicates from the sorted array", removeDuplicate03([1, 1, 2, 2, 3, 4, 4, 5]));
// console.log("===  remove duplicates from the sorted array", removeDuplicate04([1, 1, 2, 2, 3, 4, 4, 5]));

// Problem 12 — Find the frequency of each element.

function findFreq(arr) {
  let map = new Map();

  for (const elem of arr) {
    map.set(elem, (map.get(elem) || 0) + 1);
  }

  return map;
}

// console.log("Frequency of element in the array", findFreq([1,2,3,2,3,5,7,1]));

// 13. Find the index of a given element.

function findIndex(arr, k) {
  if (arr.length == 0) return -1;

  for (const elem of arr) {
    if (elem == k) return arr.indexOf(k);
  }
  return -1;
}

function findIndex02(arr, k) {
  // if(arr.length === 0) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) return i;
  }
  return -1;
}

// console.log("Find the index of given element in the array", findIndex([10, 20, 30, 40],30));
// console.log("Find the index of given element in the array", findIndex02([10, 20, 30, 40],30));
// console.log("Find the index of given element in the array", findIndex02([10, 20, 30, 40],50));
// console.log("Find the index of given element in the array", findIndex02([],50));

// 14. Linear search in an array.

function linearSearch(arr, k) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] == k) return true;
  }

  return false;
}

// console.log("Linear Search on array elements", linearSearch([1, 2, 3, 4, 5],3))
// console.log("Linear Search on array elements", linearSearch([1, 2, 3, 4, 5],9))

// 15. Find the missing number from 1 to N.

function findTheMissingNumber(arr) {
  let n = arr.length;
  let o = n + 1;
  let sum = (o * (o + 1)) / 2;
  let loopSum = 0;

  for (let i = 0; i < n; i++) {
    loopSum += arr[i];
  }

  return sum - loopSum;
}

function findMissingNumber02(arr) {
  let n = arr.length + 1;
  let XORAll = 0;
  let XORArray = 0;

  for (let i = 1; i <= n; i++) {
    XORAll ^= i;
  }
  for (const elem of arr) {
    XORArray ^= elem;
  }

  return XORAll ^ XORArray;
}

// console.log("find missing number from an array 1 to N", findTheMissingNumber([1,3,4,5,6]));
// console.log("find missing number from an array 1 to N", findMissingNumber02([1,3,4,5,6]));

// 16. Move all zeroes to the end.

function moveZero(arr) {
  if (arr.length === 0) return "Empty Array";
  let i = 0;
  let n = arr.length;

  for (let j = 0; j < n; j++) {
    if (arr[j] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  return arr;
}

// console.log("Move zeros to the end of the array", moveZero([1,2,0,0,2,0,5,2,7,9]));

// 17. Move all negative numbers to one side.

function moveNegElem(arr) {
  let n = arr.length;
  let i = 0;

  for (let j = 0; j < n; j++) {
    if (arr[j] >= 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  return arr;
}

// console.log("move neg elements from an array to the end", moveNegElem([-1,3,5,-4,-2,0,1]));

// 18. Rotate an array by one position.

function rotateArrByOnePosition(arr, k) {
  let n = arr.length;
  if (n <= 1) return arr;

  k = k % n;

  if (k === 0) return arr;

  console.log(rotateArr(arr, 0, n - 1));
  console.log(rotateArr(arr, 0, k - 1));
  console.log(rotateArr(arr, k, n - 1));
  // console.log(rotateArr(arr,n,k-1));

  return arr;
}

function rotateArr(arr, l, r) {
  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r--;
  }
  return arr;
}

// console.log("Rotate array by one position", rotateArrByOnePosition([1, 2, 3, 4, 5],2));

// 20. Merge two sorted arrays.

function mergeSortedArr(arr1, arr2) {
  let m = arr1.length;
  let n = arr2.length;

  let k = m + n - 1;

  let i = m - 1;
  let j = n - 1;

  while (i >= 0 && j >= 0) {
    if (arr1[i] > arr2[j]) {
      arr1[k] = arr1[i];
      i--;
    } else {
      arr1[k] = arr2[j];
      j--;
    }
    k--;
  }
  return arr1;
}

function mergeSortArray02(arr1, arr2) {
  let i = 0;
  let j = 0;
  let res = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i++]);
  }

  while (j < arr2.length) {
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

function twoSum(arr, k) {
  let map = new Map();
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let diff = k - arr[i];

    if (map.has(diff)) {
      res.push([map.get(diff), i]);
    }

    map.set(arr[i], i);
  }

  console.log(map);
  return res;
}

// console.log("two sum problem", twoSum([3,2,4,5,6,9],9));

// sum of digits

function sumDigits(num) {
  let arr = num
    .toString()
    .split("")
    .map((elem) => Number(elem));
  console.log("arr is", arr);

  return sumCal(arr, 0);
}

function sumCal(arr, index, sum = 0) {
  if (arr.length == index) {
    // console.log(sum);
    return sum;
  }
  sum += arr[index];
  return sumCal(arr, index + 1, sum);
}

// console.log("sum of digits", sumDigits(192));

// 22. Find duplicate elements in an array.

function findDuplicateElem(arr) {
  let hashMap = new Map();

  for (const elem of arr) {
    hashMap.set(elem, (hashMap.get(elem) || 0) + 1);
  }
  let res = [];
  for (const [key, value] of hashMap) {
    if (value > 1) {
      res.push(key);
    }
  }

  return res;
}

function findDuplicateElem02(arr) {
  let seen = new Set();
  let duplicates = new Set();

  for (const elem of arr) {
    if (seen.has(elem)) {
      duplicates.add(elem);
    } else {
      seen.add(elem);
    }
  }

  return [...duplicates];
}
// console.log("find duplicate elements present in the given array", findDuplicateElem([1, 1, 1, 2, 2, 3]) );
// console.log("find duplicate elements present in the given array", findDuplicateElem02([1, 1, 1, 2, 2, 3]) );

function firstRepeatingElem(arr) {
  let hashMap = new Map();

  for (const elem of arr) {
    hashMap.set(elem, (hashMap.get(elem) || 0) + 1);
  }

  for (const [key, value] of hashMap) {
    if (value > 1) return key;
  }

  return -1;
}

function firstRepeatingElem02(arr) {
  let seen = new Set();

  for (const elem of arr) {
    if (seen.has(elem)) {
      return elem;
    }
    seen.add(elem);
  }
}

// console.log("Find first repeating element", firstRepeatingElem([10, 5, 3, 4, 3, 5, 6]));
// console.log("Find first repeating element", firstRepeatingElem02([10, 5, 3, 4, 3, 5, 6]));

// 24. Find the first non-repeating element.

function firstNonRepeatingElem(arr) {
  let hashMap = new Map();

  for (const elem of arr) {
    hashMap.set(elem, (hashMap.get(elem) || 0) + 1);
  }

  for (const [key, value] of hashMap) {
    if (value == 1) return key;
  }

  return -1;
}

// console.log("first non repeating element",firstNonRepeatingElem([10, 5, 3, 4, 3, 5, 6]));

// Problem 25: Find All Unique Elements in an Array
function findAllUniqueElem(arr) {
  let hashMap = new Map();
  let res = [];

  for (const elem of arr) {
    hashMap.set(elem, (hashMap.get(elem) || 0) + 1);
  }

  for (const elem of arr) {
    if (hashMap.get(elem) == 1) {
      res.push(elem);
    }
  }

  return res;
}

// console.log("find all unique element", findAllUniqueElem([1, 2, 3, 2, 4, 5, 1]));

// 31. Find the most frequent element.

function mostFreqElem(arr) {
  let map = new Map();
  for (const elem of arr) {
    map.set(elem, (map.get(elem) || 0) + 1);
  }

  let max = 0;
  let maxElem = -1;

  for (const elem of arr) {
    console.log(map.get(elem), elem);

    if (map.get(elem) >= max) {
      max = map.get(elem);
      maxElem = elem;
    }
  }

  return maxElem;
}

// console.log("Most frequent element present in the arr", mostFreqElem([1,2,4,2,1,4,6,2,4,1,1]));

// next palindrome number

function nextPalindromeNum(num) {
  let n = num + 1;

  while (true) {
    let str = String(n);
    let revStr = str.split("").reverse().join("");

    if (str === revStr) {
      return n;
    }

    n++;
  }
}

// console.log("Next nearest palindrome number", nextPalindromeNum(121));
// console.log("Next nearest palindrome number", nextPalindromeNum(1221));

// 26. Find the intersection of two arrays
function findIntersection(arr1, arr2) {
  let set = new Set();
  for (const elem of arr1) {
    if (arr2.indexOf(elem) !== -1) {
      set.add(elem);
    }
  }
  return [...set];
}

function findIntersection02(arr1, arr2) {
  let lookUpSet = new Set(arr2);
  let res = new Set();

  for (const elem of arr1) {
    if (lookUpSet.has(elem)) {
      res.add(elem);
    }
  }

  return [...res];
}

// console.log("Intersection of two elements",findIntersection([4, 5, 6, 5, 7], [5, 5, 4, 8]) )
// console.log("Intersection of two elements",findIntersection02([4, 5, 6, 5, 7], [8]) )

// 27. Find the union of two arrays.

function findUnionOfTwoArr(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

// console.log("Union of two arrays", findUnionOfTwoArr([2,2,4,3],[1,4,3,2]));

// 28. Find the difference between two arrays.

function findTheDiff(arr1, arr2) {
  let res = new Set();
  let lookUpSet = new Set(arr2);
  for (const elem of arr1) {
    if (!lookUpSet.has(elem)) {
      res.add(elem);
    }
  }

  return [...res];
}

// console.log("find diff of two element", findTheDiff([2,2,4,3,5],[1,4,3,2]));

// 32. Find the least frequent element.

function leastFreqElem(arr) {
  let hashMap = new Map();

  for (const elem of arr) {
    hashMap.set(elem, (hashMap.get(elem) || 0) + 1);
  }

  let min = 1;
  for (const elem of arr) {
    console.log(hashMap.get(elem), elem);
    if (min >= hashMap.get(elem)) {
      return elem;
    }
  }
}

// console.log("Least frequent element ", leastFreqElem([1, 2, 2, 3, 3, 3, 4]))

// 33. Find the longest consecutive sequence.

function longConSeq(arr) {
  if (arr.length === 0) return 0;
  let sortArr = [...arr].sort((a, b) => a - b);
  let modArr = [...new Set(sortArr)];
  console.log(modArr, arr);
  let count = 1;
  let maxCount = 1;
  for (let i = 0; i < modArr.length; i++) {
    // console.log(modArr[i],modArr[i+1], modArr[i+1] - 1,i);

    if (modArr[i + 1] !== undefined && modArr[i + 1] - modArr[i] == 1) {
      count++;
      maxCount = Math.max(count, maxCount);
    } else {
      count = 1;
    }
  }

  return maxCount;
}

function longConSeq02(arr) {
  if (arr.length === 0) return 0;

  let setArr = new Set(arr);
  let maxCount = 0;

  for (const num of setArr) {
    if (!setArr.has(num - 1)) {
      let currNum = num;
      let count = 1;

      while (setArr.has(currNum + 1)) {
        currNum++;
        count++;
      }
      maxCount = Math.max(count, maxCount);
    }
  }

  return maxCount;
}

// console.log("Longest Consequtive Sequence", longConSeq([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// console.log("Longest Consequtive Sequence", longConSeq02([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

// 34. Check whether two arrays are equal.

function areArraysEqual(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;

  if (n1 !== n2) return false;

  let hashMap = new Map();

  for (const elem of arr1) {
    hashMap.set(elem, (hashMap.get(elem) || 0) + 1);
  }

  for (const elem of arr2) {
    if (!hashMap.get(elem)) return false;
    if (hashMap.get(elem)) {
      hashMap.set(elem, hashMap.get(elem) - 1);
    }
  }

  return true;
}

// console.log("Check arrays are equal", areArraysEqual([1, 2, 3],[3, 2, 1]));
// console.log("Check arrays are equal", areArraysEqual([1, 2, 3, 3]	,[1, 2, 2, 3]));

// 35. Find pairs with a given sum.\

function findPairSum(arr, k) {
  let hashMap = new Map();
  let res = [];

  for (const elem of arr) {
    let diff = k - elem;
    if (hashMap.has(diff)) {
      res.push([diff, hashMap.get(diff)]);
    }
    hashMap.set(elem, diff);
  }
  return res;
}

// console.log("Find the pair of sum", findPairSum([1, 2, 3, 4, 5, 6],7));

// 36. Find pairs with a given difference.

function findPairDiff(arr, k) {
  let hashMap = new Map();
  let res = [];

  for (const elem of arr) {
    let diff = k + elem;

    if (hashMap.has(diff)) {
      res.push([diff, hashMap.get(diff)]);
    }

    hashMap.set(elem, diff);
  }

  return res;
}

// console.log("Diff pair of elem", findPairDiff([1, 5, 3, 4, 2],2))

// 37. Find the single number when all other elements appear twice.
function findSingleNum(arr) {
  let xorElem = 0;

  for (const elem of arr) {
    xorElem ^= elem;
  }

  return xorElem;
}

// console.log("Find the single number when all other elements appear twice", findSingleNum([-1, 2, -1, 3, 2]));

// 38. Find two numbers appearing once while others appear twice.

function appearTwice(arr) {
  let hashMap = new Map();

  for (const elem of arr) {
    hashMap.set(elem, (hashMap.get(elem) || 0) + 1);
  }
  let res = [];
  // for(const elem of arr){
  //     if(hashMap.get(elem) == 1) res.push(elem);
  // }

  for (const [elem, freq] of hashMap) {
    if (freq == 1) res.push(elem);
  }

  return res;
}

function appearTwice02(arr) {
  let xorElem = 0;
  let setBit = 0;
  for (const elem of arr) {
    xorElem ^= elem;
    setBit = xorElem & -xorElem;
    if ((elem & setBit) !== 0) {
      console.log("not zero", elem);
    }

    if ((elem & setBit) === 0) {
      console.log("zero", elem);
    }
  }
}
// console.log("Elements appear once in the array", appearTwice([10, 20, 30, 10, 20, 40]));
// console.log("Elements appear once in the array", appearTwice02([10, 20, 30, 10, 20, 40]));

//Problem 39: Find the Missing and Repeating Numbers

function findMissAndRepeatNum(arr) {
  let res = [];

  for (let i = 0; i < arr.length - 1; i++) {
    // console.log(arr[i],arr[i]+1,arr[i+1]);
    if (arr[i] + 1 !== arr[i + 1]) {
      res.push(arr[i], arr[i] + 1);
      i++;
    }
  }

  return res;
}

function findMissAndRepeatNum02(arr) {
  let n = arr.length;
  let hashMap = new Map();
  let res = [];

  for (const elem of arr) {
    hashMap.set(elem, (hashMap.get(elem) || 0) + 1);
  }
  for (let i = 1; i < n; i++) {
    if (
      hashMap.get(i) == 2 ||
      hashMap.get(i) == 0 ||
      hashMap.get(i) == undefined
    )
      res.push(i);
  }

  return res;
}

// console.log("find the missing and repeating number", findMissAndRepeatNum([1,2,2,4,5]));
// console.log("find the missing and repeating number", findMissAndRepeatNum02([1,2,2,4,5]));

// 40. Count distinct elements in every window of size K.

function countDistinctElem(arr, k) {
  let res = [];
  let n = arr.length;
  for (let i = 0; i <= n - k; i++) {
    let set = new Set();
    for (let j = i; j < i + k; j++) {
      set.add(arr[j]);
    }
    res.push([...set].length);
  }
  return res;
}

function countDistinctElem02(arr, k) {
  let res = [];
  let n = arr.length;
  let map = new Map();
  for (let i = 0; i < k; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  res.push(map.size);

  for (let i = k; i < n; i++) {
    let outElem = arr[i - k];
    let inElem = arr[i];
    map.set(outElem, map.get(outElem) - 1);
    if (map.get(outElem) == 0) map.delete(outElem);
    map.set(inElem, (map.get(inElem) || 0) + 1);
    res.push(map.size);
  }
  return res;
}
// console.log(countDistinctElem([1, 2, 1, 3, 4, 2, 3],4));
// console.log(countDistinctElem02([1, 2, 1, 3, 4, 2, 3],4));

// Problem 41: Pair with Target Sum in a Sorted Array

function pairWithTargetSum(arr, k) {
  let res = [];
  let hashMap = new Map();
  for (const elem of arr) {
    let diff = k - elem;

    if (hashMap.has(diff)) {
      res.push([diff, hashMap.get(diff)]);
    }

    hashMap.set(elem, diff);
  }

  return res;
}

function pairWithTargetSum02(arr, k) {
  let left = 0;
  let right = arr.length - 1;
  let res = [];

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == k) {
      res.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }

  return res;
}

// console.log("pair with target sum", pairWithTargetSum([1, 2, 4, 6, 8, 9],10));
// console.log("pair with target sum", pairWithTargetSum02([1, 2, 4, 6, 8, 9],10));
// console.log("pair with target sum", pairWithTargetSum02([1, 2, 5, 4],6));

// 42. Three Sum.

function threeSum(arr, k) {
  let sortArr = [...arr].sort((a, b) => a - b);

  console.log(arr, sortArr);

  let n = sortArr.length;
  let res = [];

  for (let i = 0; i < n-2; i++) {
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      if (i > 0 && sortArr[i] === sortArr[i - 1]) {
        continue;
      }
      if (sortArr[left] + sortArr[right] + sortArr[i] === k) {
        res.push([sortArr[left], sortArr[right], sortArr[i]]);
        left++;
        right--;
        while (left < right && sortArr[left] === sortArr[left - 1]) {
          left++;
        }
        while (left < right && sortArr[right] === sortArr[right + 1]) {
          right--;
        }
      } else if (sortArr[left] + sortArr[right] + sortArr[i] < k) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
}

// console.log("Three sum problem", threeSum([0, 1, 1, 2, -2], 0));


// 44. Container With Most Water.


function containerWithMostWater(arr){
  let maxArea = 0;
  let left = 0;
  let right = arr.length - 1;

  while(left < right){
    let area = Math.min(arr[left], arr[right]) * (right - left);
    maxArea = Math.max(area,maxArea);

   

    if(arr[left] == arr[right]){
      left++;
      right--;
    }else if(arr[left] < arr[right]){
      left++;
    }else{
      right--;
    }
    
  }

  return maxArea;
}


// console.log("container with most water", containerWithMostWater([1,8,6,2,5,4,8,3,7]));


// 45. Trapping Rain Water.

function rainTrap(arr){
  let n = arr.length;
  let preArr = [];
  let suffarr = [];

  preArr[0] = arr[0];
  suffarr[n-1] = arr[n-1]

  for(let i = 1;i < n; i++){
     preArr[i] = Math.max(preArr[i-1], arr[i]) ;
  }

  for(let i = n-2; i >=0; i--){
    suffarr[i] = Math.max(suffarr[i+1], arr[i]);
  }

  let count = 0;

  for(let i = 0; i < n; i++){
    count += Math.min(preArr[i], suffarr[i]) - arr[i];
  }

  console.log(preArr,suffarr,count);
}


function rainWaterTrap02(arr){
  let left = 0;
  let right = arr.length - 1;

  let leftMax = 0;
  let rightMax = 0;

  let water = 0;

  while(left < right){
    if(arr[left] < arr[right]){
       leftMax = Math.max(leftMax, arr[left]);
       water += leftMax - arr[left];
       left++;
    }else{
      rightMax = Math.max(rightMax, arr[right]);
       water += rightMax - arr[right];
       right--;
    }
  }
  return water;
}

console.log("Rain trap problem", rainTrap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log("Rain trap problem 02", rainWaterTrap02([0,1,0,2,1,0,1,3,2,1,2,1]));


// 46. Remove duplicates from a sorted array in-place.

function removeDuplicateSortArr(arr){
  let i = 0;
  for(let j = 0; j < arr.length; j++){
    if(arr[j] !== arr[j+1]){
      [arr[i],arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  console.log(arr.splice(0,i));
  return arr.splice(0,i);

}

// console.log("remove duplicate from the sorted array", removeDuplicateSortArr([1,1,2]));
