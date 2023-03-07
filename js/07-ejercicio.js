/* Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
 */
let n1 = parseInt(prompt("Introducí un número por favor"));
let n2 = parseInt(prompt("Introducí otro número por favor"));
let n3 = parseInt(prompt("Introducí un último número por favor"));
let r = 0;
let mayor = 0;

if (n1 > n2) {
  r = n1;
} else {
  r = n2;
}

if (r > n3) {
  mayor = r;
} else {
  mayor = n3;
}

document.write("el número mayor es " + mayor);
