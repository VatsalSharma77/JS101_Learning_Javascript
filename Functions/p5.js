// Problem-5
// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]


function lower_char(char){
  let lower_case = "abcdefghijklmnopqrstuvwxyz";
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let bag = "";
  for (let i = 0;i <upper_case.length;i++){
    if (char==upper_case[i]){
      bag += lower_case[i];
    }
  }
  return bag;
}

function lower_word(str){
  let bag2="";
  for (let j= 0;j<str.length;j++){
    let new_word = lower_char(str[j])
    bag2+=new_word;
  }
  return bag2;
  
}

function lower_arr(arr){
  let bag3 = [];
  for (let k=0;k<arr.length;k++){
    let new_arr = lower_word(arr[k]);
    bag3.push(new_arr);
  }
  console.log(bag3);
}
lower_arr(["MA", "SA", "I", "SCH", "OOL"]);
