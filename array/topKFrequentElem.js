function topKFrequentElem(arr, k) {
  //     let hashObj = {};
  //     for(const num of arr){
  //         hashObj[num] = (hashObj[num] || 0) +1;
  //     }

  // //    let res = Object.keys(hashObj).filter((key) => hashObj[key] >= k).map(Number);
  //    let res = Object.keys(hashObj).sort((a,b) => hashObj[b]- hashObj[a]).slice(0,k).map(Number);
  //    return res;

  // method 02: Bucket method

  let map = new Map();
  let result = [];
  for (const num of arr) {
    map.set(num, (map.get(num) | 0) + 1);
  }

  // create bucket
  let bucket = Array.from({length:arr.length+1},()=>[]);

  // put numbers to bucket
  for(const [num,count] of map){
    bucket[count].push(num);
  }

  for(let i = bucket.length - 1; i >=0; i--){
    for(const num of bucket[i]){
        result.push(num);
        if(result.length == k) return result;
    }
    
  }

  console.log(map,bucket);
  return result;
}

console.log(
  "Top K frequent elements in the given array is",
  topKFrequentElem([1, 2, 2,2, 3, 3, 3,0,0,0,0], 2),
);
console.log(
  "Top K frequent elements in the given array is",
  topKFrequentElem([7, 7], 1),
);
console.log(
  "Top K frequent elements in the given array is",
  topKFrequentElem([4,4,2,2,1,3,3,3], 2),
);
