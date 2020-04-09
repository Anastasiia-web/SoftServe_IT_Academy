//РАБОТАЕТ, НО НА КОНКРЕТНЫЙ символ и не зациклена
/*function find_occurences(str, char_to_count){
    return str.split(char_to_count).length - 1;
}
str = 'miS&&&sisKksippi';
let s = str.toLowerCase()
console.log(find_occurences(s, '&'))

*/
//ХОРОШЕЕ РЕШЕНИЕ, ТОЛЬКО НЕ УЧИТЫВАЕТ ЗНАКИ:()
  /*
  let a = "what is THE point";
  let s = a.toLowerCase()
  let b= {};
  for (let i=0; i<s.length; i++){
      if((s.match(new RegExp(s[i], "g"))).length > 1){
          b[s[i]]=(s.match(new RegExp(s[i], "g"))).length;
      }
  }
  console.log(b);
*/

/*
получается моё, но не циклом
let string = 'aajlkjjskdjfAlsAbbbbbbbbbbbbbbbbbj;gkejflksajfjskda';
let a = (string.match(/a/gi) || []).length
let b = (string.match(/b/gi) || []).length
if (a > b) { console.log(a)} else {console.log(b)} */


/* НЕ МОЁ РАБОТАЕТ С ОБЪЕКТОМ
function countAllCharacters(str) {
    var obj = {};
    if(str.length!==0){
      for(i=0;i<str.length;i++){
        var count = 0;
        for(j=0;j<str.length;j++){
          if(str[i] === str[j]){
            count++;
          }
        }
        if(!obj.hasOwnProperty(str[i])){
          obj[str[i]] = count;
        }
      }
    }
    return obj;
  }
  console.log(countAllCharacters('What is your string?'))*/

//работает моя но не циклом и надо указывать конкретный символ
/*function count() {
    for (let i = 65; i <= 220; i++) {
        console.log((string.match(/k/g) || []).length);
      }
    }
    let string = prompt('What is your string?')
    let s = string.toLowerCase()
    console.log(count(s));
    */


/*function findSimilarity(a, b) {
return (a == b) ? ('Bingo!') : ('Bad luck:(')
}
console.log(findSimilarity(2, 2))*/

/*let str = '';

for (let i = 0; i <= 20; i++) {
    alert( str );
}
alert( str );
// ABCDEFGHIJKLMNOPQRSTUVWXYZ*/


/*
let string = 'What a; fucking fuck';
let s = string.toLowerCase()
function count() {
for (let i = 65; i <= 220; i++) {
    console.log(("ahn;o87".match(/;/g) || []).length);
  }
  alert( str );

}*/

/*


________________

/*
/*
Вызываем латиницу и спецсимволы от 65 до 220!!!
let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
alert( str );
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

*/

/*
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  
  alert( checkSpam('buy ViAgRA now') );
  alert( checkSpam('free xxxxx') );
  alert( checkSpam("innocent rabbit") );
// 3*/
/* Более короткая форма для:

let sum = function(a, b) {
  return a + b;
};
*/


/*
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('А родители разрешили?');
    }
  }
  
  let age = prompt('Сколько вам лет?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Доступ получен' );
  } else {
    alert( 'Доступ закрыт' );
  }*/

/*КОНСПЕКТ
можно способы
1.
function findShortestWord() {
    if (a == b) return ('Bingo!');
} 
let a = 2;
let b = 2;
console.log(findShortestWord(a, b))

2.
function findShortestWord(a, b) {
    if (a == b) return ('Bingo!');
} 
console.log(findShortestWord(2, 2))

3.
function findShortestWord(a, b) {
if (a == b) return ('Bingo!'); 
if (a != b) return ('Bad luck:(');
}
console.log(findShortestWord(2, 3))

4.
function findShortestWord(a, b) {
(a == b) ? console.log ('Bingo!') :
(a != b) ? console.log('Bad luck:(') :'';
}
console.log(findShortestWord(2, 3))

!!! ЛУЧШИЙ ВАРИАНТ

function findShortestWord(a, b) {
return (a == b) ? ('Bingo!') : ('Bad luck:(')
}
console.log(findShortestWord(2, 2))

ЕЩЕ ОДИН КЛАССНЫЙ 

function best() {
(a == b) ? console.log(a) : console.log('No!');}
let a = 22;
let b = 28;
best();

!!!BEST OF THE BEST:
let sum = (a, b) => a + b;
alert( sum(1, 2) ); // 3

ПЕРЕДЕЛАНО В ФУНКЦИЮ BEST (обязательно вызвать ее внизу названием)

function best() {
let sum = (a, b) => a + b
alert ( sum(a, b) );
}
let a = 22;
let b = 33;
best();


/* Более короткая форма для:

let sum = function(a, b) {
  return a + b;
};
*/
/*
6.
function findShortestWord(a, b) {
(a == b) ? console.log ('Bingo!') :
(a != b) ? console.log('Bad luck:(') :'';
}
let a = prompt('Give a first number!')
let b = prompt('Give a second number!')
console.log(findShortestWord(a, b))


*/





/*const theSameNumbers = fuction(str)
for (let i = 1; i < arrStr.length; i++) {
if (a == b) {
console.log('Bingo!')
}
}
console.log(theSameNumbers(1,3))
//let number_given = prompt('Enter any number!')
    


const findShortestWord = function(str) {
    let symbols = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
    let clean = str.replace(symbols, '')
    let arrStr = clean.split(' ');
    let shortestWord = arrStr[0];
    for (let i = 1; i < arrStr.length; i++) {
    if (arrStr[i].length < shortestWord.length) {
    shortestWord = arrStr[i];
    }
    }
    return shortestWord;
    };
    let sentence = prompt('Type any sentence!')
    let n = findShortestWord(sentence);
    alert(`The shortest word in the sentence is ' ${findShortestWord(sentence)} '. 
    It's length is ${n.length}.`);*/



    /* ЗАПИСЬ В ДОКУМЕНТ)))

    document.write(string.match(/a/gi).length); *///


    /*var allowed = /[а-яё]/i;

// собираем информацию :

var results = Array.prototype.reduce.call("Подсчета кол-ва вхождений каждого символа в строке", function (data, letter) {

    if (allowed.test(letter)) {

        letter = letter.toLowerCase();

        if (data[letter] === undefined) {

            data[letter] = 0;

        }

        data[letter] += 1;
 }
return data;

}, {});

// выводим:

for (var letter in results) {

    alert('Символ "' + letter + '" повторяется "' + results[letter] + '" раз.');

}
*/
/*for (let i = 65; i <= 220; i++) {
    str += String.fromCodePoint(i);
  }
  alert( str );*/
