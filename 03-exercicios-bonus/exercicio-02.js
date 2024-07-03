// BÔNUS 02
// Contagem de Vogais em uma String
// Escreva um programa que conte o número de vogais em uma string fornecida pelo usuário.

let string = prompt("Digite uma string:");
let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let contagem = 0;
for (let i = 0; i < string.length; i++) {
    if (vogais.includes(string[i])) {
        contagem++;
    }
}
console.log("Número de vogais:", contagem);
