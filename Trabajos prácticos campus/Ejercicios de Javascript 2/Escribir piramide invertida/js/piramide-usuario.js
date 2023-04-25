let filasPiramide = parseInt(
  prompt("Indique la cantidad de filas que debe tener la piramide hasta 50")
);

while (isNaN(filasPiramide) || filasPiramide < 1 || filasPiramide > 50) {
  alert("Por favor, indique una cantidad válida");
  filasPiramide = parseInt(
    prompt("Indique la cantidad de filas que debe tener la piramide hasta 50")
  );
}
for (let i = filasPiramide; i >= 1; i--) {
  let fila = "";
  for (let j = 0; j < i; j++) {
    fila = fila + i;
  }
  document.write(fila + "<br>");
}
