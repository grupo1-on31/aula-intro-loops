// EXERCÍCIO 01
// Soma de Números de 1 a N
// Escreva um programa que some todos os números 
// de 1 até um número fornecido pelo usuário (N).

let N = parseInt(prompt("Digite um número:"));
let soma = 0;
for (let i = 1; i <= N; i++) {
    soma += i;
}
console.log("A soma é:", soma);
