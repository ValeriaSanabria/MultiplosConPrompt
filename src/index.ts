let numero1: number;
let numero2: number;

numero1 = Number(prompt("Ingrese un numero"));
console.log("El numero ingresado es: " + numero1);
numero2 = Number(prompt("Ingrese un numero multiplo"));
console.log("El numero multiplo es: " + numero2);

function esMultiplo(numero1: number, numero2: number): boolean {
  return numero1 % numero2 === 0;
}

if (esMultiplo(numero1, numero2)) {
  console.log(numero1 + " Es multiplo de " + numero2);
} else {
  console.log(numero1 + " No es multiplo de " + numero2);
}
