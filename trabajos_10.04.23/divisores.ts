import * as rls from "readline-sync";
let dividendo: number = 1
let divisor: number = 1
let resultado: number = 0

function esMultiplo (dividendo: number, divisor: number) {
    resultado = dividendo%divisor;
}

function cantidadDeDivisores (dividendo: number){
    let cantidad = 0 
    for (let i = 1; i <= dividendo; i++) {
        esMultiplo(dividendo,i);
        if (resultado === 0) {
            cantidad++;
        }

    }
    return cantidad;   
}

if(dividendo >= 0){
    let dividendo = rls.questionInt("Ingrese el dividendo y conozca su cantidad de divisores: ");
    let cantidad = cantidadDeDivisores(dividendo);
    console.log(`El numero ${dividendo} tiene ${cantidad} divisores`);
}