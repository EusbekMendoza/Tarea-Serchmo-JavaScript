console.log("Vamos con el dos y ya no puedo con mi vida");

/*
Exercise #2 (sugerencia map())
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/


function duplicarPoderes(numeros) {
    let numerosDuplicados = numeros.map(function(numero) {
      return numero * 2; 
    });
    console.log(numerosDuplicados);
    }
    let matriz = [1, 2, 4, 5];
    duplicarPoderes(matriz); 

/*
//Lo primero entender que nos pide el ejercicio por que eso es lo más importante.

//Luego bautizamos una función para que esté libre pecado, llamada duplicarPoderes, con un parámetros.

//Después usamos el súper método map() en números.

//Al final imprimimos.















*/

