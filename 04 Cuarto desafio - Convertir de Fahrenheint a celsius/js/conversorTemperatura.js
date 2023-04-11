// Aquí pido que ingresen la temperatura en grados Fahrenheit, también convierto lo ingresado a un valor numérico
const gradosFahrenheit = +prompt(
  "Por favor ingrese la temperatura en Grados Fahrenheit"
);

// Aquí creo la variable que hará la conversión a los grados Celsius, también gracias a "Math.round()" redondeo para abajo si los decimales son < a .50 y para arriba si los decimales son >= a .50

const gradosCelsius = Math.round(((gradosFahrenheit - 32) * 5) / 9);

// Alerta que muestra el resultado al usuario

alert(
  `La temperatura que ingresaste fue ${gradosFahrenheit} en grados Fahrenheit que en grados Celsius son: ${gradosCelsius}`
);
