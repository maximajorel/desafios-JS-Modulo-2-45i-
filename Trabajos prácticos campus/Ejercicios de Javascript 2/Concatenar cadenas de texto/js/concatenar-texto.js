let salidaTexto = "";
while (confirm("Por favor ingrese texto") === true) {
  let texto = prompt("Por favor ingrese texto");
  salidaTexto = salidaTexto + texto + "-";
  document.write(`${salidaTexto}`);
  salidaTexto = "";
}
