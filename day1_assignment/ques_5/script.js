var emps = [
  { name: "Gaurav", age: 22, salary: 6000, dob: "2002-01-10" },
  { name: "Amit",   age: 25, salary: 4500, dob: "1999-05-15" },
  { name: "Neha",   age: 21, salary: 900,  dob: "2003-08-20" },
  { name: "Riya",   age: 22, salary: 800,  dob: "2002-11-02" },
  { name: "Rahul",  age: 30, salary: 7000, dob: "1994-03-18" }
];



//filter all employees with salary greater than 5000

var high_sal_emp = emps.filter(emp => emp.salary > 5000);
console.log("Salary > 5000:", high_sal_emp);


//group employee on the basis of their age
var ordered_emp = emps.reduce(function (group, emp) {
  if (!group[emp.age]) {
    group[emp.age] = [];
  }
  group[emp.age].push(emp);
  return group;
}, {});

console.log("Grouped By Age:", ordered_emp);


//fetch employees with salary less than 1000 and age greater than 20.
//  Then give them an increment 5 times their salary.
var updated_emp = emps.map(function (emp) {
  if (emp.salary < 1000 && emp.age > 20) {
    emp.salary = emp.salary * 5;
  }
  return emp;
});

console.log("Updated Employees:", updated_emp);
