function print(n,i=0){
    if(i == n) return false;
    console.log("Print statement");
    print(n,i+1);
}
print(10);