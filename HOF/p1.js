// Problem 1: Find the average of elements present at odd index of the following array.

let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let count = 0;
let ans = arr.reduce(function(acc,curr,index)
                               {
                                 if (index%2!=0){
                                   acc+=curr;
                                   count++;
                                 }
                                 return acc
                               },0);
console.log(ans/count);