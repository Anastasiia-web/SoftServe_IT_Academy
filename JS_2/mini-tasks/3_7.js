//The task is to program the sum to pay depending on discount.

let sum = Number(prompt('Please enter purchase amount.'))

let discount_3_percent = sum - (sum * 0.03);

let discount_5_percent = sum - (sum * 0.05);

let discount_7_percent = sum - (sum * 0.07);

if (sum >= 200 && sum < 300) {
    alert(`The amount of your purchase for payment with 3% discount is ${discount_3_percent} UAN.`)
} else if (sum >= 300 && sum < 500) {
    alert(`The amount of your purchase for payment with 5% discount is ${discount_5_percent} UAN.`)
} else if (sum >= 500) {
    alert(`The amount of your purchase for payment with 7% discount is ${discount_7_percent} UAN.`)
} else if (sum >= 0 && sum < 200) {
    alert(`The amount of your purchase for payment is ${sum} UAN.`)
}