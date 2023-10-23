// Problem 3
// Write a custom function that has the same behavior of inbuilt Array Slice Function

function slicing(data,start,end){
  
  let arr=[];
  if (start == undefined && end == undefined){
    return data;
  }
    
  else if (start > 0 && end == undefined){
    for (let i = start; i < data.length; i++){
      arr.push(data[i]);
    }
  }
    
  else if (start > 0 && end > 0){
    for (let i=start; i<end ; i++){
      arr.push(data[i]);
    }
  }
    
  else if (start > 0 && end < 0){
    end+=data.length;
    for (let i =start; i<end; i++){
       arr.push(data[i]);
    }
  }
    
  else if (start < 0 && end == undefined){
    start+=data.length;
    for (let i = start ; i<data.length;i++){
      arr.push(data[i]);
    }
  }
  else if (start < 0 && end < 0){
    start+=data.length;
    end+=data.length;
    for (let i=start; i< end ;i++){
      arr.push(data[i]);
    }
  }
  
  return arr;
}
console.log(slicing(['ant', 'bison', 'camel', 'duck', 'elephant'],1,5))
