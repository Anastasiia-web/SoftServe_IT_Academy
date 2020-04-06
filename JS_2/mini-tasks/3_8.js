//The task is to check if a circle fiits a square.

let circumference = Number(prompt('Enter any number for circumference length.'))
let square_perimeter = Number(prompt('Enter any number for square perimeter.'))

let square_side = square_perimeter / 4 

let radius_from_the_square = square_side / 2

let new_circumference = radius_from_the_square * (2 * 3.14 )

if (new_circumference >= circumference) {
    alert('Inscribes circle!')
} else if (new_circumference < circumference) {
    alert('The circle will not fit into the square')
}