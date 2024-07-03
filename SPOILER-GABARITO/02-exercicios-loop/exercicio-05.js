// EXERCÍCIO 05
// Tabuada de Multiplicação
// Escreva um programa que exiba a tabuada de multiplicação de um número fornecido pelo usuário.

let numero = parseInt(prompt("Digite um número:"));
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
