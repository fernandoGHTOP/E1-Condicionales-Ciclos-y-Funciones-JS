// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.


// const ejercicioUno=parseInt(prompt('Elige un numero del 1 al 10'));
// function uno(numero) {
//     if (numero % 2===0  && numero !== 0) {
//         console.log('El número que elegiste es par');
//     } else {
//         console.log('El número que elegiste es inpar');
//     }
// }

// uno(ejercicioUno);


// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.


// const numeroUno = parseInt(prompt('Jugador 1: Elige un numero del 1 al 10'));
// const numeroDos= parseInt(prompt('Jugador 2: Elige un numero del 1 al 10'));

// function dos(a,b){
//     if (a>b){
//         console.log('Gano el jugador 1');
//     }
//     else if(b>a){
//         console.log('Gano el jugador 2');
//     }
//     else{
//         console.log('Empate');
//     }
// }
// dos(numeroUno,numeroDos);

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.


// const ejercicioTres = parseInt(prompt('Elige un numero del 1 al 10'));

// function tres(numero) {
//     if (numero % 5 === 0 && numero !== 0) {
//         console.log('El número que elegiste ES múltiplo de 5');
//     } else {
//         console.log('El número que elegiste NO ES múltiplo de 5');
//     }
// }

// tres(ejercicioTres);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

// const ejercicioCuatro = parseInt(prompt('Elige un numero del 1 al 10'));

// function cuatro(numero) {
//     for(let i =0; i<=numero; i++){
//         console.log(i)
//     }
// }
// cuatro (ejercicioCuatro);


// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

// const nombreCinco = prompt('Elige un nombre');
// const repeticionesCinco = parseInt(prompt('¿Cuántas veces lo repetimos?'));

// function cinco(nombre, repeticiones) {
//     for (let i = 0; i < repeticiones; i++) {
//         console.log('Tu nombre es ' + nombre);
//     }
// }
// cinco(nombreCinco, repeticionesCinco);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

// let listadoSeis = ['Fernando', 'Abril', 'Micaela', 'Ruben', 'Monica'];

// function array(listado){

//     console.log(listado[0]);
//     console.log(listado[1]);
//     console.log(listado[2]);
//     console.log(listado[3]); 
//     console.log(listado[4]); 
// }

// array(listadoSeis);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

// let listadoSiete = [1,2,3,4,5,6,7,8,9,10];

// function array(listado){

//     console.log(listado[0]);
//     console.log(listado[1]);
//     console.log(listado[2]);
//     console.log(listado[3]); 
//     console.log(listado[4]);
//     console.log(listado[6]); 
//     console.log(listado[7]); 
//     console.log(listado[8]); 
//     console.log(listado[9]);
//     console.log(listado[10]);   

// }

// array(listadoSiete);


// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function multiplicarOcho(array, numero) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] * numero);
    }
}




