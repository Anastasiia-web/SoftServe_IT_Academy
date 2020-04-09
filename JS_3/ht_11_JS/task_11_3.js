// The task 3: return the shortest word in the sentence
//READY!
/*
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
It's length is ${n.length}.`);
*/


/* МОЁ ГОТОВО ДЛЯ 1 ЦИКЛА 
let s = 'What a suprize for me!'
let symbols = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
let clean = s.replace(symbols, '')
//console.log(clean)
let w = clean.split(' ')
//console.log(w)
let word = (w[0].length < 2 ) ? console.log(w[0]) :
(w[1].length < 2) ? console.log(w[1]) :
(w[2].length < 2) ? console.log(w[2]) :
(w[3].length < 2) ? console.log(w[3]) :
(w[4].length < 2) ? console.log(w[4]) : '';
/*
НЕ ЗНАЮ КАК ПРИКРЕПИТЬ ПРОДОЛЖЕНИЕ
else {
  if (w[0].length < 3 ) {
    console.log(w[0])
  } else if (w[1].length < 3) {
    console.log(w[1])
  } else if (w[2].length < 3) {
    console.log(w[2])
  } else if (w[3].length < 3) {
    console.log(w[3])
  } else if (w[4].length < 3) {
    console.log(w[4])
  } else {
    if (w[0].length < 4 ) {
      console.log(w[0])
    } else if (w[1].length < 4) {
      console.log(w[1])
    } else if (w[2].length < 4) {
      console.log(w[2])
    } else if (w[3].length < 4) {
      console.log(w[3])
    } else if (w[4].length < 4) {
      console.log(w[4])
    } 
  }
}
*/

/*ГОТОВО моё ДЛЯ МНОЖЕСТВА (НЕОПТИМИЗИРОВАНО ПОД КОЛ-ВО СЛОВ И ВООБЩЕ)
let s = 'What a suprize for me!'
let symbols = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
let clean = s.replace(symbols, '')
//console.log(clean)
let w = clean.split(' ')
//console.log(w)
if (w[0].length < 2 ) {
  console.log(w[0])
} else if (w[1].length < 2) {
  console.log(w[1])
} else if (w[2].length < 2) {
  console.log(w[2])
} else if (w[3].length < 2) {
  console.log(w[3])
} else if (w[4].length < 2) {
  console.log(w[4])
} else {
  if (w[0].length < 3 ) {
    console.log(w[0])
  } else if (w[1].length < 3) {
    console.log(w[1])
  } else if (w[2].length < 3) {
    console.log(w[2])
  } else if (w[3].length < 3) {
    console.log(w[3])
  } else if (w[4].length < 3) {
    console.log(w[4])
  } else {
    if (w[0].length < 4 ) {
      console.log(w[0])
    } else if (w[1].length < 4) {
      console.log(w[1])
    } else if (w[2].length < 4) {
      console.log(w[2])
    } else if (w[3].length < 4) {
      console.log(w[3])
    } else if (w[4].length < 4) {
      console.log(w[4])
    } 
  }
}
*/
/*//МОЕ ДЛЯ больше ОДНОЙ БУКВЫ-СЛОВА без варианта, что есть больше слов и из двух-трех слов слова
let s = 'What a suprize for me!!'
let symbols = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
let clean = s.replace(symbols, '')
//console.log(clean)
let w = clean.split(' ')
//console.log(w)
if (w[0].length < 2 ) {
  console.log(w[0])
} 
if (w[1].length < 2) {
  console.log(w[1])
}
if (w[2].length < 2) {
  console.log(w[2])
}
if (w[3].length < 2) {
  console.log(w[3])
}
if (w[4].length < 2) {
  console.log(w[4])
}
*/



