function longestSubStr(str){
    let left = 0;
    let startIndex = 0;
    let maxLength = 0;
    let map = new Map();

    for(let right = 0; right < str.length - 1; right++){
        if(map.has(str[right]) && map.get(str[right]) >= left){
                left = map.get(str[right]) + 1;
        }
        map.set(str[right], right);

        if(right - left + 1 > maxLength){
            maxLength = right - left + 1;
            startIndex = left;
        }
    }

    return `Longest subString in the given string is ${str.slice(startIndex, startIndex+maxLength)} with the length of ${maxLength}`;
}

console.log(longestSubStr("pwwkew"));
console.log(longestSubStr("nandha"));
console.log(longestSubStr("muruga"));