function flatArray(arr){
    let returnArr = [];

    for(let elem of arr){
        if(Array.isArray(elem)){
            returnArr = returnArr.concat(flatArray(elem));
        }
        else{
            returnArr.push(elem);
        }
    }

    return returnArr;
}

console.log("flat the array ", flatArray([1,2,[3,[4,5,[6],[7]]],8]));
