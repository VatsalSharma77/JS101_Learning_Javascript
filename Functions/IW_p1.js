// Problem 1: Create a function to check if a number is Prime or Not

function check_prime(num){
  let count = 0;
  for (let i=1;i<=num;i++){
    if(num % i == 0){
      count++;
    }
  }
  if (count==2){
    return true;
  }
  else {
    return false;
  }
}

function ans(value){
  let result=check_prime(value);
  
  if (result==true){
    console.log( value,"is a prime number.");
  }
  else {
  console.log(value,"is not a prime number.")
  }
}
ans(22);