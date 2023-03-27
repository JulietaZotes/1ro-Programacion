"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var alturaPersona = rls.questionInt("Indique su altura: ");
if (alturaPersona >= 1.30) {
    console.log("Puede subirse a la montaña rusa");
}
else {
    console.log("No puede subirse a la montaña rusa");
}
