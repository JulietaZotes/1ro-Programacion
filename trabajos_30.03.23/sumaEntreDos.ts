import * as rls from "readline-sync";

let num1 = rls.questionInt("Ingrese el primer numero entero: ");
let num2 = rls.questionInt("Ingrese el segundo numero entero: ");
let resultado = 0;

if(num1 > num2) { // ver como dar vuelta los numeros
    let temp = num1; // se intercambian los valores de las variables utilizando una variable temporal `temp`
    num1 = num2;
    num2 = temp; 
}

for (let num = num1; num <= num2; num++) {
    resultado = resultado + num;
}
console.log(`la suma de los numeros entre ${num1} y ${num2} es de = ${resultado}`);