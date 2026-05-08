let celsius;

while (true) {

    celsius = prompt("Ingresa la temperatura en grados Celsius:");

    celsius = Number(celsius);

    if (!isNaN(celsius)) {
        break;
    } else {
        console.log("Error: Ingresa un número válido");
    }
}

let kelvin = celsius + 273.15;
let fahrenheit = (celsius * 9 / 5) + 32;

console.log("Grados Kelvin: " + kelvin);
console.log("Grados Fahrenheit: " + fahrenheit);