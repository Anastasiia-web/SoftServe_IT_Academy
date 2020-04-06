let welcome = alert(`Welcome to Geographical Quiz! 
To became a winner answer 3 questions. Each question is 2 points. 
Score 6 points and become a NEW CHAMPION!`)
let start_score = 0
let points_sum_1 = 0 + 2
let points_sum_2 = 2 + 2
let points_sum_3 = 4 + 2

let question_1 = Number(prompt(`What is the capital of UKRAINE? 
Enter a number for your answer: 
1. NEW DELHI  
2. LONDON  
3. KIEV`))
if (question_1 == 1) {
    alert('Wrong answer :(')
} else if (question_1 == 2) {
    alert('Wrong answer :(')
} else if (question_1 == 3) {
    alert('Correct! You score ' + points_sum_1 + ' points)');
} 

let question_2 = Number(prompt(`What is the capital of THE  UNITED  KINGDOM? 
Enter a number for your answer: 
1. NEW DELHI  
2. LONDON  
3. KIEV`))
if (question_2 == 1) {
    alert('Wrong answer :(')
} else if (question_2 == 2) {
    if (question_1 == 3 && question_2 == 2) {
    alert('Correct! You score ' + points_sum_2 + ' points)')
    } else if (question_1 == 3 || question_2 == 2) {
        alert('Correct! You score ' + points_sum_1 + ' points)')
    }
} else if (question_2 == 3) {
    alert('Wrong answer :(')
} 

let question_3 = Number(prompt(`What is the capital of INDIA? 
Enter a number for your answer: 
1. NEW DELHI  
2. DELHI  
3. MUMBAI`))
if (question_3 == 1) {
    if (question_1 == 3 && question_2 == 2 && question_3 == 1) {
        alert(`Correct! You score ${points_sum_3} points.
Congrats! You are the CHAMPION)`)
    } else if (question_1 == 3 && question_3 == 1) {
        alert(`Correct! You score ${points_sum_2} points). 
It is not enought to became a CHAMPION :(`)
    } else if (question_2 == 2 && question_3 == 1) {
    alert(`Correct! You score ${points_sum_2} points). 
It is not enought to became a CHAMPION :(`)
    } else if (question_1 == 3 || question_2 || question_3) {
    alert(`Correct! You score ${points_sum_1} more points. 
It is not enought to became a CHAMPION :(`)
}
} else if (question_3 == 2) {
    if (question_1 == 3 && question_2 == 2) {
        alert(`Wrong answer:( Your quiz score is ${points_sum_2} points. 
It is not enought to became a CHAMPION :(`)
    } else if (question_1 == 3) {
        alert(`Wrong answer:( Your quiz score is ${points_sum_1} points. 
It is not enought to became a CHAMPION :(`)
    }
} else if (question_3 == 3) {
    if (question_1 == 3 && question_2 == 2) {
        alert(`Wrong answer:( Your quiz score is ${points_sum_2} points. 
It is not enought to became a CHAMPION :(`)
    } else if (question_1 == 3) {
        alert(`Wrong answer:( Your quiz score is ${points_sum_1} points. 
It is not enought to became a CHAMPION :(`)
    }
}
