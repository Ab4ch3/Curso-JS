//Exportar un funcion
export function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
//Exportar un paquete de funciones
export const aritmetica = {
  //cuando los objeto tienen el mismo nombre q la propiedad se puede dejar el nombre como es
  sumar,
  restar,
};
