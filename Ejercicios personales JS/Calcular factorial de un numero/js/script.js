let numero = +prompt("Por favor ingrese un numero para calcular su factorial");
let factorial = 1;

// Calculo el factorial

if (numero >= 0) {
  for (let i = 1; i <= numero; i++) {
    factorial = factorial * i;
  }
  alert(`El factorial de ${numero} es ${factorial}`);
} else {
  alert(`Por favor ingrese un numero válido`);
}
