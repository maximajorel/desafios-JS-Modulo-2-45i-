const auto = {
  marca: "Renault",
  color: "Blanco",
  modelo: "Duster",
  encendido: false,
  encender: function () {
    this.encendido = true;
    console.log(`Auto encendido`);
  },
  apagar: function () {
    this.encendido = false;
    console.log(`El auto se apagó`);
  },
};

auto.encender(); // Output esperado: Auto encendido
auto.apagar(); // Output esperado: El auto se apagó
