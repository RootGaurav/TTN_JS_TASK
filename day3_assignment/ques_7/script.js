const baseNums = [2, 4, 6];
const doubledVals = baseNums.map(v => v * 2);

console.log(doubledVals);



const scoreList = [11, 3, 18, 25, 7];
const passed = scoreList.filter(m => m > 10);

console.log(passed);




const bills = [100, 200, 50];
const totalBill = bills.reduce((x, y) => x + y, 0);

console.log(totalBill);


const tags = ["html", "css", "js"];

tags.forEach(t => {
    console.log(t.toUpperCase());
});


const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const midDays = days.slice(1, 4);

console.log(midDays);
