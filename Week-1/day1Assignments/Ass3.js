//Find the sum of marks in [90,78,65,98]
// function sum(arr)
// {
//     let sum=0;
//     for(let i=0;i<arr.length;i++)
//     {
//         sum+=arr[i];
//     }
//     return sum;
// }
// console.log(sum([90,78,65,98]));

//find sum using reduce method)
function sum(arr){
    return arr.reduce((acc,ele)=>acc+ele);
}
console.log(sum([90,78,65,98]));