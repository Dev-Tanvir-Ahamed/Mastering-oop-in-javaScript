// Player details

let playerName = "Virat Koli"
let birthDay = "1986-11-5"
let monthlySalary = 200000
let noOfMonths = 12

function calculate_age(age){
    const ageCalculate = Date.now() - new Date(age).getTime()
    const ageDate = new Date(ageCalculate)
    return Math.abs(ageDate.getFullYear() - 1970)
    
}

function getSalary(mothlySalary, noOfMonths) {
    return (monthlySalary * noOfMonths).toLocaleString()
}

console.log(calculate_age(birthDay));
console.log(getSalary(monthlySalary, noOfMonths));

 