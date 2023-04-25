const numero = parseInt(prompt("Ingrese un numero"));

while (isNaN(numero)) {
  numero = parseInt(prompt("Ingrese un numero"));
}

//  ? Ejercicio anterior
// if (numero % 2 === 0) {
//   alert(`El numero ${numero} es divisible por 2`);
// } else if (numero % 3 === 0) {
//   alert(`El numero ${numero} es divisible por 3`);
// } else if (numero % 5 === 0) {
//   alert(`El numero ${numero} es divisible por 5`);
// } else {
//   alert(`El numero ${numero} no es divisible por 2, 3, 5`);
// }

// ? Ejercicio actualizado

if (numero % 2 === 0 && numero % 3 === 0 && numero % 5 === 0) {
  alert(`El numero ${numero} es divisible por 2, 3 y 5`);
} else if (numero % 2 === 0 && numero % 3 === 0) {
  alert(`El numero ${numero} es divisible por 2 y 3`);
} else if (numero % 2 === 0 && numero % 5 === 0) {
  alert(`El numero ${numero} es divisible por 2 y 5`);
} else if (numero % 3 === 0 && numero % 5 === 0) {
  alert(`El numero ${numero} es divisible por 3 y 5`);
} else if (numero % 5 === 0) {
  alert(`El numero ${numero} es divisible por 5`);
} else if (numero % 3 === 0) {
  alert(`El numero ${numero} es divisible por 3`);
} else if (numero % 2 === 0) {
  alert(`El numero ${numero} es divisible por 2`);
}
