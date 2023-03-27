import * as rls from "readline-sync";
const posicion: number = rls.questionInt("Ingrese su posición de llegada: ");
let mensaje: string = ""
if(posicion <= 0) {
    mensaje = "Debe ser un numero entero positivo"
}
else if(posicion === 1) {
   mensaje = "Medalla de oro"
} 
else if(posicion === 2) {
   mensaje = "Medalla de plata"
}
else if(posicion === 3) {
    mensaje = "Medalla de bronce"
}
else if(posicion >= 4) {
    mensaje = "Certificado de participación"
}
console.log(mensaje)

// switch case = evalua 1 sola vez y luego ejecuta

if(posicion <= 0) {
    mensaje = "Debe ingresar un entero positivo"
} else {
switch(posicion){
    case 1: 
      mensaje = "Medalla de oro"
      break;
    case 2: 
      mensaje = "Medalla de plata"
      break;
    case 3: 
      mensaje = "Medalla de bronce"
      break;
    default: 
      mensaje = "Certificado de participación"
}}