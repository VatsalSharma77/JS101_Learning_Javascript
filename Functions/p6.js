// Problem-6
// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block

function inter_change(char){
  let lower_case = "abcdefghijklmnopqrstuvwxyz";
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let bag = "";
  for (let i = 0;i <upper_case.length;i++){
    if (char==upper_case[i]){
      bag += lower_case[i];
    }
    else if (char==lower_case[i]){
      bag+=upper_case[i];
    }
  }
  return bag;
}

function ans(str){
  let bag2="";
  for (let j= 0;j<str.length;j++){
    let new_word = inter_change(str[j])
    bag2+=new_word;
  }
  console.log(bag2);
  
}
ans("Test");
