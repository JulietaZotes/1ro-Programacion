// WHILE
// iteraciones, sumar 10 notas y mostrar promedio
import * as rls from "readline-sync";

/*let nota, suma, cantidadNotas, promedio, contador: number // para no hacer muchas lineas, se escriben variables de un mismo tipo juntas
contador = 1;
suma = 0;
cantidadNotas = 10;

while(contador <= cantidadNotas) {
nota = rls.question("Ingrese una nota: ")
suma = suma + nota;
contador = contador +1; // variable de control
}
promedio = suma / 10;
console.log("El promedio de notas es: ", promedio)*/

// FOR

let nota, suma, cantidadNotas, promedio, contador: number 
contador = 1;
suma = 0;
cantidadNotas = 10;

for(contador; contador <= 10; contador ++) {
nota = rls.questionInt("Ingrese su nota numero: ")
suma = suma + nota 
}
promedio = suma / cantidadNotas
console.log("El promedio es: ", promedio);