// Problem 2 : Given a character in lower case print the upper case character
let char= "v";
let lower="abcdefghijklmnopqrstuvwxyz";
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i =0;i<lower.length;i++){
  if (lower[i]==char){
    char=upper[i];
  }
  
}
console.log(char);