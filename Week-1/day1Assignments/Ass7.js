//7. Write a function that receives an array & search element as args and returns the index of that search element in the array. It should return "not found" when search element not found.
function findIndex(arr,search){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===search){
            return i;
        }
    }
    return "not found";
}
console.log(findIndex([10,20,30,40,50],60));
console.log(findIndex([10,20,30,40,50],30));