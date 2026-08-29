// find max sum subarray in the given array

function maxSumSubArray(arr){
    let n = arr.length;
    let currMax = arr[0];
    let max = arr[0];

    for(let i = 1; i < n; i++ ){
        currMax = Math.max(currMax+arr[i], arr[i]);
        max = Math.max(max,currMax);
    }

    return max;
}

console.log("Max sum subarray in the given array is ", maxSumSubArray([1, 2, 3, 4, -10]));