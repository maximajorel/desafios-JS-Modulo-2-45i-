let suma = 0;

while (
  confirm(
    `Por favor ingrese un numero para sumar, en el caso que desee ver el resultado presione "Cancelar"`
  ) === true
) {
  let num = parseInt(prompt("Ingrese un numero"));
  if (isNaN(num)) {
    alert("Por favor ingrese un numero valido");
  } else {
    suma += num;
  }
}
alert(`La suma es: ${suma}`);
