function count() {
width = document.getElementById('width').value;
length = document.getElementById('length').value;
height = document.getElementById('height').value;
if(width == "" || width < 0 || width > 1000){
alert("Please enter corect WIDTH!");
} else if(length == "" || length < 0 || length > 1000){
alert("Please enter corect LENGTH!");
} else if(height == "" || height < 0 || height > 1000){
alert("Please enter corect HEIGHT!");
} else {
paint_consumption = 16;
area = (parseFloat (width) + parseFloat (length)) * 2 * parseFloat (height);
document.getElementById('area').innerHTML = `Area of the room: ${area} sq.m.`;
quantity = Math.ceil(area / paint_consumption);
document.getElementById('quantity').innerHTML = `Max amount of paint you need: ${quantity} litres.`;
}
}
/*
let num1 = prompt("enter a number");
let answer = Math.ceil(num1); округление в сторону большего числа
alert(answer); 

Math.round() традиционное математическое округление
parseFloat() преобразование строк в числа, вычлененяя цифры из строк
*/