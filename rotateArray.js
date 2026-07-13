// rotate array

function rotateArray(arr,k){

    let n = arr.length;
    k = k % n


    // rotate array - left
    // reverseArr(arr,0,n-1);
    // reverseArr(arr,0,k-1);
    // reverseArr(arr,k,n-1);

    // rotate array - right 
    reverseArr(arr,n-k,n-1);
    reverseArr(arr,0,n-k-1);
    reverseArr(arr,0,n-1);

    return arr;
}

function reverseArr(arr,left,right){
    while(left <  right){
            [arr[left],arr[right]] = [arr[right],arr[left]];
            left++;
            right--;
        }
        return arr;
}

let arr = [1,2,6,7,8,9];

console.log("rotate an array", rotateArray(arr,4));