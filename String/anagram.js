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



// method 02 - map method 

function isAnagram(s1,s2){
    if (s1.length !== s2.length) return false;
    let map = new Map();
    for(let char of s1){
        map.set(char,(map.get(char) || 0) + 1);
    }

    for(let char of s2){
        if(!map.get(char)){
            return false
        }
        map.set(char, map.get(char) - 1);
    }
    return true;
}