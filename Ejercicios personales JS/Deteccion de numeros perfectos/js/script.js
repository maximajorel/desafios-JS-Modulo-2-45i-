let numero = +prompt("Ingrese un numero para verificar si es perfecto");
let sumaDeDivisores = 0;

for (let i = 1; i < numero; i++) {
  if (numero % i === 0) {
    sumaDeDivisores = sumaDeDivisores + i;
  }
}

if (numero === sumaDeDivisores) {
  alert(`El numero ${numero} si es un número perfecto.`);
} else {
  alert(`El numero ${numero} no es un número perfecto.`);
}
