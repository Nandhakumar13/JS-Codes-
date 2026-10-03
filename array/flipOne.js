function flipByOne(str){
    let n = str.length;

    let strArr = str.split('');
    console.log(strArr);
    let gainArr = [];
    for(let i = 0; i < n ;i++){
        gainArr[i] = strArr[i] == '0' ? 1 : -1;
    }
    console.log("gain array", gainArr);


    // kandane's algorithm

    let bestL = -1;
    let bestR = -1;
    let currSum = 0;
    let maxSum = 0;
    let start = 0;

    for(let i = 0; i < n; i++){    
        currSum += gainArr[i];
        if(currSum > maxSum){
            maxSum = currSum;
            bestL = start;
            bestR = i;
        } 
        
        if(currSum < 0){
            currSum = 0;
            start = i+1;
        }
    }

    if (bestL === -1) {
        return [];
    }

    return [bestL+1, bestR+1];

}

console.log("Flip array", flipByOne("0101"));