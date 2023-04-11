let palabra = prompt("Por favor ingrese una palabra o cadena de texto");
let vocales = 0;

for (let i = 0; i < palabra.length; i++) {
  if (
    palabra[i] == "A" ||
    palabra[i] == "E" ||
    palabra[i] == "I" ||
    palabra[i] == "O" ||
    palabra[i] == "U" ||
    palabra[i] == "a" ||
    palabra[i] == "e" ||
    palabra[i] == "i" ||
    palabra[i] == "o" ||
    palabra[i] == "u"
  ) {
    vocales++;
  }
}

alert(`Su palabra o frase "${palabra}" tiene ${vocales} vocales`);
