const palabra = prompt("Ingrese una palabra");
const vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

for (let i = 0; i < palabra.length; i++) {
  letra = palabra[i];
  if (vocales.includes(letra)) {
    let vocalesEnPalabra = "";
    vocalesEnPalabra += letra;
    console.log(vocalesEnPalabra);
    document.write(
      `La palabra ${palabra} tiene la vocal ${vocalesEnPalabra} <br>`
    );
  }
}
