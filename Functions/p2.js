// Problem-2
// Write code to find the absolute difference of two numbers

// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14
// NOTE: It must consist of two functions 1. To find the difference 2. To find the absolute value
function final(sub){
  if (sub<0){
    return -sub;
  }
  else {
    return sub;
  }
}
function diff(a,b){
  let sub = a-b;
  let result = final(sub);
  console.log(result);
} 

diff(4,18)