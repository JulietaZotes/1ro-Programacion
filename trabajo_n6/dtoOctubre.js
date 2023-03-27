
//•Desarrolle un algoritmo que dada una compra: precio unitario, cantidad y el mes, indicados por el usuario, determine si el cliente tiene descuento del 15% o no
exports.__esModule = true;
var rls = require("readline-sync");
var precioUnitario = rls.questionInt("Ingrese el precio unitario: $");
var cantidad = rls.questionInt("Ingrese la cantidad de producto: ");
var ingresoMes = rls.question("Ingrese el mes de la compra: ");
var mes = "octubre";
if (ingresoMes == mes) {
    console.log("¡Felicitaciones, ud recibira un 15% de descuento en su compra!");
}
else {
    console.log("Gracias por su compra");
}
