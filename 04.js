
console.log("Aquí nos ayudo nuestro Sensei Serchmo");

/*
Exercise #4 (sugerencia filter() e includes())
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
*/


const student1Courses = ['Math', 'English', 'Programming', 'Esto me hace llorar', 'Ciencias ocultas'];

const student2Courses = ['Geography', 'Spanish', 'Programming', 'Ciencias ocultas'];

const commonCourses = [];
for (let course1 of student1Courses ){
    console.log( course1 ); 
    for(let course2 of student2Courses ){
        if( course1 === course2) commonCourses.push( course1 );
    }
}
console.log("Cursos en común: " +  commonCourses.join(", ")  );

const commonCourse2 = student1Courses.filter( course1 =>  student2Courses.includes(course1) );
console.log( commonCourse2 );

//--------Explicación-----------------//
/*
// Primero hicimos dos arreglos student2Courses y student1Courses, que contienen los cursos que tomas los estudiantes.

//Después creamos un arreglo igual de vacío como mi cuenta de banco, que almacenará los cursos que ambos estudiantes tienen en 
común.

//Luego se inicia un ciclo for sobre cada curso en el arreglo , el valor del curso se esconde en la variable course1 y se imprime 
en la consola. 

//El segundo ciclo for anidado itera sobre cada  curso en el aarreglo 

//Dentro del segundo bucle se compara course1 con course2 si ambos son iguales se besan y se escapan al arreglo commonCourses 
usando el método push.


//El segundo, como lo dije es una forma más elegantioza

*/




