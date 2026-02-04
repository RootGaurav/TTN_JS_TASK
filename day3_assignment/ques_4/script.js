function args_test(a,b) {
  console.log(arguments.length);
  console.log(arguments.callee === args_test);
  console.log(arguments[0]);
}

args_test(5,7);
