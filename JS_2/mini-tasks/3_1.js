//The task is to divide users into different age categories.

let age = prompt('How old are you?');

if (age >= 0 && age <=2) {
    alert('Hi, baby!')
} else if (age >=12 && age <= 18) {
    alert('Hi! (teenager')
} else if (age >=18 && age <= 60) {
    alert('Good morning! You are between 18 and 60 years old) (adult)')
} else if (age > 60) {
    alert ('Good afternoon! (pensioner - more than 60 y.o.)')
}