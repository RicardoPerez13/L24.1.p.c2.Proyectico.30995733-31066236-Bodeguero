import Cl_vBodeguero from "./Cl_vBodeguero.js";
import Cl_vCliente from "./Cl_vCliente.js";
import Cl_mBodeguero from "./Cl_mBodeguero.js";
import Cl_mCliente from "./Cl_mCliente.js";

export default class CL_controlador {

    constructor() {
      this.mBodeguero = new Cl_mBodeguero();
      this.vCliente = new Cl_vCliente(this);
      this.vBodeguero = new Cl_vBodeguero(this);
    }
    mostrarVistaCliente() {
        this.vBodeguero.ocultar();
        this.vCliente.mostrar();
      }
    mostrarVistaBodeguero() {
        this.vCliente.ocultar();
        this.vBodeguero.mostrar();
      }
    agregarIniciales({inicialDiez, inicialCincuenta, inicialVeinte}) {
        this.mBodeguero.inicialDiez = inicialDiez;
        this.mBodeguero.inicialCincuenta = inicialCincuenta;
        this.mBodeguero.inicialVeinte = inicialVeinte;
        document.getElementById("mainForm_inicialDiez").disabled = "disabled"; 
        document.getElementById("mainForm_inicialCincuenta").disabled = "disabled"; 
        document.getElementById("mainForm_inicialVeinte").disabled = "disabled"; 
        document.getElementById("mainForm_btAaceptar").disabled = "disabled";
      }

    agregarCliente({cedula, denominacion, cantidad}) {
        let cliente = new Cl_mCliente({ cedula, denominacion, cantidad});
        this.mBodeguero.procesarCliente(cliente);
        this.vBodeguero.reportarCliente({
          cedula: cliente.cedula,
          denominacion: cliente.denominacion,
          cantidad: cliente.cantidad,
          montoCuenta: cliente.montoCuenta(),
          montoDiez: this.mBodeguero.montoDiez(),
          montoVeinte: this.mBodeguero.montoVeinte(),
          montoCincuenta: this.mBodeguero.montoCincuenta(),
          montoTotal: this.mBodeguero.montoTotal(),
          montoJornada: this.mBodeguero.montoJornada(),
        });
        this.mostrarVistaBodeguero();
      }

}