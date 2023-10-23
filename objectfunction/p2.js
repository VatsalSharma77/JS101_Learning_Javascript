// # Problem 2

// ### **Products Cart Object**

// - Given an input of products in the below format (Name Quantity Price)
// - Input

// ```
// ["Rice", "Dal", "Salt"]
// [2, 3, 1]
// [60, 50, 20]

// ```

// - Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`
// - The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
// - Sample output for the above case `290`

let material = ["Rice", "Dal", "Salt"];
let quantity = [2, 3, 1];
let price = [60, 50, 20];

let array = [];
for (let i =0;i<price.length;i++)
{
  let obj = {};
  obj["name"]=material[i];
  obj["quantity"]=quantity[i];
  obj["price"]=price[i];
  array.push(obj);
}

let newobj = {
  data : array,
  total : function(){
    let sum = 0;
    for (let i = 0; i<this.data.length; i++){
      sum += this.data[i].price * this.data[i].quantity;
    }
    console.log(sum);
  }
}
newobj.total();