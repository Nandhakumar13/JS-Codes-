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

// console.log("flat the array ", flatArray([1,2,[3,[4,5,[6],[7]]],8]));


function flatObject(obj, parentKey='', result={}){
    for(const key in obj){
        const newkey = parentKey ? `${parentKey}.${key}` : key;

        if(typeof obj[key] == 'object' && obj[key] !== null && !Array.isArray(obj[key])){
            flatObject(obj[key],newkey,result)
        }
        else{
            result[newkey] = obj[key]
        }
    }

    return result;
}

let obj = {
    name:"nandha",
    address:{
        city:'salem',
        state:"Tamilnadu"
    },
    id:'muruga'
}

console.log("Flat the object", flatObject(obj));
