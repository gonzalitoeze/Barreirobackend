class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre ;
        this.apellido = apellido ;
        this.libros = [
            {
                nombre: 'Harry Potter', 
                autor:' J. K. Rowling'
            },
            {
                nombre: 'La Isla Misteriosa',
                autor: ' Julio Verne'
            }
        ];
        this.mascotas = [mascotas] ;
    }
    
    set FullName(nameSur) {
        this.nombre.apellido = nameSur
    }


    retornarMensaje () {
        return `Buenas! Soy ${this.nombre} ${this.apellido}, tengo tres mascotas( ${this.mascotas}) y mis libros preferidos son ${this.libros.map(item => item.nombre)} de los autores ${this.libros.map(item => item.autor)}`;
    } 

    

}

const User = new Usuario ('Gonzalo', 'Barreiro', [{nombre: 'Harry Potter', autor: 'J. K. Rowling'}, {nombre: 'La Isla Misteriosa', autor: 'Julio Verne'}], '2 gatos + 1 perro');
console.log(User);
console.log(User.retornarMensaje())
