// Generar numero Aleatorio
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
// Inicializo numero de intentos

let intentos = 0;

// Pido que ingrese un numero

let numeroUsuario = +prompt("Ingrese un numero entre el 1 y el 100");

// Ahora un bucle que vaya diciendo si el numero es mayor o menor

while (numeroUsuario !== numeroAleatorio) {
  if (numeroUsuario > numeroAleatorio) {
    alert("El numero que ingresaste es mayor al generado");
  } else if (numeroUsuario < numeroAleatorio) {
    alert("El numero que ingresaste es menor al generado");
  }
  intentos++;
  numeroUsuario = +prompt("Inténtelo de nuevo");
}
intentos++;
alert(
  `Felicidades adivinaste el numero, este era ${numeroAleatorio}, lo hiciste en ${intentos} intentos`
);
