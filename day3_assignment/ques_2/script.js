const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index) => {
  setTimeout(() => {
    console.log(num);
  }, (index + 1) * 3000);
});