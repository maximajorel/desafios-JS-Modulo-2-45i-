const arrayTareas = JSON.parse(localStorage.getItem("arrayTareasLS")) || [];
const listaTareas = document.getElementById("lista-de-tareas");
const formularioTareas = document.getElementById("formularioAgregar");
const botonBorrar = document.getElementById("boton-borrar");
const tareasCompletadas =
  JSON.parse(localStorage.getItem("tareas-completadasLS")) || [];
const ulTareasCompletadas = document.getElementById("tareas-completadas");

// ======================================
// ===== FUNCIONES =====
function mostrarTareas(arrayTareas) {
  listaTareas.innerHTML = "";
  arrayTareas.forEach(function (tarea, indice) {
    listaTareas.innerHTML += `<li class="elemento-lista">
    <p class="elemento-lista-texto">
    ${tarea}
    </p>

      <button id="boton-completar-tarea" class="btn btn-success" onclick="completarTarea(${indice})"><i class="fa-solid fa-check"></i></button>
       <button id="boton-borrar" class="btn btn-danger" onclick="borrarTarea(${indice})">
      <i class="fa-solid fa-trash boton-borrar"></i></button></li> <hr class="separador-tareas">`;
  });
}
function mostrarTareasCompletadas(arrayTareasCompletadas) {
  ulTareasCompletadas.innerHTML = "";
  arrayTareasCompletadas.forEach(function (tareaCompletada, indice) {
    ulTareasCompletadas.innerHTML += `<li class="elemento-lista"><del><p class="elemento-lista-texto">${tareaCompletada}</p></del><button class="btn btn-danger" onclick="borrarTareaCompletada(${indice})">Quitar tarea completada</button></li><hr>`;
  });
}
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
function completarTarea(indice) {
  swal({
    title: "¿Marcar como completada la tarea?",
    text: "Una vez marcada como completada, no podrá volver a marcarla como pendiente",
    icon: "warning",
    buttons: true,
    dangerMode: true,
    buttons: ["Cancelar", "Completar"],
  }).then((willDelete) => {
    if (willDelete) {
      tareasCompletadas.unshift(arrayTareas[indice]);
      arrayTareas.splice(indice, 1);
      localStorage.setItem("arrayTareasLS", JSON.stringify(arrayTareas));
      mostrarTareas(arrayTareas);
      swal("La tarea ha sido completada", { icon: "success" });
      localStorage.setItem(
        "tareas-completadasLS",
        JSON.stringify(tareasCompletadas)
      );
      mostrarTareasCompletadas(tareasCompletadas);
    }
  });
}
function borrarTareaCompletada(indice) {
  tareasCompletadas.splice(indice, 1);
  localStorage.setItem(
    "tareas-completadasLS",
    JSON.stringify(tareasCompletadas)
  );
  mostrarTareasCompletadas(tareasCompletadas);
}
formularioTareas.addEventListener("submit", function (evento) {
  const tarea = evento.target.elements.tarea.value;

  evento.preventDefault();
  arrayTareas.unshift(tarea);
  localStorage.setItem("arrayTareasLS", JSON.stringify(arrayTareas));
  mostrarTareas(arrayTareas);
  document.getElementById("input-tarea").value = "";
});

mostrarTareas(arrayTareas);
mostrarTareasCompletadas(tareasCompletadas);
