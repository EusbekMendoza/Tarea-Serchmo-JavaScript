console.log("Ya está conectado");

/*
Exercise #2 (sugerencia map())
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

const numeritos = [1, 2, 3, 4];

const suma = numeritos.reduce((ambicioso, valorActual) => ambicioso + valorActual, 0);
const producto = numeritos.reduce((ambicioso, valorActual) => ambicioso * valorActual, 1);

console.log("La suma es " + suma);
console.log("El producto es " + producto);

/*Lo primero que hice fue entender que me pedia el ejercicio, lo cual era sumar todos los números juntos;  para 
después multiplicar todos los números juntos.

//Primero, tenemos qque definir la matriz de números con la que trabajaremos.

//Ahora vamos a usar el poderosísimo método reduce() para calcular la suma de los elementos de la matriz. El método reduce()
va agarrar una función de callback que se ejecuta en cada elemnto de la matriz y un valor inicial.

//Después vamos a utilizar el métod reduce() otra vez, por que es muy chido pero esta vez para calcular el producto de la matriz; esta
ocasión el valor inicial será 1 por que vamos a multiplicar.

//Y para acabar vamos a imprimir  el resultado y los billtes. 

//
*/