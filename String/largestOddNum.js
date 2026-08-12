function largestOddNum(str){
    for(let i = str.length - 1; i >= 0; i--){
        if(parseInt(str[i]) % 2 === 1){
            return str.substring(0,i+1);
        }
    }
    return "";
}

console.log("max odd in the string", largestOddNum("10133890"));