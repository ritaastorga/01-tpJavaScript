/* Escribe un programa que pida un número y diga si es divisible por 2
 */
let numero = parseInt(prompt("Introducí un número por favor"));

if (numero % 2 === 0){
    document.write("El número es divisible por 2");
}else{
    document.write("El número NO es divisible por 2");
}