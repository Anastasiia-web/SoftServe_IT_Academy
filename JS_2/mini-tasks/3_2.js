//The task is to alert a symbol which is on the one key as this number on the keybord.

let n = prompt('Enter a number from 0 to 9');

n = (n == 0) ? alert(')') : (n == 1) ? alert('!') : (n == 2) ? alert('@'):

(n == 3) ? alert('#') : (n == 4) ? alert('$') : (n == 5) ? alert('%'):

(n == 6) ? alert('^') : (n == 7) ? alert('&') : (n == 8) ? alert('*'): (n == 9) ? alert('(') : '' ;