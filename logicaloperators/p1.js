// Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties
let year = 2007;
let age = 2023 - year;
console.log( age >=13 && age <= 19 ? "Teenage" : age >=20 && age <= 29 ? "Twenties" : "NA");