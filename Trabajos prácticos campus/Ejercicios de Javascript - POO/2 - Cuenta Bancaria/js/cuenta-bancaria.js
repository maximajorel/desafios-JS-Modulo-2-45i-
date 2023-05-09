const cuenta = {
  titular: "Alex",
  saldo: 0,
  ingresar: function (saldoIngresado) {
    this.saldo += saldoIngresado;
    console.log(`Actualmente tiene $${this.saldo} en su cuenta bancaria`);
  },
  extraer: function (restarSaldo) {
    if (restarSaldo <= this.saldo) {
      this.saldo -= restarSaldo;
      console.log(
        `Se retiro $${restarSaldo} de su cuenta bancaria, su saldo total ahora es $${this.saldo}`
      );
    } else {
      console.log(
        `No posee suficiente dinero en su cuenta, actualmente usted tiene $${this.saldo}`
      );
    }
  },
  informar: function () {
    console.log(`Su saldo actual es de $${this.saldo}`);
  },
};

cuenta.informar();
cuenta.ingresar(2000);
cuenta.extraer(500);
cuenta.informar();
