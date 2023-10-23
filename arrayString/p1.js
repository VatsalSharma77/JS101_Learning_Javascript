// Problem 1 : Given an array print the position (starting with 1) and the element in a single line.
let arr =[234,22,423,4,435]
let bag = "";
for (let i=0;i<arr.length;i++){
  let position = i+1;
  bag = bag + "Position " +position +":" +arr[i]+ " ";
}
console.log(bag);