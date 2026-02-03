// var x = 5;

// function first() {
//   console.log(x);   // Line 1
//   var y = 10;

//   function second() {
//     console.log(y); // Line 2
//     console.log(z); // Line 3
//     var z = 20;
//   }

//   second();
// }

// first();
// console.log(y);     // Line 4

let x = 5;

function first() {
  console.log(x);
  let y = 10;

  function second() {
    console.log(y);
    console.log(z); // Error
    let z = 20;
  }

  second();
}

first();
console.log(y); // Error
