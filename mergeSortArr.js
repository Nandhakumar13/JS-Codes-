function mergeSort(arr){
    if(arr.length <= 1) return arr;

    let med = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0,med));
    let right = mergeSort(arr.slice(med));

    return mergeArr(left,right);
}

function mergeArr(left,right){
    let i = 0;
    let j = 0;
    let resArr = [];

    while(i < left.length && j < right.length){
        if(left[i] < right[j] ){
            resArr.push(left[i]);
            i++;
        }
        else{
            resArr.push(right[j]);
            j++
        }
    }
    return resArr.concat(left.slice(i).concat(right.slice(j)));
    
}


console.log("Merge sort :: Array sorting method", mergeSort([3,6,2,1,8,0,4]));