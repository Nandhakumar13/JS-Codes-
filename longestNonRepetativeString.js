function longestNonRepeativeStr(str) {
  let left = 0;
  let maxLength = 0;
  let set = new Set();
  let n = str.length;

  for(let i = 0; i < n;i++){
    while(set.has(str[i])){
      set.delete(str[left]);
      left++;
    }
    set.add(str[i]);
    maxLength = Math.max(i - left+1,maxLength);
  }
  console.log(set);
  return maxLength;

}


console.log("Longest non repetative str is", longestNonRepeativeStr("pwwkew"));