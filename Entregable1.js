class Usuario {

    mascotas = [];

    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre ;
        this.apellido = apellido ;
        this.libros = libros;
        this.mascotas = mascotas ;
    }
    
    //retornarMensaje () {
    //    return `Buenas! Soy ${this.nombre} ${this.apellido}, tengo dos mascotas (${this.mascotas}) y mi libro preferido es ${this.libros.map(item => item.nombre)} de los autores ${this.libros.map(item => item.autor)}`;
    //}

    getFullName() {
        const nombreYApellido = ((name) => name.nombre);
        const name = nombre.map(nombreYApellido);
    }

    addBook(libros) {
        // let libro = {nombre: 'La Isla Misteriosa', autor: 'Julio Verne'}
        this.libros.push(libros);
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }
}



const countMascotas = ['Popis', 'Spyke', 'Roma']

const User = new Usuario ('Gonzalo', 'Barreiro', [{nombre: 'La Isla Misteriosa', autor: 'Julio Verne'}/* , {nombre: 'Harry Potter', autor: 'J. K. Rowling'} */], ['Popis', 'Spyke' ]);
console.log(User);
// console.log(User.retornarMensaje())
console.log(User.libros);
User.addBook({nombre: 'Harry Potter', autor: 'J. K. Rowling'})
console.log(User.libros)
console.log(User.mascotas);
User.addMascota('Roma');
console.log(User.mascotas);
console.log(countMascotas.length);

// console.log(User.getFullName())

