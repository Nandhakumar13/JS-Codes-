// 921. Minimum Add to Make Parentheses Valid

function validParanthesis(str){
    let balance = 0;
    let additions = 0;

    for(let i =0; i < str.length; i++){
        if(str[i] == '('){
            balance++;
        }else{
            if(balance > 0){
                balance--;
            }else{
                additions++;
            }
        }
    }
    return balance+additions;
}


console.log("total count", validParanthesis(")(()") );
console.log("total count", validParanthesis(")(())") );