//Exportar una constante
export const PI = Math.PI;

export let usuario = "miguel";
//Es la manera de exporta variables default
/* const password = "migu3r2";
export default password; */

//es una funcion que se exporta automaicamente , sin tener que definirla en el import , solo se permite 1 sola exportacion default , normalmente se aplica en funciones y clases
export default function saludar() {
  console.log("Hola modulaos +ES6");
}
