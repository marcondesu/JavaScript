//1 declare a variable
let weight

//2 what type is the above variable?
console.log(typeof weight)

/*
    3 declare a variable and assign values to each
        nome: String
        age: Number (integer)
        stars: Number (float)
        isSubscribed: Boolean
*/
/*
let nome, age, stars, IsSubscribed
nome = 'John'
age = 14
stars = 26.5
isSubscribed = false
*/

//4 what type is the below variable?
let student = {} //object

//4.1 assign the above variable the same properties and values ​​as in topic 3
student = {
    nome: 'John',
    age: 14,
    stars: 26.5,
    isSubscribed: false
}

/*
    4.2 show the console the following message
        my name is <nome>, im <age> years old and I weight <weight>
*/
console.log(`my name is ${student.nome}, im ${student.age} years old and I weight ${weight}`)

//5 declare an array variable, named students and assign it no value
let students = []

//6 assign value to the above variable, placing the topic 4 students object inside it.
students = [
    student
]

//7 put in the console the value of the zero position of the array above
console.log(students[0])

//8 create a new student and place it in position 1 of the students array
let student_2 = {
    nome: 'Jake',
    age: 15,
    weight: 59,
    isSubscribed: false
}

students = [
    student,
    student_2
]

//or

students[1] = student_2

//