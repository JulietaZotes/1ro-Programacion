import * as rls from "readline-sync";

let alturaPersona: number = rls.questionInt("Indique su altura: ");

if (alturaPersona >= 130) {
   console.log("Puede subirse a la montaña rusa")
} 
else {
    console.log("No puede subirse a la montaña rusa");
}
