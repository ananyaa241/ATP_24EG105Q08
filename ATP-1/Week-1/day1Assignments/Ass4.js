//4. Find the smallest element in marks array
function min(arr)
{
    min=arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]<min)
        {
            min=arr[i];
        }
    }
    return min;
}
console.log(min([90,56,90,45,35]))