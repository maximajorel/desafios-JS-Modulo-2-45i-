let producto = {
  nombre: "Iphone 14 Pro Max",
  precio: 1500,
  descripcion:
    "Descubre la nueva tecnología del celular más potente del mercado.",
};

//Generación numero aleatorio ID
producto.id = Math.floor(Math.random() * 11);

// Acceder a dos propiedades de los objetos y mostrar su valor en la consola

console.log(
  "Presentamos el nuevo " +
    producto.nombre +
    " en oferta a tan solo $" +
    producto.precio
);

// Agregar dos nuevas propiedades llamadas stock e imagen y asignarle un valor a cada una

producto.stock = true;
producto.imagen = "/images/products/iphone-14-pro-max/iphone.jpg";

// Utilizar sintaxis de corchetes para agregar otra propiedad llamada código y asignarle un valor.

producto["codigo"] = "AGEB318912";

// Eliminar la propiedad de Stock

delete producto.stock;

// Cambiar el precio por otro valor

producto.precio = 1499;

// Utilizar la sintaxis de punto para agregar una nueva propiedad llamada colores. Esta tendra como valor un array con los colores disponibles

producto.colores = ["Morado Oscuro", "Oro", "Plata", "Negro espacial"];

console.log(
  "Los colores disponibles para el producto " +
    producto.nombre +
    " " +
    "son: " +
    producto.colores
);
