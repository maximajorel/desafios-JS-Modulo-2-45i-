// Le pido el año al usuario

let año = parseInt(prompt("Por favor ingrese el año"));
let esBisiesto = false;

// Ahora con un if veo si el año cumple las condiciones

if (año % 4 === 0) {
  if (año % 100 === 0) {
    if (año % 400 === 0) {
      esBisiesto = true;
    }
  } else {
    esBisiesto = true;
  }
}

// Ahora muestro los mensajes

if (esBisiesto) {
  alert(`El año ${año} si es bisiesto`);
} else {
  alert(`El año ${año} no es bisiesto`);
}
