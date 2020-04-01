/*РЕШЕНИЯ*/
alert('TASKS 1 and 2');
let name = prompt('What is your name?');
alert('Hi '+ name);
let age = Number(prompt('When were you born?'));
let CURRENT_YEAR = 2020;
alert('You are ' + (CURRENT_YEAR - age));

alert('TASK 3');
let side = Number(prompt('Enter any length of the side of the square!'));
let perimeter = 4 * side;
alert('Perimeter of your square is ' + perimeter);

alert('TASK 4');
let radius = Number(prompt('Enter any length of the radius of the circle!'));
let area = radius ** 2 * 3.1415;
alert('Area of your circle is ' + area);

alert('TASK 5');
let distance = Number(prompt('Enter any distance between 2 cities (number)!'));
let time = Number(prompt('How much time would you like to spend for a trip (number)?'));
let speed = distance / time;
alert('To be in time your speed per hour should be ' + speed);

alert('TASK 6');
let dollar_sum = Number(prompt('Welcome to our virtual currency exchange service! What sum in dollars would you like to convert into euro?'));
let EXCHANGE_RATE = 0.913;
let euro_sum = dollar_sum * EXCHANGE_RATE;
let round_number = Math.floor(euro_sum * 100) / 100;
alert('Your sum in euro is ' + round_number);

alert('TASK 7');
let memory_gb = Number(prompt('What is a memory stick capacity in Gb?'));
let GB = 1000;
let file_capacity = 820;
alert('If each file is 820 Mb, you can download ' + memory_gb * GB / 820);

//ДВА РЕШЕНИЯ для задания 8
alert('THE TASK 8 has 2 solutions))');
//1
alert('FIRST solution (taking care of customer - leading him to spend more;)');
let sum_of_money1 = Number(prompt('How much are you ready to spend on chocolate?'));
let price_per_chocolate1 = Number(prompt('What is a price per one chocolate bar?'));
let max_quantity1 = sum_of_money1 / price_per_chocolate1;
let give_me_more = Math.ceil(max_quantity1 *1) /1;
let razvod = confirm(`Congrats! There is enough money to buy ${max_quantity1} chocolate bars. 
ARE YOU READY to buy ${give_me_more}?`);
let new_sum_to_pay = give_me_more * price_per_chocolate1;
let additional_payment = new_sum_to_pay - sum_of_money1;
let final_agreement = confirm(`Thank you! Please pay the difference. It is only ${additional_payment} dollars.`);
alert('You are THE BEST CUSTOMER ever! Would you like smth else?');

alert('SECOND solution (traditional)');
//+ округление
let sum_of_money = Number(prompt('How much are you ready to spend on chocolate?'));
let price_per_chocolate = Number(prompt('What is a price per one chocolale bar?'));
let max_quantity = sum_of_money / price_per_chocolate;
let quantity = Math.floor(max_quantity * 1) / 1;
let change = sum_of_money - price_per_chocolate * quantity;
let round_change = Math.floor(change * 100) / 100;
alert(`Congrats! You can buy ${quantity} chocolate bars. Your change is ${round_change} dollars.`);
alert('Николай, ответьте, пожалуйста на 2 вопроса в коде после решения 8 задания. Спасибо!');

/* Николай, 2 ВОПРОСА:
1. Лучше расписывать подробно или писать формулой:
alert('Your change is ' + Math.floor((sum_of_money - price_per_chocolate * quantity) * 100) / 100);
2. С суммой покупки 77.57 и ценой 59.87 не работает корректно формула, хотя с 77.67 и 59.97 все нормально. Округление???
3. Бонусный вопрос)) Чем лучше добавлять пустые кавычки в конце промта let company = prompt('Какая компания создала JavaScript?','');?

СПАСИБО ЗА ОТВЕТЫ! */

alert('TASK 9');
let num = Number(prompt('Please type three-digit number!'));  
function reverse(num, r = 0){
    if(!num) return r;
    r =  r * 10  + num % 10;
    return reverse(Math.floor( num / 10), r);
}
alert('Your number backwords is ' + reverse(num));

/* Мой конспект
вариант очень подробный 
let sum_of_money = Number(prompt('How much are you ready to spend on chocolate?'));
let price_per_chocolate = Number(prompt('What is a price of one chocolale bar?'));
let max_quantity = sum_of_money / price_per_chocolate;
let quantity = Math.floor(max_quantity * 1) / 1;
alert('Congrats! You can buy ' + quantity);
let sum_to_pay = price_per_chocolate * quantity;
let change = sum_of_money - sum_to_pay;
alert('Your change is ' + change);*/

//ПРИМЕРЫ ИЗ КНИГИ

/*let value = true;
alert(typeof value); // boolean

value = String(value); // теперь value это строка "true"
alert(typeof value); // string*/

/*alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("Привет!") ); // true
alert( Boolean("") ); // false*/

/*
let accessAllowed;
let age = prompt('Сколько вам лет?', '');

if (age > 18) {
  accessAllowed = alert('accessAllowed');
} else {
  accessAllowed = alert('Не лезь, убьет!');
}

или
let accessAllowed = (age > 18) ? true : false; */

/*let age = prompt('Возраст?', 18);

let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message ); */

/*let company = prompt('Какая компания создала JavaScript?','');

(company == 'Netscape') ?
   alert('Верно!') : alert('Неправильно.');*/

/*let value = prompt('Введите число', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
} */

//ПРИОРИТЕТНОСТЬ операторов:   ! (не), && (и), || (или)

/*let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'Офис закрыт.' ); // это выходной
}*/

/*let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}*/

/*alert( !true ); // false
alert( !0 ); // true*/

/*if (age >= 14 && age <= 90)
if (!(age >= 14 && age <= 90))
if (age < 14 || age > 90)*/

/* Вход в систему - запрос пароля
let userName = prompt("Кто там?", '');

if (userName == 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass == 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass == '' || pass == null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName == '' || userName == null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}*/

//КОНСПЕКТ
//let a;
//a = 3;
//console.log(3 + 5);
//console.log(prompt('What is your name?'));
//alert('hello');
//confirm('hello');
//let ok = confirm('Are you ok?');
//let age = 1*(prompt('How old are you?'));
//let str = 33 + '';
//let str = String(33);
/*округление
let num = 123.444;
alert( Math.floor(num * 1) / 1 ); */
//let name = prompt('What is your name?');
//alert('Hello '+ name);
//let age = Number(prompt('How old are you?'));
//alert('Wish you were older:(')
//let future = age + 25;
//alert('In 25 years you will be' + future);
//alert(`Your change is ${round_change} dollars!`); 
