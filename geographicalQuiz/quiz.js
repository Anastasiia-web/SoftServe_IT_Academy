function count() {
    ans_1 = document.getElementById('my_answer').value;
    start = 0;
    result = start + 2;
    
    if(ans_1 == 1) {
    alert('Correct!');
    document.getElementById('score').innerHTML = 'YOUR SCORE IS ' + result;
    } else {
    alert('Try more!');
    document.getElementById('score').innerHTML = 'YOUR SCORE IS 0 \:(';
    }
}