// Problem 3: Taking the following array into consideration get the output as given below:
// arr = [3,4,5,6,7]
// Output ==> 3 - 5 - 7
// Hint: You have to use forEach and conditional statement over here.
let bag = ""
let  arr = [3,4,5,6,7];
let ans = arr.forEach(function(data)
                      {
                        if (data % 2 !=0){
                          bag += data;
                          if (data !=arr[arr.length -1])
                          {
                            bag+="-";
                          }
                        }
                      })

console.log(bag)
