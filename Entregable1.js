class Usuario {

    libros = [];
    mascotas = [];

    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre ;
        this.apellido = apellido ;
        this.libros = libros;
        this.mascotas = mascotas ;
    }

    addBook(libros) {
        this.libros.push(libros);
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    // getBookNames(libros) {
    //     this.libros.map(libros)
    // }
    
    //retornarMensaje () {
    //    return `Buenas! Soy ${this.nombre} ${this.apellido}, tengo dos mascotas (${this.mascotas}) y mi libro preferido es ${this.libros.map(item => item.nombre)} de los autores ${this.libros.map(item => item.autor)}`;
    //}
}

const libros = [{nombre: 'La Isla Misteriosa', autor: 'Julio Verne'}, {nombre: 'Harry Potter', autor: 'J. K. Rowling'}]
const getBookName = libros.map((nombre) => {
    return nombre
})

const countMascotas = ['Popis', 'Spyke', 'Roma']

const User = new Usuario ('Gonzalo', 'Barreiro', [{nombre: 'La Isla Misteriosa', autor: 'Julio Verne'}], ['Popis', 'Spyke' ]);
console.log(User);
// console.log(User.retornarMensaje())
User.addBook({nombre: 'Harry Potter', autor: 'J. K. Rowling'})
console.log(User.libros)
User.addMascota('Roma');
console.log(User.mascotas);
console.log(countMascotas.length);
console.log(getBookName);

// console.log(User.getFullName())

