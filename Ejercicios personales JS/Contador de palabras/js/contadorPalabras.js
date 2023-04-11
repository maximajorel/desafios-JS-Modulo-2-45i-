palabra = prompt("Por favor ingrese una cadena de texto");
cantidadPalabras = 1;

for (let i = 0; i < palabra.length; i++) {
  if (palabra[i] === " ") {
    cantidadPalabras++;
  }
}
alert(`La cadena de texto tiene ${cantidadPalabras} palabras en total`);
