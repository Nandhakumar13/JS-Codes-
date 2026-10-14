function findSingleElement(arr){
    let n = arr.length;
    let res = arr[0];
    for(let i = 1; i < n; i++){
       res ^= arr[i];
    }

    return res;
}


console.log(findSingleElement([1,2,2,3,3,4,4,5,5]));