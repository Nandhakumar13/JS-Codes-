// Array fundamentals and iteration
// Find the largest element in an array.


function findMax(arr){
    let max = -Infinity;

    for(const elem of arr){
        if(max < elem){
            max = elem;
        }
    }

    return max;
}

console.log("=== find largest element present in the array", findMax([4,6,7,2,6,-2,0,1,9,13]));


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
