let numero1 = prompt("Ingrese un numero");
let numero2 = prompt("Ingrese otro numero");

while (isNaN(numero1) || isNaN(numero2)) {
  numero1 = prompt("Ingrese un numero");
  numero2 = prompt("Ingrese otro numero");
}

if (numero1 > numero2) {
  document.write(`El número mayor es ${numero1}`);
} else if (numero2 > numero1) {
  document.write(`El número mayor es ${numero2}`);
} else {
  document.write(`Los números son iguales`);
}
