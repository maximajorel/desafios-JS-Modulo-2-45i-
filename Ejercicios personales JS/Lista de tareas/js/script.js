const arrayTareas = JSON.parse(localStorage.getItem("arrayTareasLS")) || [];
const listaTareas = document.getElementById("lista-de-tareas");
const formularioTareas = document.getElementById("formularioAgregar");
const botonBorrar = document.getElementById("boton-borrar");

function mostrarTareas(arrayTareas) {
  listaTareas.innerHTML = "";
  arrayTareas.forEach(function (tarea, indice) {
    listaTareas.innerHTML += `<li class="elemento-lista">
    ${tarea}
    <button id="boton-borrar" class="btn btn-danger" onclick="borrarTarea(${indice})">
      <i
        class="fa-solid fa-trash boton-borrar"
        style="color: #ffffff"
      ></i></button></li> <hr class="separador-tareas">`;
  });
}

formularioTareas.addEventListener("submit", function (evento) {
  const tarea = evento.target.elements.tarea.value;

  evento.preventDefault();
  arrayTareas.unshift(tarea);
  localStorage.setItem("arrayTareasLS", JSON.stringify(arrayTareas));
  mostrarTareas(arrayTareas);
  document.getElementById("input-tarea").value = "";
});

function borrarTarea(indice) {
  swal({
    title: "¿Está seguro de borrar esta tarea?",
    text: "Una vez borrado, no podrás recuperarlo",
    icon: "warning",
    buttons: true,
    dangerMode: true,
    buttons: ["Cancelar", "Borrar"],
  }).then((willDelete) => {
    if (willDelete) {
      arrayTareas.splice(indice, 1);
      localStorage.setItem("arrayTareasLS", JSON.stringify(arrayTareas));
      mostrarTareas(arrayTareas);
      swal("La tarea ha sido borrada", {
        icon: "success",
      });
    } else {
      swal("La tarea no ha sido borrada");
    }
  });
}
mostrarTareas(arrayTareas);
