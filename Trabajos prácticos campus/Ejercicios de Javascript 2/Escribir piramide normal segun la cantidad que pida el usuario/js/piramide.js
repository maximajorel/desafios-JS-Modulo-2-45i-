let longitudPiramide = parseInt(
  prompt("Ingrese la longitud de la piramide hasta 50 filas")
);

while (
  isNaN(longitudPiramide) ||
  longitudPiramide < 1 ||
  longitudPiramide > 50
) {
  alert("Ingrese una longitud válida");

  longitudPiramide = parseInt(
    prompt("Ingrese la longitud de la piramide hasta 50 filas")
  );
}

for (let i = 1; i <= longitudPiramide; i++) {
  let filas = "";
  for (let j = 1; j <= i; j++) {
    filas = filas + i;
  }
  document.write(filas + "<br>");
}
