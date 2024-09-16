const str1 = "Hey, my friend, Programming Language";
const str2 = "I am learning logical programs";
const str3 = "Angular";

function lastChar(str){
  return str.charAt(str.length-1)
}
const len1 = str1.length;
const str4 = str1.charAt(len1-1)

console.log(`the last character of the ${str1} is ${str4}`);
console.log(`the last character of the ${str2} is ${lastChar(str2)}`);