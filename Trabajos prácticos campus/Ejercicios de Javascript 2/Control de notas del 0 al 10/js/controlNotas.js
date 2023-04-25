let nota = parseInt(prompt("Por favor ingrese la nota del 0 al 10"));
console.log(nota);
while (isNaN(nota) || nota < 0 || nota > 10) {
  alert("El valor ingresado no es válido");
  nota = parseInt(prompt("Por favor ingrese la nota del 0 al 10"));
}

if (nota === 10) {
  alert("Sobresaliente");
} else if (nota === 8 || nota === 9) {
  alert("Notable");
} else if (nota === 7) {
  alert("Bien");
} else if (nota === 6 || nota === 5) {
  alert("Suficiente");
} else if (nota === 3 || nota === 4) {
  alert("Insuficiente");
} else if (nota <= 2) {
  alert("Muy Deficiente");
}
