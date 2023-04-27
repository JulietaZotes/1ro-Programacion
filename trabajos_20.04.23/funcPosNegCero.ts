import * as rls from "readline-sync";

const arrayDim: number = rls.questionInt("Ingrese la dimension del arreglo: ");
const arrayNum: number [] = new Array (arrayDim);

function pedirNumerosArray (array: number[]): void{
for (let i = 0; i < array.length; i ++){
    array[i] = rls.questionInt("Ingrese un numero: ");
}
console.log (array);
}

function sumaPositivosArray (array: number []): void {
    let contadorPositivos = 0
    for(let i = 0; i < array.length; i ++){
        if (array[i] > 0){
            contadorPositivos ++
        }
    }
console.log(`${contadorPositivos} son positivos`);
}

function sumaNegativosArray (array: number []): void {
    let contadorNegativos = 0
    for(let i = 0; i < array.length; i ++){
        if (array[i] < 0){
            contadorNegativos ++
        }
    }
console.log(`${contadorNegativos} son negativos`);
}

function sumaCerosArray (array: number []): void {
    let contadorCeros = 0
    for(let i = 0; i < array.length; i ++){
        if (array[i] == 0){
            contadorCeros ++
        }
    }
console.log(`${contadorCeros} son cero`);
}

pedirNumerosArray(arrayNum);
sumaPositivosArray(arrayNum);
sumaNegativosArray(arrayNum);
sumaCerosArray(arrayNum);