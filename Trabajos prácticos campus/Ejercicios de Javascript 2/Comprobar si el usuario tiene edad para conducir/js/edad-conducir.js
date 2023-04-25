let edad = parseInt(prompt("Ingresa tu edad"));
console.log(edad);

while (isNaN(edad) || edad < 0 || edad > 120) {
  alert("Ingrese una edad valida");
  edad = parseInt(prompt("Ingresa tu edad"));
}

if (edad >= 18) {
  alert("Tienes edad para conducir");
} else {
  alert("No tienes edad para conducir");
}
