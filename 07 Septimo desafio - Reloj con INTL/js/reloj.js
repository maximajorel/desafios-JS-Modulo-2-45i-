let intl = Intl.DateTimeFormat("es-ar", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

setInterval(() => {
  let reloj = intl.format(new Date());
  console.log(reloj);
  document.getElementById("reloj1-h3").innerHTML = reloj;
  document.getElementById("reloj2-h3").innerHTML = reloj;
  document.getElementById("reloj3-h3").innerHTML = reloj;
}, 1000);

function cambiarTema() {
  let main = document.getElementById("main");
  let switchButton = document.getElementById("switch-button");
  let titulo = document.getElementById("titulo-hora");
  let reloj2 = document.getElementById("reloj2-h3");

  if (main.classList.contains("contenedor-principal-reloj-oscuro")) {
    main.classList.remove("contenedor-principal-reloj-oscuro");
    main.classList.add("contenedor-principal-reloj-claro");
    switchButton.classList.remove("boton-oscuro");
    switchButton.classList.add("boton-claro");
    titulo.classList.remove("title-reloj-oscuro");
    titulo.classList.add("title-reloj-claro");
    reloj2.classList.remove("reloj2");
    reloj2.classList.add("reloj-2-claro");
    switchButton.textContent = "Cambiar a tema oscuro";
  } else {
    main.classList.remove("contenedor-principal-reloj-claro");
    main.classList.add("contenedor-principal-reloj-oscuro");
    switchButton.classList.remove("boton-claro");
    switchButton.classList.add("boton-oscuro");
    titulo.classList.remove("title-reloj-claro");
    titulo.classList.add("title-reloj-oscuro");
    reloj2.classList.remove("reloj-2-claro");
    reloj2.classList.add("reloj2");
    switchButton.textContent = "Cambiar a tema claro";
  }
}
