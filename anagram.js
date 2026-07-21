function anagram (s,t){
    let count = new Array(26).fill(0);
    for(let char of s){
        count[char.charCodeAt(0) - 97]++;
    }

    for(let char of t){
        let idx = char.charCodeAt(0) - 97;
        if(count[idx] == 0) return false;
        count[idx]--
    }
    return true;
}

console.log("=== is anagram", anagram('nana', 'anna'));