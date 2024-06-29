console.log("Espero que si me salgan los ejercicios");

/*
Exercise #1 (sugerencia: join())
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}

printOutString();
Complete the function to print out the string: This is a sentence.
*/

let oracion = ["Esto", "me", "hace", "llorar."];
function EsMomentoDeReir() {

  let palabras = "";
  for (let i = 0; i < oracion.length; i++) {
    palabras += oracion[i];
    if (i < oracion.length - 1) {
      palabras += " ";
    }
  }
  console.log(palabras);
}

EsMomentoDeReir();

/*
//Lo primero que hice fue declarar mi poderisísima variable para iniciarla cómo un arreglo 
para concatenar.

//Luego en mi lógica creé una función a la cual bautice como EsMomentoDeReir, que se va a encargar
de concatenar las palabras de mi arrgelo oracion.

//Luego en mi bella función  declaré mi variable llamada palabras y la inicié como una cadena vacía; y
así mi podera variable cómo es bien chida va almacenar la cadena resultante.

//Después usamos un bucle for y la varibale i actúa como índice del bucle; y n os fijamos así muy chido que no es la
última palabra del arreglo con oracion.length.

//Al final usamos console.log para imprimir la cadena completa, almacenada en la vaiable palabras.

//Y ahora si al final final, le gritamos a la función para que haga su trabajo, y nos secamos las lagrimas por que si se 
se ve bien.

*/

