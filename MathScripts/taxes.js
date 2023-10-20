var fedTax = 0.23;
var monthIncome = 4000;
var taxWithHold = monthIncome*fedTax
console.log(taxWithHold)
// pre/post/increment/decrement
var num1 = 2;
var num2 = 4;
var num3 = 6;
// INCREMENT
num1 = num1 +1;
 ++num1
console.log(num1)
var x = 5;
// var y;
// when you use pre-increment, it does the increment first
// before the other operators
++x;
x++;
console.log(x)
// decrement
var num = 5;
--num; // num is now 4
num--; // num is now 3
console.log(num)
// USED IN LOOP
for (var i = 1; i <= 10; i++) {
    console.log(i)
}

