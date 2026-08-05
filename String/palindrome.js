function palindrome(str){
    let revStr = "";
    for(let i = str.length -1; i >=0; i--){
        revStr+=str[i];
    }

    return revStr == str;
}

console.log("is palindrome", palindrome("anna"));
console.log("is palindrome", palindrome("aana"));