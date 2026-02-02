let str = prompt("Enter a string to check palindrome:");
let rev = "";
for (let i = str.length - 1; i >= 0; i--) 
{
  rev += str[i];
}
if (str === rev) 
{
  alert("String is a Palindrome");
} 
else {
  alert("String is NOT a Palindrome");
}
