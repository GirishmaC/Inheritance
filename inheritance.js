// Que 1. Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype.

const parent = {
    mob: "1PLUS",
    print: function () {
      console.log(this.mob);
    },
  };
  const child = Object.create(parent);
  child.print();
  
  // Que 2. Write code to explain prototype chaining.

  function Device(mobName, Specifications, cost) {
    this.mobName = mobName;
    this.Specifications = Specifications;
    this.cost = cost;
  }
  
  const mob = new Device("OnePlus", "360", "800000");
  console.log(mob.hasOwnProperty("Specifications"));
  
  //Que 3. Add a method to calculate sum of all elements in Array in array's prototype, use that method to calculate sum for multiple arrays.

  const num = [1,2,3,4,5];
  const number = [9,8,6,5,4];
  
  Array.prototype.add = function () {
    let data = 0;
    for (let i = 0; i < this.length; i++) {
      data = data + this[i];
    }
    console.log(data);
  };
  
  num.add();
  number.add(); 
  
  //Que 4. Write a JavaScript function to retrieve all the names of object's own and inherited properties.

  const Data = {
    name: "Girishma",
    designation: "Developer",
    company: "Cognizant"

  };
  
  data1 = Object.create(Data);
  data1.Salary = 80000;
  
  for (const key in data1) {
    console.log(key);
  }