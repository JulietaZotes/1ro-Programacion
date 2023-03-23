"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var usuario = "Juan";
var contraseña = "claveJuan";
var ingresoUsuario = rls.question("Ingrese su nombre de usuario: ");
var ingresoContraseña = rls.question("Ingrese su contraseña: ");
if ((usuario == ingresoUsuario) && (contraseña == ingresoContraseña)) {
    console.log("Ha ingresado correctamente");
}
else {
    console.log("El usuario y/o contraseña son incorrectos");
}
