let intl = Intl.DateTimeFormat("es-ar", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

setInterval(() => {
  let reloj = intl.format(new Date());
  // console.log(reloj);
  document.body.innerHTML = `${reloj}`;
}, 1000);
