let numero: number;
let contador: number;

for (contador = 1; contador <= 100; contador++);
{
  numero = prompt("ingrese un numero");
  contador++;
}

if (numero % 2 === 0 || numero % 3 === 0) {
  console.log("El numero ingresado es multiplo de 2 o de 3");
}
