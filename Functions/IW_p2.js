// Problem 2: Use the above function to print the Primes from 2 to a given limit

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
  for (let j=2;j<=value;j++){
    let result = check_prime(j);
    if (result==true){
      console.log(j,"is a prime number");
    }
  }
}
ans(23);
