// remove duplicates from array


// method 01 - HashMap
// TC : O(n);
// SC : O(n);
function removeDuplicates(arr){
    let hashObj = {};
    for(let i =0; i < arr.length; i++){
        hashObj[arr[i]] = hashObj[arr[i]] ? hashObj[arr[i]]+1 : 1;
    }

    return Object.keys(hashObj).filter((key) => hashObj[key] > 1).map(Number);

}


// console.log("Hash Map Method",removeDuplicates([2,4,2,6,7,2,1,4]));



// method 02 - Brute force approach
// TC : O(n^2);
// SC : O(n^2);
function removeDuplicates02(arr){
    let res = [];
    for(let i =0; i< arr.length;i++){
        for(let j =i+1; j< arr.length;j++){
            if(arr[i] == arr[j] && !res.includes(arr[i])){
                res.push(arr[i]);
            }
        }
    }
    return res;
}

// console.log("Brute force approach",removeDuplicates02([2,4,2,6,7,2,1,4]));

// method 03 sort method
// TC : O(nlogn);
// SC : O(1);

function removerDup03(arr){
    let sort = arr.sort((a,b) => a- b);
    let result = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j] && !result.includes(arr[i])){
                result.push(arr[i]);
            }
        }
    }
    return result;
}

console.log("method 03: Sort - Scan",removerDup03([2,4,2,6,7,2,1,4]) );


// method 04 : optimized solution 
// TC : O(n);
// SC : O(1);

