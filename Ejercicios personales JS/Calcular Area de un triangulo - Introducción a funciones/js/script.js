let base = +prompt("Por favor ingrese la base del triangulo");
let altura = +prompt("Por favor ingrese la altura del triangulo");

function calcularAreaTriangulo(baseTriangulo, alturaTriangulo) {
  let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
  return areaTriangulo;
}
let area = calcularAreaTriangulo(base, altura);

console.log(
  `El area del triangulo con base ${base} y altura ${altura} es ${area} cm2`
);
