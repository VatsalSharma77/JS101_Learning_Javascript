// problem
// Create an object with the following functionality

// Ability to add 3 students details and their marks in 3 subjects
// Method to find the student with the least total.
// Method to find the student with the highest total.

let name = ["Goku","Vegeta","Broly"];
let speed = [95,90,80];
let power = [90,92,98];
let ki = [100,98,100];

let marks = {
  
  data : [],
  
  add_details : function(name,speed,power,ki){
    for( let i=0; i<name.length; i++){
      let obj = {};
      obj["name"] = name[i];
      obj["speed"] = speed[i];
      obj["power"] = power[i];
      obj["ki"] = ki[i];
      this.data.push(obj);
    
    }
  },
  
  maximum : function()
  {
    max = -Infinity;
    
    for (let j = 0; j<this.data.length; j++)
    {
      total1 = this.data[j].speed + this.data[j].power +
         this.data[j].ki; 
      
      if (max < total1)
      {
        max=total1;
      }
    }
    console.log(max);
  },
  
  minimum : function()
  {

    min = Infinity;
    for (let j = 0; j<this.data.length; j++)
    {
      total2 = this.data[j].speed + this.data[j].power +
         this.data[j].ki; 

      if (min > total2)
      {
        min=total2;
      }
    }
    console.log(min);
  }
}

marks.add_details(name,speed,power,ki);
marks.maximum();
marks.minimum();