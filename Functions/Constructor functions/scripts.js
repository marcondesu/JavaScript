//constructor functions
function Person(name, specs) {
    this.name = name
    this.specs = function() {
        console.log('tall, funny and intelligent')
    }
}

const marcos = new Person('Marcos')
const david = new Person('David')

//will show 'Marcos'
console.log(marcos.name)
//will show specs()
console.log(david.specs)