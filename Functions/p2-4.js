// Problem 4
// Write a custom function that has the same behavior of inbuilt String Substring Function

function newstring(str,start,end){
  let nstr="";
  if (start >= 0 && end == undefined){
    for (let i = start ;i < str.length;i++ ){
      nstr+=str[i];
    }
  }
  else if (start >= 0 && end >0){
    for (let i=start;i<end;i++){
      nstr+=str[i];
    }
  }
  return nstr;
}

const text = "Mozilla";
console.log(newstring(text,1,3))
