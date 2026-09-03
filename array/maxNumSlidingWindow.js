function maxSumSlidingWindow(arr,k){
    let n = arr.length;

    let res = [];
    let max = arr[0];
    for(let i = 0; i< n-k+1; i++){
        
        for(let j = i; j < i+k; j++){
            if(max < arr[j]) max = arr[j];
               // max = Math.max(max, arr[j]);
               
        }
        res.push(max);
        
    }
    return res;
}


console.log("Max num from the each sliding windows "+ maxSumSlidingWindow([2,1,3,2,4,7,5],3));
