const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];
while (
  confirm(
    "Por favor ingrese el Numero DNI, en el caso que haya finalizado, presione cancelar"
  ) === true
) {
  let dni = parseInt(prompt("Por favor ingrese el Numero DNI"));
  if (isNaN(dni) || dni < 0 || dni > 99999999) {
    alert("Por favor ingrese un Numero DNI valido");
  } else {
    let resto = dni % 23;
    let letraDNI = letras[resto];
    alert(`La letra para el DNI N°${dni} es ${letraDNI}`);
  }
}
