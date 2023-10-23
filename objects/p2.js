// ### **Problem-2 Grade Student Marks**

// - Given an object of student grades and their marks in the mentioned below format, print the highest scored student for each grade along with the total
let data=[
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
];


for (let i=0;i<data.length;i++){ 
  
  let max =-Infinity;
  let n;
 
  for (let j=0; j<data[i].students.length;j++){
  
    let sum = 0;
    
    for (let k=0; k<data[i].students[j].marks.length;k++){
      
      sum +=Number(data[i].students[j].marks[k]) ;
      
     }
    if (max < sum){
  
      max = sum;
      n= data[i].grade + "-" +data[i].students[j].name;
    }
    
   }
  
    console.log(n+"-"+max);  
}
