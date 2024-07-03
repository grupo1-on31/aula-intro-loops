// EXERCÍCIO 02
// Verificação de Ano Bissexto
// Escreva um programa que verifique se um ano fornecido pelo usuário é bissexto.

let ano = parseInt(prompt("Digite um ano:"));
if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log("Ano Bissexto");
} else {
    console.log("Ano Não Bissexto");
}
