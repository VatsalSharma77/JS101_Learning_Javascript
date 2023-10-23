// Problem-3
// Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)

function isOdd(num){
  if (num%2!=0){
    return true;
  }
  else {
    return false;
  }
}
function ans(value){
  for (let i=0;i<=value;i++){
    let result=isOdd(i);
    if (result==true){
      console.log(i,"- Odd number")
    }
  }
} 
ans(19);