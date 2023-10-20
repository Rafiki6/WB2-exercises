const payRate = 25;
var hrsWorked = 40;
const standardHr = 40;



var pay = 0;


if (hrsWorked <=40){
  pay = payRate * hrsWorked
   
}

else {
    standardPay = payRate * 40;
    overTime = hrsWorked - standardHr;
    overTimeRate = payRate * 1.5;
    overTimePay = overTime *overTimeRate;
    pay += standardPay +overTimePay

}
console.log(pay)


