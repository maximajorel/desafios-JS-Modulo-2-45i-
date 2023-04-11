// Crear un Array con al menos 15 elementos que compartan tipo y características
let colores = [
  "Blanco",
  "Azul",
  "Negro",
  "Rosa",
  "Verde",
  "Violeta",
  "Naranja",
  "Amarillo",
  "Rojo",
  "Dorado",
  "Marrón",
  "Plateado",
  "Cían",
  "Magenta",
  "Rojo Rolling Code",
];

// Utilizar el método push() para agregar un elemento al final del array

colores.push("Índigo");
// console.log(colores);

// Utilizar el método pop() para eliminar el ultimo elemento del array
colores.pop();
// console.log(colores);

//Utilizar el método unshift() para agregar un nuevo elemento al inicio del array
colores.unshift("Lavanda");
// console.log(colores);

// Utilizar el método slice() para crear un nuevo array que contenga los elementos desde la posición 2 a hasta la posición 4 del array original.

let arraySlice = colores.slice(1, 4);
// console.log(arraySlice);

// Utilizar el método splice() para eliminar el segundo elemento del array y agregar dos nuevos elementos en su lugar

// Aca lo que hago es lo siguiente, dentro del spice el primer numero es en que index voy a trabajar, y en el segundo numero cuantos elementos se eliminan. En este caso laburo en el indice uno (para seleccionar el segundo valor de la lista), e indico que voy a eliminar un valor. Luego adiciono dos valores nuevos.

colores.splice(1, 1, "Rojo Rayo McQueen", "Violeta Twitch");
// console.log(colores);

// Voy a crear dos nuevos arrays para usar el concat()

const frutas = ["Manzana", "Banana", "Sandía", "Mango"];
const verduras = ["Lechuga", "Pepino", "Apio"];

// Aquí uso el concat, creando un nuevo array cuyo valor va a ser la union del array frutas y verduras.

const productosDeVerduleria = frutas.concat(verduras);

// console.log(productosDeVerduleria);

// Usar el método sort() para ordenar alfabéticamente un array.

productosDeVerduleria.sort();
// console.log(productosDeVerduleria);

// Ahora uso reverse() para invertir el orden del array.

productosDeVerduleria.reverse();
// console.log(productosDeVerduleria);

// Utilizo el método join() para convertir el array en una cadena de texto separada por comas.

const nombres = ["Julián", "Paulo", "Nelson", "Melany", "Máximo"];
const separador = ",";

const nombresSeparadosConComa = nombres.join(separador);
// console.log(nombresSeparadosConComa);

// Utilizar el método indexOf() para saber la posición del elemento manzana.

const indiceDeManzana = frutas.indexOf("Manzana");
// console.log(indiceDeManzana);

// Utilizar el método includes() para saber si "pera" está en el array.

let estaPeraEnElArray = frutas.includes("Pera");

// console.log(estaPeraEnElArray); // false

frutas.push("Pera");

estaPeraEnElArray = frutas.includes("Pera");

// console.log(estaPeraEnElArray); // true
