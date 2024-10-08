export default class Cl_mBodeguero {
    constructor(inicialDiez, inicialCincuenta, inicialVeinte) {
        this.acumDiez = 0;
        this.acumVeinte = 0;
        this.acumCincuenta = 0;
        this.inicialDiez = inicialDiez;
        this.inicialVeinte = inicialVeinte;
        this.inicialCincuenta = inicialCincuenta;
        }
        
    set inicialDiez(inicialDiez) {
        this._inicialDiez = +inicialDiez;
        }
    get inicialDiez() {
        return this._inicialDiez;
        }
    set inicialVeinte(inicialVeinte) {
        this._inicialVeinte = +inicialVeinte;
        }
    get inicialVeinte() {
        return this._inicialVeinte;
        }
    set inicialCincuenta(inicialCincuenta) {
        this._inicialCincuenta = +inicialCincuenta;
        }
    get inicialCincuenta() {
        return this._inicialCincuenta;
        }

    procesarCliente (cliente){
        if (cliente.denominacion === 10){
            this.acumDiez += cliente.cantidad;
        }
        else if (cliente.denominacion === 20){
            this.acumVeinte += cliente.cantidad;
        }
        else if (cliente.denominacion === 50){
            this.acumCincuenta += cliente.cantidad;
        }
    }
    montoDiez (){
            return (this.acumDiez + this.inicialDiez )* 10;
        }
    montoVeinte(){
            return (this.acumVeinte + this.inicialVeinte) * 20;
        }
    montoCincuenta (){
            return (this.acumCincuenta + this.inicialCincuenta) * 50;
        }
    montoTotal (){
            return this.montoDiez() + this.montoVeinte() + this.montoCincuenta();
        };
    

    }
    
    





    