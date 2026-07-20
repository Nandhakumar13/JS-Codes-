function longestNonRepeativeStr(str) {
  let left = 0;
  let maxLength = 0;
  let set = new Set();
  for (let right = 0; i < str.length; i++) {
    while (set.has(right)) {
      set.delete(left);
      left++;
    }
    set.add(right);
    maxLength = Math.max(maxLength,right - left +1);
  }
  return maxLength;
}
