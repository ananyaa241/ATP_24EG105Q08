//5. Write a function that receives 3 number args and  return the big number 
// function findmax(a,b,c){
//     if(a>b && a>c){
//         return a;
//     }
//     if(b>a && b>c){
//         return b;
//     }
//     else{
//         return c;
//     }   }
//     console.log(findmax(67,45,34,56,60));

//max using filter
function findmax(...a){
    return a.filter((num)=>{
        return num===Math.max(...a);
    })
}