//ind the big number in given three numbers
function findmax(a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    else{
        return c;
    }
}
    console.log(findmax(30,49,50));