// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingrese un numero"));
let numero3 = parseInt(prompt("Ingrese un numero"));

while (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
  numero1 = parseInt(prompt("Ingrese un numero"));
  numero2 = parseInt(prompt("Ingrese un numero"));
  numero3 = parseInt(prompt("Ingrese un numero"));
}

if (numero1 > numero2 && numero1 > numero3) {
  document.write(`El numero mayor es ${numero1}`);
} else if (numero2 > numero1 && numero2 > numero3) {
  document.write(`El numero mayor es ${numero2}`);
} else if (numero3 > numero1 && numero3 > numero2) {
  document.write(`El numero mayor es ${numero3}`);
} else {
  document.write("Los números son iguales");
}
