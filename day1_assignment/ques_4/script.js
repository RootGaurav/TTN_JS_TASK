var obj1 = {
  name: "gaurav",
  age: 22,
  address: {
    city: "Delhi",
    pincode: 110001
  }
};

var obj2={};




function copyProperties(target, source) {
  for(prop in source) {
    target[prop] = source[prop];
  }
  return target;
}


obj2=copyProperties(obj2,obj1)


obj2.name="gaurav rawat"
obj2.address.city="Dehradun"

//shallow copy
console.log(obj1.name);
console.log(obj2.name);


//shallow copy
console.log(obj1.address.city);
console.log(obj2.address.city);


var obj3 = JSON.parse(JSON.stringify(obj1));


obj3.name = "deep copy example";
obj3.address.city = "deep copy example";

// deep copy
console.log(obj1.name);         
console.log(obj3.name);         

console.log(obj1.address.city); 
console.log(obj3.address.city); 