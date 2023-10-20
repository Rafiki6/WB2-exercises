// Define the radius of the circle
var radius = 10; 
var areOfCircle = (radius**3)*Math.PI
console.log("The area of a circle with radius some-number is "+areOfCircle)
// absolute operator
var originalPrice = 9.97;
var newPrice = 12.50;
var difference = Math.abs(originalPrice - newPrice);
console.log(difference)
// Math min,max
var test1 = 92, test2 = 98, test3 = 82;
var lowestTestScore = Math.min(test1, test2, test3);
var highestTestScore = Math.max(test1, test2, test3);
console.log(lowestTestScore)
console.log(highestTestScore)
