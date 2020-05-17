// The task 3: return the shortest word in the sentence

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
