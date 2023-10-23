// Problem 4: Write a function to check if the char is a small case or not.
function check_smallcase(char)
{
  let small_case="abcdefghijklmnopqrstuvwxyz";
  for (let i=0;i<small_case.length;i++){
    if (small_case[i]==char){
      return true;
    }
  }
  
}
function ans(value){
  let result = check_smallcase(value);
  if (result==true){
    console.log(value,"is in smaller case.");
  }
  else {
  console.log(value,"is not in smaller case.")
  }
}
ans("U")
