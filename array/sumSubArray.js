function sumSubArray(arr){
    let m = arr.length;
    let n = arr[0].length;
    let count = 0;

    for(let i = 0; i < m; i++){
        for(let j = 0; j< n; j++){
            count += arr[i][j] * (m - i) * (i +1) * (j + 1) * (n - j); 
        }
    }

    return count;

    // return m +" "+ n;
}

let arr = [[1,2,3], [4,5,6]];
console.log("sum of all subarrays in the given 2D array ", sumSubArray(arr))