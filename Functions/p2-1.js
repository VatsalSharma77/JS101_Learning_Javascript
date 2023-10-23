// Problem 1. Write a custom function that has the same behavior of inbuilt Array Join

function myjoin(data,join)
{
  let result = "";
  for (let i = 0;i<data.length;i++){
    result+=data[i];
    if (i!==data.length-1){
      result += join;
    }
  }
  console.log(result);
}
myjoin(['Fire', 'Air', 'Water'],"&")