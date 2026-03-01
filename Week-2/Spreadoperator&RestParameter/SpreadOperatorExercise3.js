function findSum(...nums){
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    return sum;
}
console.log(findSum(10,20,30,40,50));


//or we can use reduce method because we are receiving array using rest parrameter
function findSum(...nums){
    return nums.reduce((acc,ele)=>acc+ele);
}
console.log(findSum(10,20,30,40,50));