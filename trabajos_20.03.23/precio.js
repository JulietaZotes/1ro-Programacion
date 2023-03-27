"use strict";
exports.__esModule = true;
// aplicar descuento del 10% en comprar mayores a $1000
var rls = require("readline-sync");
var precioFinal = 0;
var precioProducto1 = 200;
var precioProducto2 = 350;
var subtotal = 0;
var valorDescuento = 0;
var cantidadProducto1 = rls.questionInt("cantidad de producto 1 que se compro: ");
var cantidadProducto2 = rls.questionInt("cantidad de producto 2 que se compro: ");
subtotal = (cantidadProducto1 * precioProducto1) + (cantidadProducto2 * precioProducto2);
console.log("el usuario compro:", cantidadProducto1, "del producto 1", "\nel usuario compro:", cantidadProducto2, "del producto 2", "\nsubtotal", subtotal);
if (subtotal > 1000) {
    valorDescuento = subtotal * 0.1;
    precioFinal = subtotal - valorDescuento;
    console.log("ud. ahorra $", valorDescuento, "por haber gastado mas de $1000", "\nel precio final es $", precioFinal);
}
