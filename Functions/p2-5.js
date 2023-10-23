// Problem 5
// Write a custom function that has the same behavior of inbuilt Array Includes Function

function include(arr,value){
  for (let i = 0; i < arr.length;i++){
    if (arr[i]===value){
      return true;
    }
  }
  return false;
}

console.log(include( ['cat', 'dog', 'bat'],"dog"))