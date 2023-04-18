// Pido al usuario que me ingrese tres frases

let frase1 = prompt("Por favor ingresa la primera frase");
let frase2 = prompt("Por favor ingresa la segunda frase");
let frase3 = prompt("Por favor ingresa la tercera frase");

// Aca creo los arrays para luego almacenar las frases.

let fraseCorta = [];
let fraseLarga = [];
let fraseCompuesta = [];

// Ahora toca analizar cada frase y contar sus caracteres.

//Primero le doy el formato correspondiente a los strings, lo que hago aca es poner la primera letra en mayúsculas
function formatearTexto(texto) {
  let primeraLetra = texto[0].toUpperCase();
  let restoTexto = texto.slice(1);
  restoTexto = restoTexto.toLowerCase();
  let textoConFormato = primeraLetra + restoTexto;
  return textoConFormato;
}
let frase1Formateada = formatearTexto(frase1);
let frase2Formateada = formatearTexto(frase2);
let frase3Formateada = formatearTexto(frase3);

// * INICIO ANÁLISIS PRIMERA FRASE

// Ahora vemos si tiene más de una oración, si es así, entonces pusheamos al array de frase compuesta.

if (frase1Formateada.includes(". ") || frase1Formateada.includes(".")) {
  frase1Formateada = frase1Formateada.toUpperCase();
  fraseCompuesta.push(frase1Formateada);
}

// Vemos la primera frase,comprobamos la cantidad de caracteres. Aquí con el if preguntamos. Che, esta frase tiene menos caracteres que 20, 20 caracteres o más que 20? En este caso solo analiza la frase1.

if (frase1Formateada.length < 20) {
  fraseCorta.push(frase1Formateada);
} else if (frase1Formateada.length >= 20) {
  fraseLarga.push(frase1Formateada);
}

// * INICIO ANÁLISIS SEGUNDA FRASE

// Ahora vemos si tiene más de una oración, si es así, entonces pusheamos al array de frase compuesta.

if (frase2Formateada.includes(". ") || frase2Formateada.includes(".")) {
  frase2Formateada = frase2Formateada.toUpperCase();
  fraseCompuesta.push(frase2Formateada);
}

// Vemos la segunda frase,comprobamos la cantidad de caracteres. Aquí con el if preguntamos. Che, esta frase tiene menos caracteres que 20, 20 caracteres o más que 20? En este caso solo analiza la frase2.

if (frase2Formateada.length < 20) {
  fraseCorta.push(frase2Formateada);
} else if (frase2Formateada.length >= 20) {
  fraseLarga.push(frase2Formateada);
}

// * INICIO ANÁLISIS TERCERA FRASE
// Ahora vemos si tiene más de una oración, si es así, entonces pusheamos al array de frase compuesta.

if (frase3Formateada.includes(". ") || frase3Formateada.includes(".")) {
  frase3Formateada = frase3Formateada.toUpperCase();
  fraseCompuesta.push(frase3Formateada);
}

// Vemos la tercera frase,comprobamos la cantidad de caracteres. Aquí con el if preguntamos. Che, esta frase tiene menos caracteres que 20, 20 caracteres o más que 20? En este caso solo analiza la frase3.

if (frase3Formateada.length < 20) {
  fraseCorta.push(frase3Formateada);
} else if (frase3Formateada.length >= 20) {
  fraseLarga.push(frase3Formateada);
}

// Ahora mostramos los resultados por consola.

console.log(fraseCorta); //Muestro array con frases cortas
console.log(fraseLarga); //Muestro array con frases largas
console.log(fraseCompuesta); //Muestro array con frases que tienen más de una oración
