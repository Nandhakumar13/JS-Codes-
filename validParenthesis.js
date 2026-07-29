// check the given string is valid parenthesis.

// valid parenthesis should contain proper open and closing brackets


function validParenthesis(str){
    let openCount = 0;
    // let closecount = 0;
    let n = str.length;

    for(let i =0; i < n;i++){
        if(str[i] == "("){
            openCount++;
        }else{
            if(openCount == 0){
                return false;
            }else{
                openCount--;
            }
        }
    }
    return openCount == 0 ? true :false;
}