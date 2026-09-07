function topKFrequentElem(arr,k){
    let hashObj = {};
    for(const num of arr){
        hashObj[num] = (hashObj[num] || 0) +1;
    }

//    let res = Object.keys(hashObj).filter((key) => hashObj[key] >= k).map(Number);
   let res = Object.keys(hashObj).sort((a,b) => hashObj[b]- hashObj[a]).slice(0,k).map(Number);
   return res;
}


console.log("Top K frequent elements in the given array is", topKFrequentElem([1,2,2,3,3,3],2));
console.log("Top K frequent elements in the given array is", topKFrequentElem([7,7],1));
console.log("Top K frequent elements in the given array is", topKFrequentElem([1,2],2));