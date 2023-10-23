// Problem 2
// Write a custom function that has the same behavior of inbuilt Array Last Index Of Function


function lastIndex(arr,word){
  for (let i=arr.length-1;i>=0;i--){
    if (arr[i]==word){
      return i;
    }
  }
  return -1;
}
console.log(lastIndex(['Dodo', 'Tiger', 'Penguin', 'Dodo'],"Penguin"))