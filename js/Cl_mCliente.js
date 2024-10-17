export default class Cl_mCliente {
  constructor({ cedula, denominacion, cantidad }) {
    this.cedula = cedula;
    this.denominacion = denominacion;
    this.cantidad = cantidad;
  }
    set cedula(c) {
      this._cedula = +c;
  }
    get cedula() {
      return this._cedula;
  }
    set denominacion(d) {
      this._denominacion = +d;
  }
    get denominacion() {
      return this._denominacion;
  }
    set cantidad(ca) {
      this._cantidad = +ca;
  }
    get cantidad() {
      return this._cantidad;
  }
  montoCuenta() {
    return this.denominacion * this.cantidad;
  }
}