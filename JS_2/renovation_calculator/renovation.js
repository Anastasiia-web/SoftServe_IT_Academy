/* Готовое РЕШЕНИЕ для одной комнаты
let width = prompt('What is the width of the wall in the room?');
let length = prompt('What is the length of the wall in the room?');
let height = prompt('What is the height of the wall in the room?');

let quantity_windows = prompt('How many windows in the room?');
let window_height = prompt('What is the height of the window?');
let window_width = prompt('What is the width of the window?');

let door_quantity = prompt('How many doors in the room?');
let door_height = prompt('What is the height of the door?');
let door_width = prompt('What is the width of the door?');

let area_windows = window_width * window_height * quantity_windows;

let area_doors = door_width * door_height * door_quantity;

let office_area_general = (length + width) * 2 * height;

let surface_area_office_without_doors_windows = office_area_general - area_windows - area_doors;

alert('Area of the walls to paint excluding windows and doors areas in the office is ' + surface_area_office_without_doors_windows + 'square meters.');

let paint_tin = 16;
let quantity_paint_tin = Math.ceil(surface_area_office_without_doors_windows / 16);
12
alert('To paint the office you need ' + quantity_paint_tin + ' tins of paint.');*/

//Готовое РЕШЕНИЕ ДЛЯ ДВУХ КОМНАТ ОФИСА

/*let quantity_rooms = prompt('How many rooms in the office?');

if (quantity_rooms == 1) {
    let width = prompt('What is the width of the wall in the room?');
    let length = prompt('What is the length of the wall in the room?');
    let height = prompt('What is the height of the wall in the room?');

    let quantity_windows = prompt('How many windows in the room?');
    let window_height = prompt('What is the height of the window?');
    let window_width = prompt('What is the width of the window?');

    let door_quantity = prompt('How many doors in the room?');
    let door_height = prompt('What is the height of the door?');
    let door_width = prompt('What is the width of the door?');

    let area_windows = window_width * window_height * quantity_windows;

    let area_doors = door_width * door_height * door_quantity;

    let office_area_general = (length + width) * 2 * height;

    let surface_area_office_without_doors_windows = office_area_general - area_windows - area_doors;

    alert('Area of the walls to paint excluding windows and doors areas in the office is ' + surface_area_office_without_doors_windows + ' square meters.');

    let quantity_paint_tin = Math.ceil(surface_area_office_without_doors_windows / 16);

    alert('To paint the office you need ' + quantity_paint_tin + ' tins of paint.');

} else if (quantity_rooms == 2) {
    alert('Count area for each room separetely!');
    let width_1 = prompt('What is the width of the wall in the 1 room?');
    let length_1 = prompt('What is the length of the wall in the 1 room?');
    let height_1 = prompt('What is the height of the wall in the 1 room?');

    let quantity_windows_1 = prompt('How many windows in the 1 room?');
    let window_height_1 = prompt('What is the height of the window?');
    let window_width_1 = prompt('What is the width of the window?');

    let door_quantity_1 = prompt('How many doors in the 1 room?');
    let door_height_1 = prompt('What is the height of the door?');
    let door_width_1 = prompt('What is the width of the door?');

    let area_windows_first_room = window_width_1 * window_height_1 * quantity_windows_1;

    let area_doors_first_room = door_width_1 * door_height_1 * door_quantity_1;

    let first_room_area_general = (length_1 + width_1) * 2 * height_1;

    let surface_area_first_room_without_doors_windows = first_room_area_general - area_windows_first_room - area_doors_first_room;

    let width_2 = prompt('What is the width of the wall in the 2 room?');
    let length_2 = prompt('What is the length of the wall in the 2 room?');
    let height_2 = prompt('What is the height of the wall in the 2 room?');

    let quantity_windows_2 = prompt('How many windows in the 2 room?');
    let window_height_2 = prompt('What is the height of the window?');
    let window_width_2 = prompt('What is the width of the window?');

    let door_quantity_2 = prompt('How many doors in the 2 room?');
    let door_height_2 = prompt('What is the height of the door?');
    let door_width_2 = prompt('What is the width of the door?');

    let area_windows_second_room = window_width_2 * window_height_2 * quantity_windows_2;

    let area_doors_second_room = door_width_2 * door_height_2 * door_quantity_2;
   
    let second_room_area_general = (length_2 + width_2) * 2 * height_2;

    let surface_area_second_room_without_doors_windows = second_room_area_general - area_windows_second_room - area_doors_second_room;

    let surface_area_office_two_rooms = surface_area_first_room_without_doors_windows + surface_area_second_room_without_doors_windows;

    alert(`Area of the walls to paint excluding windows and doors areas in the whole office is ${surface_area_office_two_rooms} square meters.`);

    let quantity_paint_tin_2 = Math.ceil(surface_area_office_two_rooms / 16);

    alert('To paint the office you need ' + quantity_paint_tin_2 + ' tins of paint.');
}
    
else {
    alert('Help youself! Buy a calculator!');
}*/
