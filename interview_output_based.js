function histogram(arr){
    return arr.reduce((acc,elem)=>{
        acc[elem] = (acc[elem] || 0) + 1;
        return acc;
    },{})
}

function printStars(arr){
    let obj = histogram(arr);

    console.log(Object.entries(obj));

    // Object.entries(obj).forEach(([key,value],index) => {
    //     obj[key] = '*'.repeat(value);
    // })

    for(const key in obj){
        console.log(`${key} : ${'*'.repeat(obj[key])}`)
    }

    // return obj;
}

// console.log("Histogram for the given arr", histogram([1,1,2,2,2,3]));
console.log("Histogram for the given arr", printStars([1,1,2,2,2,3]));
