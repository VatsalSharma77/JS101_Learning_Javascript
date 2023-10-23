// Problem-1 Rectangle Object

// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle

let obj = 
  {
    length : 15,
    width : 20,
    perimeter : function()
      {
        let ans1 = 2*(this.length + this.width);
        console.log(ans1);
      },
    area : function()
      {
        let ans2 = this.length*this.width;
        console.log(ans2);
      }
  }
obj.perimeter();
obj.area();