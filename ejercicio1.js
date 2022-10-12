
//1. Función de lista
//function mostrarLista(lista) {
//    if (lista.length === 0) {
//        return 'Lista vacìa'
//    }
//    return lista;
//}
//
//console.log(mostrarLista([]));
//console.log(mostrarLista([1]));

//2. Función de anónima
//(function(lista) {
//    if(lista.length === 0) {
//        console.log('Lista vacía')
//    }
//    console.log(lista);
//})([1, 2, 3])

//3. Multiplicador
function multiplicador(numero1) {
    const num1 = numero1;
    return function(num2) {
        return num1 * num2;
    };
}

const duplicar = multiplicador(2);
const triplicar = multiplicador(3);

console.log(duplicar(5))
console.log(triplicar(5))