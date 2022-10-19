const fs = require('fs');

class Contenedor {
    constructor(file) {
        this.file = file;
    }

    async save (producto) {
        try {
            //generar el archivo/file
            if (fs.existsSync(this.file)) {

                //en el caso de que el archivo de objetos exista debemos leer el archivo
                let info = await fs.promises.readFile(this.file, 'utf-8');
                let result = JSON.parse(info);
                if (result.length > 0) {
                    let lastId = result[result.length-1].id+1 //al ultimo objeto del id le suma 1 y se lo asigna

                    let newProducto = {
                        id: lastId,
                        ...producto
                    }
                    result.push(newProducto);
                    //en este caso hay que sobreescribir el archivo pero enviándole el "result".
                    await fs.promises.writeFile(this.file, JSON.stringify(result,null,2))
                    return lastId;

                } else {
                    let lastId=1

                    let newProducto = {
                        id: lastId,
                        ...producto
                    }
                    result.push(newProducto);
                    //en este caso hay que sobreescribir el archivo pero enviándole el "result".
                    await fs.promises.writeFile(this.file, JSON.stringify(result, null, 2))
                    return lastId;
                }
                
            } else {

                //generar un producto/objeto con id1 ya que es la creación del archivo
                let newProducto = {
                    id: 1,
                    title: producto.title,
                    desc: producto.desc,
                    price: producto.price,
                    //utilizamos "...productos" (spread operator) para copiar la información dentro del producto nuevo
                }

                //los objetos hay que introducirlos en un array, para ello podemos encerrar a "producto", dentro de corchetes []
                await fs.promises.writeFile(this.file, JSON.stringify([newProducto], null, 2));
                return 1;
            }

        } catch (err) {
            console.log(err)
        }
    }

    async getAll() {
        try {
            if (fs.existsSync(this.file)){
                let info = await fs.promises.readFile(this.file, 'utf-8');
                let result = JSON.parse(info)
                return result;
            } else {
                return "No se ha encontrado el archivo 'file'"
            }
            } catch (err) {
                console.log(err);
        }
    }

    async getById() {
        try {
            if (fs.existsSync(this.file)){

            }
        } catch(err) {
            console.log(err)
        }
    }
}

let contenedor = new Contenedor('productos.txt');

let producto1 = {
    id: 1,
    title: 'producto1',
    desc: 'un producto1',
    price: 100,
}
let producto2 = {
    id: 2,
    title: 'producto2',
    desc: 'un producto2',
    price: 200
}
let producto3 = {
    id: 3,
    title: 'producto3',
    desc: 'un producto3',
    price: 300
}

metodos = async() => {
    console.log(await contenedor.save(producto1))
    console.log(await contenedor.save(producto2))
    console.log(await contenedor.save(producto3))
    console.log(await contenedor.getAll())
}
metodos()

//esta linea recibe a "save" y "(producto)" pregunta a "if" si existe el producto. Si no existe, lo crea.






































// const fs = require('fs');

// class Contenedor {
//     constructor(contenedor) {
//         this.contenedor = contenedor;
//         this.objects = this.readData(this.contenedor) || [];
//     }

//     async generateId() {
//         try {
//             this.objects = await this.getAll() || [];
//             let maxId = this.objects.length;
//             this.objects.forEach(producto => {
//                 producto.id > maxId ? maxId = producto.id : maxId
//             })
//             return maxId +1;
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     async save(obj) {
//         try {
//             const readFile = await this.getAll();
//             if (!readFile) {
//                 obj.id = await this.generateId();
//                 this.objects.push(obj);
//                 this.writeData(this.objects);
//                 return obj.id;
//             }
//             this.objects = readFile;
//             obj.id = await this.generateId();
//             this.objects.push(obj);
//             this.writeData(this.objects);
//             return obj.id;

//         } catch (error){
//             console.log(error);
//         }
//     }

//     async getById(id) {
//         try {
            
//         }
//     }
// }
//  module.exports.Contenedor