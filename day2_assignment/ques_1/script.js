let cal = {
  num1: 0, num2: 0,
  read: function () {
    this.num1 = Number(prompt("Enter first number: "));
    this.num2 = Number(prompt("Enter second number: "));
  },
  //function for add
  add: function () {
    return this.num1 + this.num2;
  },
  //function for subtraction
  subtract: function () {
    return this.num1 - this.num2;
  },
  //function for multiplication
  multiply: function () {
    return this.num1 * this.num2;
  }
};
cal.read();
console.log("Addition:", cal.add());
console.log("Subtraction:", cal.subtract());
console.log("Multiplication:", cal.multiply());
