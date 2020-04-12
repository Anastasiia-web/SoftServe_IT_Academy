function count() {
width = document.getElementById('width').value;
length = document.getElementById('length').value;
height = document.getElementById('height').value;
if(width == ""){
alert("ENTER WIDTH!");
} else if(length == ""){
alert("ENTER LENGTH!");
} else if(height == ""){
alert("ENTER HEIGHT!");
} else {
paint_consumption = 8;
area = (parseFloat (width) + parseFloat (length)) * 2 * parseFloat (height);
document.getElementById('area').innerHTML = `Area of the room: ${area} sq.m.`;
quantity = area / paint_consumption;
document.getElementById('quantity').innerHTML = `The amount of paint you need: ${quantity} litres.`;
}
}
