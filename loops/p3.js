// Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit
let sum = 0;
let num = 1;

while(num <=24) 
  {
    if (num % 3 == 0)
      {
        sum = sum + num ; 
       }
    num++;
  }
console.log(sum);