function getChoice() {
    return 'rgb(147, 242, 245)';
}
getAchoice.onclick = function() {
    my_answer.style.backgroundColor = getChoice();
}

function getColor() {
    return 'rgb(147, 242, 245)';
}

function count() {
    ans_1 = document.getElementById('my_answer').value;
    goodResult = 2;
    badResult = 0;

   if (ans_1 == 1) {
        next.style.backgroundColor = getColor();
        document.getElementById('number').innerHTML = goodResult;
    } else {
        correct.style.backgroundColor = getColor();
        document.getElementById('number').innerHTML = badResult;
    } 
}
  
function count2() {
    ans_2 = document.getElementById('my_answer2').value;
    goodResult = 2;
    badResult = 0;

   if (ans_2 == 2) {
        next.style.backgroundColor = getColor();
        document.getElementById('number').innerHTML = goodResult;
    } else {
        correct.style.backgroundColor = getColor();
        document.getElementById('number').innerHTML = badResult;
    } 
}

function count3() {
    ans_3 = document.getElementById('my_answer3').value;
    goodResult = 2;
    badResult = 0;

   if (ans_3 == 3) {
        next.style.backgroundColor = getColor();
        document.getElementById('number').innerHTML = goodResult;
    } else {
        correct.style.backgroundColor = getColor();
        document.getElementById('number').innerHTML = badResult;
    } 
}


/*
function count() {
    const ans_1 = document.getElementById('my_answer').value;
    let  start = 0;
    const goodResult = 2;
    let badResult = 0;

   if (ans_1 == 1) {
        next.style.backgroundColor = getColor();
        document.getElementById('number').innerHTML = start += goodResult;
    } else {
        correct.style.backgroundColor = getColor();
        document.getElementById('number').innerHTML = badResult;
    } 
}
*/






