let numero = +prompt("Por favor ingrese un numero");

if (numero % 2 === 0) {
  alert("El número es par");
} else if (isNaN(numero)) {
  alert("El valor que ingresaste no es un numero");
} else {
  alert("El numero es impar");
}
