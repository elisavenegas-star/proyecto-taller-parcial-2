function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}

function aplicarDescuento(monto, porcentaje) {
  return monto - (monto * porcentaje / 100);
}

module.exports = {
  calcularTotal,
  aplicarDescuento
};
