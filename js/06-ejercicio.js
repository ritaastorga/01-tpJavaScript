/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.*/
let mayorN = 0;
let n1 = parseInt(prompt("Introducí un número por favor"));
let n2 = parseInt(prompt("Introducí otro número por favor"));

if (n1 > n2) {
  mayorN = n1;
} else {
  mayorN = n2;
}

document.write("el número mayor es " + mayorN);
