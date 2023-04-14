let frase = prompt("Por favor ingrese una cadena de texto");
let palabras = frase.trim().split(" ");
let cantidadPalabras = palabras.length;
console.log(palabras);
alert(`La cadena de texto tiene ${cantidadPalabras} palabras en total`);
