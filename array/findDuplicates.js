function findDuplicate(arr){
    let n = arr.length;
    let obj = {};
    for(let num of arr){
        obj[num] = (obj[num] || 0) + 1;
    }

    console.log(obj);

    let res = Object.keys(obj).filter((key) => obj[key] >= 2);
    console.log(res);
    return res.length == 0 ? true : false;
}


function indexOf(arr){
    let n = arr.length;

    for(let i = 0; i < n; i++){
        // console.log(arr.indexOf(arr[i])+" "+i+" index of"+( arr.indexOf(arr[i]) == i));
        if(arr.indexOf(arr[i]) !== i ) return true;
        
    }
    return false;
}

function setMethod(arr){
    let set = new Set();

    for(let num of arr){
        if(set.has(num)) return true;
        set.add(num);
    }
    return false;
}

// console.log("find duplicate", findDuplicate([1,2,3,4,2]));
// console.log("find duplicate", indexOf([1,2,3,4,2]));
console.log("find duplicate", setMethod([1,2,3,4]));

