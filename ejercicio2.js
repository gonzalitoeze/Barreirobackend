class Contador {
    constructor (responsable) {
        this.responsable = responsable;
        this.cuentaIndividual = 0;
    }

static cuentaGlobal = 0;

obtenerResponsable() {
    return this.responsable;
}

obtenerCuentaIndividual() {
    return this.cuentaIndividual;
}

obtenerCuentaGlobal() {
    return Contador.cuentaGlobal ;
}

contar() {
    this.cuentaIndividual++;
    Contador.cuentaGlobal++;
}

}

const Pepe = new Contador ('Pepe');
const Pedro = new Contador ('Pedro');

Pepe.contar();
Pedro.contar();
Pedro.contar();

console.log(Pedro.obtenerResponsable());
console.log(Pedro.obternerCuentaIndividual());
console.log(Pedro.obtenerCuentaGlobal());