/* Es importante que los modulos se coloquen al inicio de los documentos, asi esten en la misma carpeta siempre colocar "./carpeta" */
//Se esta trayendo lo q exportarmos del otro archivo , no olvidar la extension
import saludar, { PI, usuario } from "./constantes.js";
//Se puede generar alias para las importaciones
import { aritmetica as calculo } from "./aritmeticas.js";

console.log("archivo Modulos Js");
console.log(PI, usuario);

console.log(calculo.sumar(2, 2));
console.log(calculo.restar(4, 2));

saludar();
