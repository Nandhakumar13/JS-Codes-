function addOne(arr){
    let n = arr.length;
    
    for(let i = n-1; i >=0; i--){
        if(arr[i] < 9){
            arr[i]++;
            return arr.join("");
        }else{
            arr[i] = 0;
        }
    }

    let resArr = Array(n+1).fill(0);
    resArr[0] = 1;
    return resArr.join("");
}

console.log("Add one to the given array ",  addOne([1,2,3]));
console.log("Add one to the given array ",  addOne([9,9,9]));