//Write a function that receives an array as arg and return their sum
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
console.log(sum([10, 20, 30, 40, 50]));