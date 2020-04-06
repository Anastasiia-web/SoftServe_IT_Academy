//The task is to find a leap year.

let year = Number(prompt('Enter a year!'))

if (year % 4 == 0 && year % 100 !== 0 ) {
    alert("This is a leap year as " + year + " is divisible by 4 without a remainder and is not divisible by 100.");
} else if (year % 400 == 0 && year % 100 !== 0) {
    alert('This year is a leap year as ' + year + ' is divisible by 400 without a remainder and is not divisible by 100.') 
} else {
    alert ("This is not a leap year as " + year + " is not divisible by 4 or 400 without a remainder.");
}