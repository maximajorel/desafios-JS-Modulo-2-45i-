let numero1 = parseInt(prompt("Elige un numero entero para ser dividido"));
let numero2 = parseInt(prompt("Elige el divisor"));
resultado = numero1 / numero2;

if (numero1 % numero2 == 0) {
  alert(
    `Los números ${numero1} y ${numero2} si son divisibles entre si, dando como resultado ${resultado}`
  );
} else {
  alert("Esta division no tiene resto " + "0");
}
