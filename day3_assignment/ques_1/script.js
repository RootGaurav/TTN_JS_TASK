function Person() {
  this.name = "Gaurav";
}

function Employee() {
  this.id = 8889;
}
Employee.prototype = new Person();

function Developer() {
  this.tech = "JS";
}
Developer.prototype = new Employee();

var dev = new Developer();

console.log(dev.name);       
console.log(dev.id);         
console.log(dev.tech);       