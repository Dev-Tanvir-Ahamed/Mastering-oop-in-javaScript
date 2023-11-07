class BetterArray{
    #items 
    constructor(){
        this.#items = []
    }
    getItems(){
        return [...this.#items]
    }
    addItem(item){
        this.#items.push(item)
    }
    removeItem(itemToDelete){
        this.#items = this.#items.filter(item => item !== itemToDelete)
    }
    modifyItem(itemToChange, newValue){
        const index = this.#items.indexOf(itemToChange)
        if (index !== -1) {
            this.#items[index] = newValue
        }
    }
}

const array = new BetterArray()
 array.addItem('Tanvir')
array.addItem('Mamun')
console.log(array.getItems());
array.modifyItem('Tanvir', 'Shipon')
console.log(array.getItems());