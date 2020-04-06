//The task is to programe a Currency Converter. User enters USD.

let sum = Number(prompt('Enter a sum you would like to convert in dollars.'))
let currency = prompt('Enter a currency to convert: EUR, UAN, AZN.')

let sum_eur = Math.floor((sum * 0.91) * 100) / 100;
let sum_uan = Math.floor((sum * 27.42) * 100) / 100;
let sum_azn = Math.floor((sum * 1.70) * 100) / 100;

if (currency == 'EUR') {
    alert(`Your sum ${sum} dollars is ${sum_eur} EUR`)
} else if (currency == 'UAN') {
    alert(`Your sum ${sum} dollars is ${sum_uan}UAN`)
} else if (currency == 'AZN') {
    alert(`Your sum ${sum} dollars is ${sum_azn}AZN`)
}