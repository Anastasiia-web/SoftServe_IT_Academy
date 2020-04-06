//The task is to show user the following next date.

let date = new Date(prompt('Enter any year, month, date: YYYY-MM-DD.'));
date.setDate(date.getDate() + 1);

alert(`The next date is ${date}` );


