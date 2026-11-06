// Array fundamentals and iteration
//  Find the largest element in an array.


function findMax(arr){
    let max = -Infinity;

    for(const elem of arr){
        if(max < elem){
            max = elem;
        }
    }

    return max;
}

// console.log("=== find largest element present in the array", findMax([4,6,7,2,6,-2,0,1,9,13]));


function findMin(arr){
    let min = Infinity;

    for(const elem of arr){
        if(min > elem){
            min = elem;
        }
    }

    return min;
}

// method 02 
function findMin02(arr){
    if(arr.length == 0) return 'Empty array';

   return arr.reduce((min,curr)=>{
        return  min > curr ? curr : min;
    },Infinity)
}

// 3. Find the second largest element.

function secondLargest(arr){
    let fMax = arr[0];
    let sMax = null;

    for(const elem of arr){
        if(elem > fMax){
            sMax = fMax;
            fMax = elem;
        }
        
       else if(elem < fMax && sMax < elem){
            sMax = elem;
        }
    }
    return sMax;
}

// console.log("=== find second largest element present in the array", secondLargest([5, 5,5,4]));


// 4 second smallest element 

function secondSmallest(arr){
    if(arr.length == 0) return 'Empty Array';

    let fMin = arr[0];
    let sMin = Infinity;

    for(let elem of arr){
        if(elem < fMin){
            sMin = fMin;
            fMin = elem;
        }else if(elem > fMin && elem < sMin){
            sMin = elem;
        }
    }

    return sMin;
}

// console.log("=== find second smallest element present in the array", secondSmallest([-10, -5, -20, -2]));


// 5. Reverse an array.

function reverseArr(arr){
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        [arr[left],arr[right]] = [arr[right],arr[left]];
        left++;
        right--;
    }
    return arr;
}

function reverseArr02(arr){
    let res = [];

    for(let i = arr.length - 1; i>=0; i--){
        res.push(arr[i]);
    }
    return res;
}

function reverseArr03(arr){
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

function sumOfArr(arr){
    let sum = 0;
    for(const elem of arr){
        sum += elem;
    }

    return sum;
}

function sumArr02(arr){
    return arr.reduce((acc,elem)=>{
        return acc+elem;
    }, 0)
}

// console.log("=== Sum of elements in array", sumOfArr([1,2,3,4]));
// console.log("=== Sum of elements in array", sumArr02([1,2,3,4]));

// 7. Calculate the average of array elements

function aveArr(arr){
    let n = arr.length;
    if(n == 0) return 'Empty array';

    let sum = 0;
    for(const elem of arr){
        sum+= elem;
    }
    return sum / n;
}

function aveArr02(arr){
    let n = arr.length;
    if(n == 0) return 'Empty array';
    let sum = arr.reduce((acc,elem) => (acc+elem), 0);
    return sum / n;
}

console.log("Average of array element", aveArr([1,2,3,4]))
console.log("Average of array element", aveArr([10, 20, 30, 40, 50]))
console.log("Average of array element", aveArr02([10, 20, 30, 40, 50]))