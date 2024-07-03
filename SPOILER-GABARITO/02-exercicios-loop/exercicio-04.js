// EXERCÍCIO 04
// Fatorial de um Número
// Escreva um programa que calcule o fatorial de um número fornecido pelo usuário.

let numero = parseInt(prompt("Digite um número:"));
let fatorial = 1;
for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}
console.log("O fatorial é:", fatorial);
