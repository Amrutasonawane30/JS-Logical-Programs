//WAP to check whether given strings contains word ‘UI’ or not?
const str1 = "React - UI Developer";
const str2 = "UI Developer";
const str3 = "Front end and backend technologies";

function check(str){
  //return str.includes('UI');
  if(str.includes('UI'))
    console.log(`"${str}" includs UI`)
  else
  console.log(`"${str}" does not includs UI`)
  //return str.includes('UI');
  return 0;
}
//const a = check(str3);
console.log(`${str1}  ${check(str1)}`)
console.log(`${str2}  ${check(str2)}`)
console.log(`${str3}  ${check(str3)}`)

