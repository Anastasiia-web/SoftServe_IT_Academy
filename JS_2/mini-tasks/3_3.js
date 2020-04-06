//The task is to find out if a number has a matching numbers.

let n = prompt('Enter three digit number!')

let n_1 = n % 10
let n_2 = (n % 100 - n % 10) * 0.1
let n_3 = (n % 1000 - n % 100) * 0.01

if (n_1 == n_2 || n_2 == n_3 || n_1 == n_3) {
    alert('There is numbers match!')
} else {
    alert('There is no numbers match :(')
}