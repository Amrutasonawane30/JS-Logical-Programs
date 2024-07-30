
function sumofArray(arr){
    let sum = 0;
    for(i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
}
let array = [2,4,3,99,76];
console.log("Sum of array elements ",sumofArray(array))