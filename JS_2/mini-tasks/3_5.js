//The task is to find a numerical polindrome.

let n = Number(prompt('Enter a five digit number!'))

let n_00001 = n % 10 
let n_00010 = (n % 100 - n % 10) * 0.1 
let n_00100 = (n % 1000 - n % 100) * 0.01 
let n_01000 = (n % 10000 - n % 1000) * 0.001 
let n_10000 = (n % 100000 - n % 10000) * 0.0001 


if (n % 10 == (n % 100000 - n % 10000) * 0.0001 && (n % 100 - n % 10) * 0.1 == (n % 10000 - n % 1000) * 0.001) {
    alert('Yes! ' + n + ' is a numerical palindrome.')
} else {
    alert('No! ' + n + ' is not a numerical palindrome.')
}




