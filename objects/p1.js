// ## **Problem-1 User Age Filter**

// - Given a list of user data with name and age, create a list of key-value pairs from the input
// - From the generated data, print the users whose age is more than 30
let data1=["Nrupul", "Prateek", "Aman", "Albert","Yogesh"];
let data2=[32, 30, 26, 28, 44];

let bag=[];

for (let i=0;i<data1.length;i++){
  let obj={};
  obj["name"]=data1[i];
  obj["age"]=data2[i];
  bag.push(obj);
}
// console.log(bag);

let overage="";
for (let j=0;j<bag.length;j++){
  
  if (bag[j].age > 30){
    overage+=bag[j].name + " ";
  }
}
console.log(overage);


