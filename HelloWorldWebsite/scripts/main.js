
const findAgeBtn = document.getElementById("findAgeBtn");
const yearBornField = document.getElementById("yearBornField");
let yearBorn = Number(yearBornField.value);
let currentYear = 2023;
findAgeBtn.onclick = findAge;
function findAge(){

let ageAtYearEnd = currentYear - yearBorn;
const ageField = document.getElementById("ageField");

ageField.innerHTML=ageAtYearEnd;
}

