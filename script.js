// Sentencias de control
let condicion = true;

// If, else cuando la condición es verdadera
if (condicion) {
  console.log("La condición es verdadera");
  console.log("Fin del programa");
} else {
  console.log("La condición es falsa");
  console.log("Fin del programa");
}

// If, else cuando la condición es falsa
condicion = false;

if (condicion) {
  console.log("La condición es verdadera");
  console.log("Fin del programa");
} else {
  console.log("La condición es falsa");
  console.log("Fin del programa");
}

// Operador ternario
// Sintaxis: condición ? valorSiVerdadero : valorSiFalso
let resultado = condicion ? "La condición es verdadera" : "La condición es falsa";
console.log(resultado);

let edad = 10;
let mayor = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mayor);

// Ejemplo: número positivo o negativo
let num = 5;
if (num > 0) {
  console.log("El número es positivo");
} else {
  console.log("El número es negativo");
}

// If, else if
let numero = 2;
if (numero === 1) {
  console.log("El número es uno");
} else if (numero === 2) {
  console.log("El número es dos");
} else if (numero === 3) {
  console.log("El número es tres");
} else {
  // Si no es ninguno de los anteriores
  console.log("Número desconocido");
}

// Estaciones del año según el mes
let mes = 7;
let estacion;

if (mes === 1 || mes === 2 || mes === 12) {
  estacion = "invierno";
} else if (mes === 3 || mes === 4 || mes === 5) {
  estacion = "primavera";
} else if (mes === 6 || mes === 7 || mes === 8) {
  estacion = "verano";
} else if (mes === 9 || mes === 10 || mes === 11) {
  estacion = "otoño";
} else {
  console.log("Valor no válido");
}
console.log(estacion);

// Switch case
let caso = 2;
let texto = "Valor desconocido";

switch (caso) {
  case 1:
    texto = "Número 1";
    break;
  case 2:
    texto = "Número 2";
    break;
  case 3:
    texto = "Número 3";
    break;
  case 4:
    texto = "Número 4";
    break;
  default:
    texto = "Valor desconocido";
}


