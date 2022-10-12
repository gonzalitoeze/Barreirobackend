function concatenar(texto) {
    const x = texto;
    return function(nombre) {
        return `Saluda a ${nombre} - ` + texto;
    }
}


const saludar = concatenar('Hola ');
const reganiar = concatenar('que mal!! ');
const felicitar = concatenar('felicitaciones!! ');

console.log(saludar('Pepe'))
console.log(reganiar('Julio'))
console.log(felicitar('Valen'))