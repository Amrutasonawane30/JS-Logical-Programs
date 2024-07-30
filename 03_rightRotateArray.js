function rightRotateArray(arr){
if(arr.length === 0){
  return arr;
}
let lastElement = arr.pop();
arr.unshift(lastElement);
return arr;
}
let array = [3,2,83,90,0];
console.log("Original Array is ",array);
let rotatedArray = rightRotateArray(array);
console.log("Array After right rotation ",rotatedArray);