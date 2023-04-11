let palabraUsuario = prompt("Por favor ingrese su texto");

let resultado = "";

for (let i = palabraUsuario.length - 1; i >= 0; i--) {
  resultado = resultado + palabraUsuario[i];
}
alert(resultado);