/* МОИ РАССУЖДЕНИЯ И ПОИСКИ ИСТИНЫ))
let browserType = 'mozilla is a browser! f g g';
browserType.length;
let symbols = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
//console.log(browserType.length)
let w_s = browserType.replace(symbols, '')
let spl = w_s.split(' ')
//console.log(browserType.split(' ')) поделили на подстроки (слова)
//console.log(w_s.split(' '))
//console.log(browserType.replace(symbols, '')) убрали символы
//console.log(spl)
let l = spl.length
//console.log(spl[1].length) // длина слова по индексу в массиве
if ((spl[0].length) <= 1 ) {
  console.log(spl[0]) // показали слово, если в нем больше или равно 1 символу
}
if ((spl[1].length) <= 1 ) {
  console.log(spl[1]) // показали слово, если в нем больше или равно 1 символу
}
if ((spl[2].length) <= 1 ) {
  console.log(spl[2]) // показали слово, если в нем больше или равно 1 символу
}
if ((spl[3].length) <= 1 ) {
  console.log(spl[3]) // показали слово, если в нем больше или равно 1 символу
}
if ((spl[4].length) <= 1 ) {
  console.log(spl[4]) // показали слово, если в нем больше или равно 1 символу
}
if ((spl[5].length) <= 1 ) {
  console.log(spl[5]) // показали слово, если в нем больше или равно 1 символу
}
if ((spl[6].length) <= 1 ) {
  console.log(spl[6]) // показали слово, если в нем больше или равно 1 символу
}
if (spl[0].length >= 1 || spl[1].length >= 1 || spl[2].length >= 1 || spl[3].length >= 1 || spl[4].length >= 1 || spl[5].length >= 1 || spl[6].length >= 1 || spl[7].length >= 1 ) {
  console.log()
}*/

/*ЕЩЕ ОДНО РЕШЕНИЕ ДЛЯ ДЛИННОГО
function findLongestWord (input) {
  return input
    .split(/\W+/)
    .reduce(
      function (longest, word) {
        return word.length > longest.length
          ? word
          : longest;
      }, 
      ''
    );
}

console.log(findLongestWord('aaa bbbbbbbb !ccc!!!!!!!!!!!!!!')); // bbbbbbbb
console.log(findLongestWord('aaa bb_b')); // bb_b*/


//РЕШЕНИЕ С REPLACE И БЕЗ ЗНАКОВ ДЛЯ САМОГО ДЛИННОГО
/*function findLongestWord(str) {
  var punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
  return str.replace(punctRE, '').split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
};


console.log(findLongestWord('This, -/ is #! an $ % ^ & * ex32ample ;: {} of a = -_432 string dsa35!with `~)() punctuation'));

*/

//готово если не придираться к знакам))

/*
const findShortestWord = function(str) {
  if (!/^[a-zA-Z0-9\s]*$/.test(str)) {
    return 'содержит посторонние символы!';
  }
  let arrStr = str.split(' ');
  let shortestWord = arrStr[0];
  for (let i = 1; i < arrStr.length; i++) {
    if (arrStr[i].length < shortestWord.length) {
      shortestWord = arrStr[i];
    }
  }
  return shortestWord;
};
  let a = prompt('Give a sentence!');
  alert(findShortestWord(a));*/

/*
    РЕШЕНИЕ ДЛЯ САМОГО КОРОТКОГО СЛОВА
    const findShortestWord = function(str) {
      let arrStr = str.split(' ');
      let shortestWord = arrStr[0];
      for (let i = 1; i < arrStr.length; i++) {
        if (arrStr[i].length < shortestWord.length) {
          shortestWord = arrStr[i];
        }
      }
      return shortestWord;
    };
    let a = prompt('Give a sentence!');
  
    console.log(
      findShortestWord(a));
  */

  // Вызовы функции для проверки
  /*console.log(
    findShortestWord("The quick brown fox jumped over the lazy dog")
  ); // вернет 'jumped'*/
  
  /*ГОТОВОЕ РЕШЕНИЕ ДЛЯ КОРОТКОГО

  const findShortestWord = function(str) {
    {
    if (!/^[a-zA-Z0-9\s]*$/.test(str)) {
      return 'содержит посторонние символы!';
    }
    let arrStr = str.split(' ');
    let shortestWord = arrStr[0];
    for (let i = 1; i < arrStr.length; i++) {
      if (arrStr[i].length < shortestWord.length) {
        shortestWord = arrStr[i];
      }
    }
    return shortestWord;
  };
  
console.log(
    findShortestWord("The quick brown fox jumped over the lazy dog")
  );
  console.log(
    findShortestWord("Google do a gooooogle roll")
  ); // вернет 'Google'
  
  console.log(
    findShortestWord("May the force be with! you")
  ); // вернет 'force'
*/
//работает пример
/*
  const findLongestWord = function(str) {
    if (!/^[a-zA-Z0-9\s]*$/.test(str)) {
      return 'содержит посторонние символы!';
    }
    let arrStr = str.split(' ');
    let longestWord = arrStr[0];
    for (let i = 1; i < arrStr.length; i++) {
      if (arrStr[i].length > longestWord.length) {
        longestWord = arrStr[i];
      }
    }
    return longestWord;
  };
  
  // Вызовы функции для проверки
  console.log(
    findLongestWord("The quick brown fox jumped over the lazy dog")
  ); // вернет 'jumped'
  
  console.log(
    findLongestWord("Google do a  gooooogle roll")
  ); // вернет 'Google'
  
  console.log(
    findLongestWord("May the force be with! you")
  ); // вернет 'force'
  */


