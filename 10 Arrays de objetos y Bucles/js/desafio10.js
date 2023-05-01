//* / === Ejercicio 1 ===

// ? Calcular el total de sueldos del siguiente array de personas:

const personas = [
  {
    nombre: "Juan",
    edad: 25,
    ciudad: "Buenos Aires",
    sueldo: 50000,
  },
  {
    nombre: "María",
    edad: 30,
    ciudad: "Rosario",
    sueldo: 65000,
  },
  {
    nombre: "Pedro",
    edad: 40,
    ciudad: "Córdoba",
    sueldo: 80000,
  },
  {
    nombre: "Lucía",
    edad: 35,
    ciudad: "Mendoza",
    sueldo: 75000,
  },
];
const sueldoHTML = document.getElementById("sueldo");
let totalSueldos = 0;

// ! En este bucle sumo todos los sueldos

for (let CalcularSueldos of personas) {
  let sueldo = parseInt(CalcularSueldos.sueldo);
  totalSueldos += sueldo;
}
// ! Aquí escribo el total de la suma de todos los sueldos

sueldoHTML.innerHTML = `$${totalSueldos}`;

//* === Ejercicio 2 ===

// ? A partir del mismo array de personas crear un nuevo array solo con los mayores de 30.
const tablaMayores = document.getElementById("tablaSueldoMayores");
let personasMayores30 = [];
for (let mayores30 of personas) {
  if (mayores30.edad > 30) {
    personasMayores30.push(mayores30);
  }
}

personasMayores30.forEach((persona) => {
  tablaMayores.innerHTML += `        <tr>
    <td>${persona.nombre}</td>
    <td>${persona.edad}</td>
    <td>${persona.ciudad}</td>
    <td>${persona.sueldo}</td>
</tr>`;
});

//* === Ejercicio 3 ===

// ? Calcular la ganancia de vender 3 productos de cada uno del siguiente array de productos pero solo de los que tienen la propiedad de sold en true, teniendo en cuenta que la ganancia por venta es del 30%.

const productos = [
  { nombre: "Camisa", precio: 150, stock: 20, vendidos: 5, sold: true },
  { nombre: "Pantalón", precio: 250, stock: 15, vendidos: 8, sold: false },
  { nombre: "Zapatillas", precio: 500, stock: 10, vendidos: 3, sold: true },
  { nombre: "Bolso", precio: 300, stock: 25, vendidos: 12, sold: false },
  { nombre: "Cinturón", precio: 100, stock: 30, vendidos: 10, sold: true },
  { nombre: "Sombrero", precio: 200, stock: 5, vendidos: 1, sold: false },
  { nombre: "Bufanda", precio: 50, stock: 50, vendidos: 20, sold: true },
  { nombre: "Guantes", precio: 80, stock: 40, vendidos: 18, sold: false },
  { nombre: "Gorra", precio: 120, stock: 8, vendidos: 2, sold: true },
  { nombre: "Gafas de sol", precio: 180, stock: 12, vendidos: 6, sold: false },
  { nombre: "Pulsera", precio: 20, stock: 60, vendidos: 30, sold: true },
  { nombre: "Collar", precio: 40, stock: 45, vendidos: 25, sold: false },
  { nombre: "Anillo", precio: 60, stock: 35, vendidos: 15, sold: true },
  { nombre: "Pendientes", precio: 30, stock: 55, vendidos: 22, sold: false },
  { nombre: "Reloj", precio: 400, stock: 6, vendidos: 4, sold: true },
];

let gananciaTotal = 0;

for (let ventas of productos) {
  if (ventas.sold) {
    for (let i = 0; i < 3; i++) {
      gananciaTotal += ventas.precio * 0.3;
    }
  }
}
const gananciasVentas = document.getElementById("gananciaVentas");

gananciasVentas.innerHTML = `$${gananciaTotal}`;
