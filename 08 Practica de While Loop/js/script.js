const numero = parseInt(prompt("Por favor, ingrese un número"));
let contador = 1;
let suma = 0;

if (isNaN(numero)) {
  alert("Por favor ingrese un número valido");
  location.reload();
} else {
  while (contador <= numero) {
    suma = suma + contador;
    contador++;
  }
}
// console.log(`La suma de los primeros ${numero} da un total de ${suma}`);
alert(`La suma de los primeros ${numero} da un total de ${suma}`);
