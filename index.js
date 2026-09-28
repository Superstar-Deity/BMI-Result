let personName = "Akpos";
let weightKg = 40;
let heightM = 1.75;

let heightSquared = heightM * heightM;
let bmi = weightKg / heightSquared;

let isUnderweight = bmi < 18.5;
let isNormalWeight = bmi >= 18.5 && bmi < 25;

let isOverweight = bmi >= 25;

let isHighRisk = weightKg > 90 || isOverweight;


console.log("BMI result");
console.log("----------------------------------")
console.log(personName);
console.log("BMI =", bmi.toFixed(2));
console.log(bmi < 18.5 ? "Underweight" : bmi>= 18.5 && bmi < 25 ? "normalWeight" : "Overweight")
console.log(isHighRisk ? "High Risk Alert" : "Not High Risk")