class Player{
    #name;
    #birthday;
    #noOfMonths;
    #monthlySalary
    constructor(name, birthDay, monthlySalary, noOfMonths){
        this.#name = name;
        this.#birthday = birthDay;
        this.#monthlySalary = monthlySalary;
        this.#noOfMonths = noOfMonths
    }

    calculate_age(){
        const ageCalculate = Date.now() - new Date(this.#birthDay).getTime()
        const ageDate = new Date(ageCalculate)
        return Math.abs(ageDate.getFullYear() - 1970)
};
getSalary() {
    return (this.#monthlySalary * this.#noOfMonths).toLocaleString()
}
}

const player = new Player("Musfiq", '1980-03-30', 2000000, 12)
// const player2 = new Player("skib", '1988-03-30', 5000000, 12)
// const player3 = new Player("Musfiq", '1990-03-30', 4000000, 12)
console.log(player.calculate_age());
// const playerDetails = `${player.name} is a best player for bangladesh. His birthday on ${player.birthDay}. Now His age ${player.calculate_age()} years old. His yearly salary is ${player.getSalary()} taka. `
// console.log(playerDetails);



// const virat = {
//     name : 'virat kholi',
//      birthDay :"1986-11-5",
//     mothlySalary : 200000,
//     noOfMonths : 12,
//     calculate_age(){
//         const ageCalculate = Date.now() - new Date(this.birthDay).getTime()
//         const ageDate = new Date(ageCalculate)
//         return Math.abs(ageDate.getFullYear() - 1970)
        
//     },
//     getSalary() {
//         return (this.mothlySalary * this.noOfMonths).toLocaleString()
//     }
// }

// console.log(virat.calculate_age());
// console.log(virat.getSalary());