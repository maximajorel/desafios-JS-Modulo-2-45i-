// Pido al usuario que me ingrese tres frases

let frase1 = prompt("Por favor ingresa la primera frase");
let frase2 = prompt("Por favor ingresa la segunda frase");
let frase3 = prompt("Por favor ingresa la tercera frase");

// Aca creo los arrays para luego almacenar las frases.

let fraseCorta = [];
let fraseLarga = [];
let fraseCompuesta = [];

// Ahora toca analizar cada frase y contar sus caracteres.

//Primero le doy el formato correspondiente al primer string, lo que hago aca es poner la primera letra en mayúsculas

let primeraLetra = frase1[0].toUpperCase();
let restoTexto = frase1.slice(1);
restoTexto = restoTexto.toLowerCase();
let textoConFormato = primeraLetra + restoTexto;

// Ahora vemos si tiene más de una oración, si es así, entonces pusheamos al array de frase compuesta.

if (textoConFormato.includes(". ") || textoConFormato.includes(".")) {
  textoConFormato = textoConFormato.toUpperCase();
  fraseCompuesta.push(textoConFormato);
}

// Vemos la primera frase,comprobamos la cantidad de caracteres. Aquí con el if preguntamos. Che, esta frase tiene menos caracteres que 20, 20 caracteres o más que 20? En este caso solo analiza la frase1.

if (textoConFormato.length < 20) {
  fraseCorta.push(textoConFormato);
} else if (textoConFormato.length >= 20) {
  fraseLarga.push(textoConFormato);
}

//Ahora le doy el formato correspondiente al segundo string, lo que hago aca es poner la primera letra en mayúsculas

primeraLetra = frase2[0].toUpperCase();
restoTexto = frase2.slice(1);
restoTexto = restoTexto.toLowerCase();
textoConFormato = primeraLetra + restoTexto;

// Ahora vemos si tiene más de una oración, si es así, entonces pusheamos al array de frase compuesta.

if (textoConFormato.includes(". ") || textoConFormato.includes(".")) {
  textoConFormato = textoConFormato.toUpperCase();
  fraseCompuesta.push(textoConFormato);
}

// Vemos la primera frase,comprobamos la cantidad de caracteres. Aquí con el if preguntamos. Che, esta frase tiene menos caracteres que 20, 20 caracteres o más que 20? En este caso solo analiza la frase1.

if (textoConFormato.length < 20) {
  fraseCorta.push(textoConFormato);
} else if (textoConFormato.length >= 20) {
  fraseLarga.push(textoConFormato);
}

//Por ultimo le doy el formato correspondiente al tercer string, lo que hago aca es poner la primera letra en mayúsculas

primeraLetra = frase3[0].toUpperCase();
restoTexto = frase3.slice(1);
restoTexto = restoTexto.toLowerCase();
textoConFormato = primeraLetra + restoTexto;

// Ahora vemos si tiene más de una oración, si es así, entonces pusheamos al array de frase compuesta.

if (textoConFormato.includes(". ") || textoConFormato.includes(".")) {
  textoConFormato = textoConFormato.toUpperCase();
  fraseCompuesta.push(textoConFormato);
}

// Vemos la primera frase,comprobamos la cantidad de caracteres. Aquí con el if preguntamos. Che, esta frase tiene menos caracteres que 20, 20 caracteres o más que 20? En este caso solo analiza la frase1.

if (textoConFormato.length < 20) {
  fraseCorta.push(textoConFormato);
} else if (textoConFormato.length >= 20) {
  fraseLarga.push(textoConFormato);
}

// Ahora mostramos los resultados por consola.

console.log(fraseCorta); //Muestro array con frases cortas
console.log(fraseLarga); //Muestro array con frases largas
console.log(fraseCompuesta); //Muestro array con frases que tienen más de una oración
