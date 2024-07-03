// BÔNUS 01
//  Soma dos Números Pares em um Intervalo
// Crie um programa que some todos os números pares entre dois números fornecidos pelo usuário.

let inicio = parseInt(prompt("Digite o número inicial:"));
let fim = parseInt(prompt("Digite o número final:"));
let soma = 0;
for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
        soma += i;
    }
}
console.log("A soma dos números pares é:", soma);