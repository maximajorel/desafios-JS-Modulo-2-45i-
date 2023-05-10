let numeroAleatorio;
function empezarJuego() {
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  // Acá quito el boton de comenzar juego
  let botonComenzar = document.getElementById("comenzar-juego");
  botonComenzar.style.display = "none";
  // Y ahora muestro el contenedor del juego
  let contenedorJuego = document.getElementById("contenedor-juego");
  contenedorJuego.style.display = "flex";
}
function verificarNumero() {
  const numeroUsuario = document.getElementById("numero-usuario").value;
  const textoPistas = document.getElementById("texto-pistas");
  if (!numeroUsuario || numeroUsuario < 1 || numeroUsuario > 100) {
    textoPistas.innerHTML = "Por favor, ingrese un numero válido";
  } else if (numeroUsuario > numeroAleatorio) {
    textoPistas.innerHTML = `El numero ${numeroUsuario} es mayor al numero aleatorio`;
  } else if (numeroUsuario < numeroAleatorio) {
    textoPistas.innerHTML = `El numero ${numeroUsuario} es menor al numero aleatorio`;
  } else if (numeroUsuario == numeroAleatorio) {
    textoPistas.innerHTML = `Felicidades, acertaste el numero, este era el número ${numeroAleatorio}`;
  }
}
console.log(numeroAleatorio);
