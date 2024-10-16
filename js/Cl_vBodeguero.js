export default class CL_vBodeguero{
    constructor(controlador) {
        this.vista = document.getElementById("mainForm");
        this.tabla = document.getElementById("mainForm_tabla");
        this.inInicialDiez = document.getElementById("mainForm_inicialDiez");
        this.inInicialVeinte = document.getElementById("mainForm_inicialVeinte");
        this.inInicialCincuenta = document.getElementById("mainForm_inicialCincuenta");
        this.btAceptar = document.getElementById("mainForm_btAceptar");

        this.btAgregar = document.getElementById("mainForm_btAgregar");
        this.lblMontoDiez = document.getElementById("mainForm_lblMontoDiez");
        this.lblMontoVeinte = document.getElementById("mainForm_lblMontoVeinte");
        this.lblMontoCincuenta = document.getElementById("mainForm_lblMontoCincuenta");
        this.lblMontoTotal = document.getElementById("mainForm_lblMontoTotal");
        this.lblMontoJornada = document.getElementById("mainForm_lblMontoJornada");
        this.lblPorcentajeCantidadCincuenta = document.getElementById("mainForm_lblPorcentajeCantidadCincuenta");
        this.lblPorcentajeMontoVeinte = document.getElementById("mainForm_lblPorcentajeMontoVeinte");
        
        this.btAgregar.onclick = () => controlador.mostrarVistaCliente();
  
        this.btAceptar.onclick = () =>
        controlador.agregarIniciales({
          inicialDiez: this.inInicialDiez.value,
          inicialCincuenta: this.inInicialCincuenta.value,
          inicialVeinte: this.inInicialVeinte.value, 
        });
       
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
  reportarCliente({
    cedula,
    denominacion,
    cantidad,
    montoCuenta,
    montoDiez,
    montoVeinte,
    montoCincuenta,
    montoTotal,
    montoJornada,
    porcentajeCantidadCincuenta,
    porcentajeMontoVeinte,
  }) {
    this.tabla.innerHTML += `
    <tr>
      <td>${cedula}</td>
      <td>${denominacion}</td>
      <td>${cantidad}</td>
      <td>${montoCuenta}</td>
    </tr>`;
    this.lblMontoDiez.innerHTML = montoDiez;
    this.lblMontoVeinte.innerHTML = montoVeinte;
    this.lblMontoCincuenta.innerHTML = montoCincuenta;
    this.lblMontoTotal.innerHTML = montoTotal;
    this.lblMontoJornada.innerHTML = montoJornada;
    this.lblPorcentajeCantidadCincuenta.innerHTML = porcentajeCantidadCincuenta;
    this.lblPorcentajeMontoVeinte.innerHTML = porcentajeMontoVeinte;
  }
}
    

