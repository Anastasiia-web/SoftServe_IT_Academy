let number = prompt('Enter is your ticket number (xxxxxx).');
//  N (0 ≤ N < 10 ** 6) Николай, как вписать ограничения ввода?

//let number = 123456

let n_000001 = number % 10
console.log(n_000001) //6

let n_000010 = (number % 100 - number % 10) * 0.1

let n_000100 = (number % 1000 - number % 100) * 0.01

let n_001000 = (number % 10000 - number % 1000) * 0.001

let n_010000 = (number % 100000 - number % 10000) * 0.0001

let n_100000 = (number % 1000000 - number % 100000) * 0.00001

let number_sum_left_side = n_100000 + n_010000 + n_001000;

let number_sum_right_side = n_000100 + n_000010 + n_000001;

if (number_sum_left_side == number_sum_right_side) {
    alert('YES!')
} else {
    alert('NO!')
}