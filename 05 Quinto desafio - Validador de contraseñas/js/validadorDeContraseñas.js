// Aquí pido al usuario que ingrese su contraseña.

const contraseña = prompt("Por favor ingrese su contraseña");

// Aca lo que creo son variables con valores booleanos con los requisitos que debe cumplir la contraseña.

let minimaLongitud = false;
let unaLetraMinuscula = false;
let unaLetraMayuscula = false;
let unNumero = false;

// Primero verifico si la contraseña tiene la minima longitud requerida

if (contraseña.length >= 8) {
  //Aquí pregunto si la minima longitud es mayor o igual que ocho caracteres
  minimaLongitud = true;
}

// Ahora lo que hago es crear un bucle que verifique caracter por caracter que verifica el resto de condiciones

for (
  let indiceCaracter = 0;
  contraseña.length > indiceCaracter;
  indiceCaracter++
) {
  // Aca lo que hago es un bucle, creo una variable que funcionara como el indice de cada letra o numero, esta variable se va a incrementar de uno haciendo funcionar el bucle hasta que el largo de la contraseña no sea mayor al indice.

  let caracter = contraseña.charAt(indiceCaracter); // Aca lo que hago es utilizar la variable de indiceCaracter para crear una variable nueva que me diga que caracter tengo que revisar, lo que hace charAt=() es extraer el caracter que se encuentra en la posición que le indique indiceCaracter

  if (caracter >= "A" && caracter <= "Z") {
    // Al parecer cada caracter se representa con un numero único, entonces puedo comparar con los operadores si se cumplen ambas condiciones con el operador lógico &&
    unaLetraMayuscula = true;
  } else if (caracter >= "a" && caracter <= "z") {
    unaLetraMinuscula = true;
  } else if (caracter >= "0" && caracter <= "9") {
    unNumero = true;
  }
}

// Por ultimo tengo que verificar si se cumplen todas las condiciones, de no ser así explicar que esta mal

if (unaLetraMayuscula && unaLetraMinuscula && unNumero && minimaLongitud) {
  alert("La contraseña que ha ingresado cumple las condiciones.");
} else if (!unaLetraMayuscula) {
  alert("La contraseña ingresada debe contener al menos una letra mayúscula.");
} else if (!unaLetraMinuscula) {
  alert("La contraseña ingresada debe contener al menos una letra minúscula.");
} else if (!unNumero) {
  alert("La contraseña debe contener al menos un numero.");
} else if (!minimaLongitud) {
  alert("La contraseña debe contener al menos 8 caracteres.");
}
