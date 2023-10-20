var amount = 12.50;
var taxExempt =0.08; /* value not shown */
var tax;
var totalDue;

if (taxExempt <= false) {
 tax = amount * 0.08; // 8% tax rate
}
else {
 tax = 0;
}
totalDue = amount + tax; 
console.log(totalDue);
// another example
var hoursEarned = 10;
var classification;
if (hoursEarned <= 29) {
 console.log (classification = "Freshman");
} 
else if (hoursEarned <= 59) {
    console.log(classification = "Sophomore");
} 
else if (hoursEarned <= 89) {
    console.log(classification = "Junior");
} 
else {
    console.log(classification = "Senior");
}