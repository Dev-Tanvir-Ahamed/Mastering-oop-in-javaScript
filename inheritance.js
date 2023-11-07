class Player{
    #name;
    #age 
    constructor(name, age){
        this.#name = name;
        this.#age = age 
    }
    getPlayerDetails(){
        return `${this.#name} is ${this.#age} years old. `
    };
}

class Cricketer extends Player{
    #centuries
    constructor(name, age, centuries){
        super(name, age)
        this.#centuries = centuries
    }
 
}



class Footboller extends Player{
    #goals
    constructor(name, age, goals){
        super(name, age)
        this.#goals = goals
    }
}

const cricketer = new Cricketer('Tamim Iqbal', 35, 14)
const footboller  = new Footboller('Lionel Messi', 37, 100)
console.log(cricketer.getPlayerDetails());
console.log(footboller.goals);

