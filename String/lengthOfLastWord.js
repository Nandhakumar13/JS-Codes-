function lengthOfLastWord(str){
    let i = str.length - 1;

    while(i >= 0 && str[i] == ' '){
        i--;
    }

    let length = 0;

    while(i >= 0 && str[i] !== ' '){
        length++;
        i--;
    }

    return length;
}

console.log("Length of the last word ", lengthOfLastWord("land on the moon   "));
