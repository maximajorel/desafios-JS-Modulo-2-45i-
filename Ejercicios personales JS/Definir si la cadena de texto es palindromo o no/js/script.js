let palabra = prompt("Por favor ingresá una palabra");
let palindromo = "";

for (let i = palabra.length - 1; i >= 0; i--) {
  palindromo = palindromo + palabra[i];
}

if (palabra === palindromo) {
  alert("La palabra si es un palindromo");
} else {
  alert("La palabra no es un palindromo");
}
