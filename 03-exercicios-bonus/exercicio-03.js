// BÔNUS 03
// Verificação de Número Primo
// Crie um programa que verifique se um número fornecido pelo usuário é primo.

let numero = parseInt(prompt("Digite um número:"));
let ehPrimo = true;
if (numero <= 1) {
    ehPrimo = false;
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }
}
console.log(ehPrimo ? "Número Primo" : "Não é Primo");
