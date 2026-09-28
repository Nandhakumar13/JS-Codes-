function sortArr(arr){
    let n = arr.length;
    quickSort(arr, 0, n-1);
    return arr;
}

function partition(arr,s,e){
    let p = arr[s];
    let left = s+1;
    let right = e ;

    while(left <= right){
        if(arr[left] <= p){
            left++;
        }
        else if(p < arr[right]){
            right--;
        }else{
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    [arr[right], arr[s]] = [arr[s],arr[right]];
    return right;
}

function quickSort(arr,s,e){

    if(s >= e) return;
    let p = partition(arr,s,e);
    quickSort(arr,s,p-1);
    quickSort(arr,p+1,e);
}


console.log("sort the array using quick sort method", sortArr([1,4,2,7,9,3,9,5]));
