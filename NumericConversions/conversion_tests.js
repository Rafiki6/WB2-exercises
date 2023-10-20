// PARSING STRING INTO A NUMBER
var hrsWorked = "33"; // a String object
hrsWorked = parseInt(hrsWorked); // now a Number object
console.log(hrsWorked)
// using parseInt
var hrsWorked = "Thirty three";
hrsWorked = parseInt(hrsWorked);
console.log(hrsWorked)
 // value is NaN
if (isNaN(hrsWorked)) {
console.log(hrsWorked)
}
// parseFloat
var payRate = "10.75"; // a String object
payRate = parseFloat(payRate); // now a Number object
console.log(payRate)
// parseNumber
var a = Number("123"); // a is 123
var b = Number("45.67"); // b is 45.67
var c = Number("40 years"); // c is NaN
var d = Number(true); // d is 1
var e = Number(false); // e is 0
var f = new Date(1990, 5, 20);
var g = Number(f); // g is 156100680000
// using Unary
var payRate = "10.75"; // a String object
payRate = +payRate; // now a Number objec
console.log(payRate)
// IF STATEMENT
var numKids = 12;
var price;
price = numKids * 9.95; // price is $9.95/kid
if (numKids >= 6) {
 price = price * .9; // a 10% discount
}
console.log(price);

