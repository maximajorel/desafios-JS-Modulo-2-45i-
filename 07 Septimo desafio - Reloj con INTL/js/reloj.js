let intl = Intl.DateTimeFormat("es-ar", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

setInterval(() => {
  let reloj = intl.format(new Date());
  console.log(reloj);
  // document.body.innerHTML = `${reloj}`;
  document.getElementById("reloj-h3").innerHTML = reloj;
}, 1000);

function cambiarTema() {
  let main = document.getElementById("main");
  let switchButton = document.getElementById("switch-button");

  if (main.classList.contains("contenedor-principal-reloj-oscuro")) {
    main.classList.remove("contenedor-principal-reloj-oscuro");
    main.classList.add("contenedor-principal-reloj-claro");
    switchButton.classList.remove("boton-oscuro");
    switchButton.classList.add("boton-claro");
    switchButton.textContent = "Cambiar a tema oscuro";
  } else {
    main.classList.remove("contenedor-principal-reloj-claro");
    main.classList.add("contenedor-principal-reloj-oscuro");
    switchButton.classList.remove("boton-claro");
    switchButton.classList.add("boton-oscuro");
    switchButton.textContent = "Cambiar a tema claro";
  }
}
