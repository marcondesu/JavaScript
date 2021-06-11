let subject

function createThink(subject) {
    subject = 'monke'
}

console.log(subject) //undefined because 'createThink' was not executed yet
createThink() //execute 'createThink' and update the value of 'subject'
console.log(subject) //will show 'study'

//OBS: if 'subject' in line 1 had a value, 'createThink' would replace that value