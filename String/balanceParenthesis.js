// leetcode 921- minimum add to make parenthesis valid

// balance parenthesis in the given string


function balanceParenthesis(str){
    let balance = 0;
    let addition = 0;

    for(let i = 0; i<str.length; i++){
        if(str[i] == '('){
            balance++;
        }
        else{
            if(balance > 0){
                balance--;
            }
            else{
                addition++
            }
        }
    }
}