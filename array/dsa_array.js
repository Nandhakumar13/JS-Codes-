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

console.log("=== find second largest element present in the array", secondLargest([5, 5,5,4]));


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

console.log("=== find second smallest element present in the array", secondSmallest([-10, -5, -20, -2]));