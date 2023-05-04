import * as rls from "readline-sync";

const dim: number = rls.questionInt("Ingrese la dimension de los arreglos: ");
const arrayNum1: number [] = new Array (dim);
const arrayNum2: number [] = new Array (dim);

function pedirNumerosArray (array: number[]): void{
    for (let i = 0; i < array.length; i ++){
        array[i] = rls.questionInt("Ingrese un numero: ");
    }
    console.log (array);
    }

function productoEscalar (array1: number[], array2: number[]) : void {
    let resultado = 0
    for (let i: number = 0; i < array1.length; i ++){
        resultado += array1[i] * array2[i];
    }
    console.log(`El resultado del producto escalar entre los dos arreglos es: ${resultado}`)
}

pedirNumerosArray(arrayNum1);
pedirNumerosArray(arrayNum2);
productoEscalar(arrayNum1,arrayNum2);

