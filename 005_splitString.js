function splitString(str,delimiter){
  return str.split(delimiter);
}

const str1 = "apple, banana, grapes";
const str2 = "Amruta, Madhuri, Pallavi, Poonam";

const result1 = splitString(str1, ',');
console.log(`split string is ${result1}`);
//const result = splitString(str)
const result2 = splitString(str2,",");
console.log(`split string is ${result2}`);