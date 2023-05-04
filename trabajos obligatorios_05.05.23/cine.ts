/*Diseñar un algoritmo que recorra las 
butacas de una sala de cine y determine 
cuántas butacas desocupadas hay.
• Suponga que para modelar este 
problema, se utiliza un arreglo con 
valores lógicos:
- La presencia de un valor verdadero (true) en 
el arreglo indica que la butaca está ocupada.
- La presencia de un valor falso (false) en el 
arreglo indica que la butaca está desocupada. */

const totalButacas: boolean[] = [true, false, false, true, true, true, false, false, true]

function cantidadButacasDesocupadas (butacas: boolean[]): number {
    let contadorButacasDesocupadas = 0;
    for (let i: number = 0; i < butacas.length; i++){
        if (!butacas[i]){
            contadorButacasDesocupadas ++;
        }
    }
    return contadorButacasDesocupadas;
}

cantidadButacasDesocupadas(totalButacas);
console.log(`Hay ${cantidadButacasDesocupadas(totalButacas)} butacas desocupadas en esta sala.`);
