// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let stored_username = "Vatsal_Sharma";
let stored_password = "Vatsal@3801";

let input_usernmae = "Vatsal_Sharma";
let input_password = "Vatsal@3801";

if (input_usernmae == stored_username && input_password == stored_password ){
  console.log("You can Login.");
}
else {
  console.log("not able to login");
}