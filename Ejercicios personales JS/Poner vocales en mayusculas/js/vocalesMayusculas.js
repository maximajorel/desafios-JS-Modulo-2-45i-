let cadenaDeTexto = prompt("Por favor ingresá tu cadena de texto");

let resultado = "";

for (let i = 0; i < cadenaDeTexto.length; i++) {
  let letra = cadenaDeTexto.charAt(i);
  if (
    letra == "a" ||
    letra == "e" ||
    letra == "i" ||
    letra == "o" ||
    letra == "u" ||
    letra == "A" ||
    letra == "E" ||
    letra == "I" ||
    letra == "O" ||
    letra == "U"
  ) {
    letra = letra.toUpperCase();
  }
  resultado = resultado + letra;
}
alert(resultado);