/*
const findLongestWord = function(str) {
  let arrStr = str.split(' ');
  let wordLength = 0;
  let longestWord;

  for (let i = 0; i < arrStr.length; i += 1) {
    wordLength = arrStr[1].length;

    if (arrStr[i].length > wordLength) {
      longestWord = arrStr[i];

      return longestWord;
    }

  }
}

/*

let arr = ["Яблоко", "Апельсин", "Груша"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}

*/
/*console.log (strSplit)
console.log(strSplit[2]) // выводит слово из массива по номеру
console.log(s[2]) //выводит символ из строки по номеру
console.log(strSplit.length) // выводит кол-во слов в предложении
*/


//for (var i=0; i<=s.length-1; i++) 
//console.log(s[2])


//console.log( s[s.length-1] ) последний символ
/* разбить по символам предложение
/*(let char of "what a fuck") {
    console.log(char);
}*/

/*let str = 'Ослик Иа-Иа посмотрел на виадук';

let target = 'Иа'; // цель поиска

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Найдено тут: ${foundPos}` );
  //pos = foundPos + 1; // продолжаем со следующей позиции
}*/




/*for (let char of "Hello") {
    console.log(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т. д.)
  }
*/


//alert( s.length );


//console.log( s[4] )



/*let str = `Hello`;

// получаем первый символ
alert( str[0] ); // H
alert( str.charAt(0) ); // H

// получаем последний символ
alert( str[str.length - 1] ); // o*/

/*let s = "What a surprise!"
let strSplit = s.split(' '); //деление строки на массивы из слов
console.log( strSplit)
console.log(strSplit[2]) //показывает слово из массива по номеру
const f = function(str) {
  if (!/^[a-zA-Z0-9\s]*$/.test(str)) {
    return (strSplit != undefined);
  }
}*/


//работающий пример для переделки
/*const findLongestWord = function(str) {
    let arrStr = str.split(' ');
    let longestWord = arrStr[0];
    for (let i = 1; i < arrStr.length; i++) {
      if (arrStr[i].length > longestWord.length) {
        longestWord = arrStr[i];
      }
    }
    return longestWord;
  };
  */
 /*function findShortestWord(str) {
  let kozles = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
  return str.replace(kozles, '').split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
};

console.log(findShortestWord('This, -/ is #! an $ % ^ & * ex32ample ;: {} of a = -_432 string dsa35!with `~)() punctuation'));

*/
//Готово без учета знаков короткое
/*

let s=new String();

let wordArr=new Array();

let maxNumber=new String();

let minNumber=new String();

minString="";
s = prompt("Введите строку");
minString=s.substring(s.lastIndexOf(" "));

wordArr=s.split(" ");

for (var i=0 in wordArr) {
  if (wordArr[i].length<minString.length)
  {
  minString=wordArr[i];
  }
}
alert("Самое короткое слово: "+minString);

*/
/* Для слова
let w = 'common'
console.log(w.length)
if (w.length = 1) {
console.log(w)
}*/


/*
let i = 3;
while(i>0) {
  console.log(i);
  (i--);
}*/