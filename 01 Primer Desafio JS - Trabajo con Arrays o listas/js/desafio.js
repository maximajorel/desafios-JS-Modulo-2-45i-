// Array 10 personajes de ficción

let personajesDeFiccion = [
  "Spider Man",
  "Batman",
  "Super Man",
  "Flash",
  "Dr Strange",
  "Iron Man",
  "Black Widow",
  "Capitan America",
  "Thor",
  "Hulk",
];

let numerosAleatorios = [12, 98, 23, 56, 28, 92, 75, 45, 3, 40];

// Mostrar en consola cada array

console.log(personajesDeFiccion);
console.log(numerosAleatorios);

// Agregar elementos del mismo tipo al final de cada array

personajesDeFiccion.push("Linterna Verde");
numerosAleatorios.push(456);

// Mostrar en consola cada array con los elementos agregados en cada array

console.log(personajesDeFiccion);
console.log(numerosAleatorios);

// Cambiar el valor de dos elementos que se encuentren en la segunda y quinta posición de cada array (tienen que ser del mismo tipo de dato)

personajesDeFiccion[1] = "Wonder Woman";
personajesDeFiccion[4] = "Aquaman";

// Mostrar por consola la suma entre los elementos en la segunda, tercera y sexta posición

let sumaDeNumerosDelArray =
  numerosAleatorios[1] + numerosAleatorios[2] + numerosAleatorios[5];
console.log(
  "La suma entre los elementos en la segunda, tercera, y sexta posición es:",
  sumaDeNumerosDelArray
);

// Al resultado de la suma, multiplicarlo por el ultimo elemento del array y mostrar el resultado por consola

console.log(sumaDeNumerosDelArray * numerosAleatorios[10]);
